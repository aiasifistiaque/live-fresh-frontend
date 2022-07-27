import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LoginModal from '../../auth/login/LoginModal';
import DeliveryLocationModal from '../../modals/delivery-location/DelivaryLocationModal';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { setLocation } from '../../../store/slices/locationSlice';
import LargeScreen from '../../util/large-screen/LargeScreen';
import useLocation from '../../../hooks/useLocation';
import {
	expandSidebar,
	shrinkSidebar,
} from '../../../store/slices/toggleSlice';

const Header = ({ landing, scroll }) => {
	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	const auth = useAuth();

	const { sidebar } = useSelector(state => state.toggle);

	return (
		<div
			className={`${styles.container} ${
				(scroll > 200 || !landing || sidebar) && styles.scrolled
			}`}>
			<div className={styles.left}>
				<Toggle src={sidebar ? 'cancel' : 'menu'} />
				{(!landing || scroll > 200) && <Logo />}
				<LargeScreen>
					<Location />
				</LargeScreen>
			</div>
			<div className={styles.middle}></div>
			<div className={styles.right}>
				<SquareItem src='search' />
				<SquareItem src='cart' href='/cart' />

				<LargeScreen>
					{auth.loading ? null : auth.isLoggedIn == true ? (
						<SquareItem href='/profile/overview' src='profile' />
					) : (
						<SquareText onClick={open}>Login</SquareText>
					)}
				</LargeScreen>
			</div>
			<LoginModal show={show} hide={close} />
		</div>
	);
};

const Toggle = ({ src, href }) => {
	const dispatch = useDispatch();
	const { sidebar } = useSelector(state => state.toggle);
	return (
		<div
			className={styles.squareItem}
			onClick={() =>
				sidebar ? dispatch(shrinkSidebar()) : dispatch(expandSidebar())
			}>
			<img src={`/icons/${src}.svg`} alt='..' />
		</div>
	);
};

const SquareItem = ({ src, href }) => {
	return (
		<Link href={href ? href : '/'}>
			<div className={styles.squareItem}>
				<img src={`/icons/${src}.svg`} alt='..' />
			</div>
		</Link>
	);
};

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className={styles.logo}>
				<img src='/test/headerlogo.png' alt='Live Fresh' />
			</div>
		</Link>
	);
};

const SquareText = ({ children, onClick }) => {
	return (
		<div className={styles.squareText} onClick={onClick}>
			<p>{children}</p>
		</div>
	);
};

const Location = ({ children }) => {
	const [city, setCity] = useState();
	const [area, setArea] = useState();

	//const { location } = useSelector(state => state.location);
	const { location } = useLocation();

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	const selectLocation = () => {
		if (area && city) {
			dispatch(setLocation({ area, city }));
			close();
		}
	};

	return (
		<>
			<div className={styles.location} onClick={open}>
				<img src='/icons/location.svg' alt='..' />
				<div>
					<h5>{location?.area ? location.city : 'Please Select'}</h5>
					<p>{location?.city ? location.area : 'Please Select'}</p>
				</div>
			</div>
			<DeliveryLocationModal
				show={show}
				hide={close}
				setCity={e => setCity(e)}
				setArea={e => setArea(e)}
				selectLocation={selectLocation}
			/>
		</>
	);
};

export default Header;
