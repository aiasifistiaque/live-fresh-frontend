import Link from 'next/link';
import React, { useState } from 'react';
import LoginModal from '../../auth/login/LoginModal';
import DeliveryLocationModal from '../../modals/delivery-location/DelivaryLocationModal';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';

const Header = ({ landing, scroll }) => {
	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	const auth = useAuth();

	return (
		<div
			className={`${styles.container} ${
				(scroll > 200 || !landing) && styles.scrolled
			}`}>
			<div className={styles.left}>
				<SquareItem src='menu' />
				{(!landing || scroll > 200) && <Logo />}
				<Location />
			</div>
			<div className={styles.middle}></div>
			<div className={styles.right}>
				<SquareItem src='search' />
				<SquareItem src='cart' href='/cart' />

				{auth.loading ? null : auth.isLoggedIn == true ? (
					<SquareItem href='/profile/overview' src='profile' />
				) : (
					<SquareText onClick={open}>Login</SquareText>
				)}
			</div>
			<LoginModal show={show} hide={close} />
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
	const [city, setCity] = useState('Please Select');
	const [area, setArea] = useState('Please Select');

	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	return (
		<>
			<div className={styles.location} onClick={open}>
				<img src='/icons/location.svg' alt='..' />
				<div>
					<h5>{city}</h5>
					<p>{area}</p>
				</div>
			</div>
			<DeliveryLocationModal
				show={show}
				hide={close}
				setCity={e => setCity(e)}
				setArea={e => setArea(e)}
			/>
		</>
	);
};

export default Header;
