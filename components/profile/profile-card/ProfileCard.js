import React, { useState } from 'react';
import NameCard from '../name-card/NameCard';
import * as lib from '../../../lib/constants';
import Link from 'next/link';
import styles from './ProfileCard.module.css';
import { useGetSelfQuery } from '../../../store/services/apiService';
import Modal from 'react-bootstrap/Modal';
import ModalBody from '../../modals/util/ModalBody';
import { useDispatch } from 'react-redux';
import Red from '../../util/text/Red';
import BlackButton from '../../util/black-button/BlackButton';
import RedButton from '../../util/red-button.js/RedButton';
import { logout } from '../../../store/slices/authSlice';

const options = [
	{ name: 'overview', href: '/profile/overview' },
	{ name: 'manage profile', href: '/profile/manage-profile' },
	{ name: 'orders', href: '/profile/current-orders' },
	// { name: 'past orders', href: '/profile/past-orders' },
	// { name: 'wallet', href: '/profile/wallet' },
];

const ProfileCard = ({ select }) => {
	const { data, isFetching, isError } = useGetSelfQuery();
	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.img}>
						<img src={lib.placeholders.profileImage} />
					</div>
					{data && (
						<NameCard
							name={data?.name && data.name}
							email={data?.phone && data.phone}
						/>
					)}
				</div>

				<div className={styles.bottom}>
					{options.map((item, i) => (
						<Link href={item.href} key={i}>
							<div
								className={`${styles.option} ${
									select == item.name ? styles.selected : styles.notSelected
								}`}>
								<p>{item.name}</p>
							</div>
						</Link>
					))}
					<div className={styles.option} onClick={open}>
						<p>Logout</p>
					</div>
				</div>
			</div>
			<LogoutModal hide={close} show={show} />
		</>
	);
};

const LogoutModal = ({ show, hide }) => {
	const dispatch = useDispatch();
	const logoutPressed = () => {
		dispatch(logout());
		hide();
	};
	return (
		<Modal show={show} onHide={hide} centered>
			<Modal.Body>
				<ModalBody>
					<h5>
						Log <Red>Out</Red>
					</h5>
					<h6>Are you sure you want to log out</h6>
					<div style={{ display: 'flex', gap: 4 }}>
						<BlackButton variant='secondary' onClick={hide}>
							cancel
						</BlackButton>

						<RedButton variant='primary' onClick={logoutPressed}>
							Logout
						</RedButton>
					</div>
				</ModalBody>
			</Modal.Body>
		</Modal>
	);
};

export default ProfileCard;
