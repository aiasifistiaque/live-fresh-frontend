import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { shrinkSidebar } from '../../../store/slices/toggleSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuth from '../../../hooks/useAuth';
import LoginModal from '../../auth/login/LoginModal';
import DeliveryLocationModal from '../../modals/delivery-location/DelivaryLocationModal';
import useLocation from '../../../hooks/useLocation';
import { setLocation } from '../../../store/slices/locationSlice';
import SmallScreen from '../../util/large-screen/SmallScreen';
import { logout } from '../../../store/slices/authSlice';
//import { logout } from '../../../store/slices/authSlice';

const variants = {
	open: { opacity: 1 },
	closed: { display: 'none', opacity: 0 },
};

const Sidebar = () => {
	const { sidebar } = useSelector(state => state.toggle);
	const dispatch = useDispatch();
	const springStyle = useSpring({
		opacity: sidebar ? 1 : 0,
		opacity: !sidebar ? 0 : 1,
		delay: 0,
	});
	return (
		<animated.div style={springStyle}>
			<div
				className={styles.container}
				onClick={e => e.stopPropagation()}
				style={{ display: sidebar ? 'flex' : 'none' }}>
				<div
					className={styles.cancel}
					onClick={() => dispatch(shrinkSidebar())}>
					<img src='/icons/cancel-light.svg' alt='X' />
				</div>
				<Items />
			</div>
		</animated.div>
	);
};

const Items = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLoggedIn, loading } = useAuth();

	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	const [loc, setLoc] = useState(false);
	const locationOpen = () => setLoc(true);
	const locationClose = () => setLoc(false);

	const [city, setCity] = useState();
	const [area, setArea] = useState();

	const { location } = useLocation();

	const selectLocation = () => {
		if (area && city) {
			dispatch(setLocation({ area, city }));
			locationClose();
		}
	};

	return (
		<div className={styles.items}>
			{!loading && isLoggedIn ? (
				<Item
					onClick={() => {
						dispatch(shrinkSidebar());
						router.push('/profile/overview');
					}}>
					Profile
				</Item>
			) : (
				<>
					<Item
						onClick={() => {
							dispatch(shrinkSidebar());
							open();
						}}>
						Login
					</Item>
				</>
			)}

			<Item
				onClick={() => {
					dispatch(shrinkSidebar());

					router.push('/');
				}}>
				Home
			</Item>

			<Item
				onClick={() => {
					dispatch(shrinkSidebar());
					router.push('/categories');
				}}>
				Categories
			</Item>
			<SmallScreen>
				<Item
					onClick={() => {
						dispatch(shrinkSidebar());
						locationOpen();
					}}>
					{location?.area ? location.area : 'Select location'},{' '}
					{location?.city && location.city}
				</Item>

				<DeliveryLocationModal
					show={loc}
					hide={locationClose}
					setCity={e => setCity(e)}
					setArea={e => setArea(e)}
					selectLocation={selectLocation}
				/>
			</SmallScreen>

			<Item>{`About Us`}</Item>
			{!loading && isLoggedIn && (
				<Item onClick={() => dispatch(logout())}> Logout</Item>
			)}
			<LoginModal show={show} hide={close} />
		</div>
	);
};

const Item = ({ children, href, onClick }) => {
	return (
		<div className={styles.item} onClick={onClick}>
			<a>{children}</a>
		</div>
	);
};

export default Sidebar;
