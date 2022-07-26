import React from 'react';
import styles from './AdminPage.module.css';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Sidebar from '../../../admin-components/sidebar/Sidebar';
import AdminNavbar from '../../../admin-components/header/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = ({
	children,
	selected,
	landing,
	full,
	error,
	isError,
	isFetching,
	isLoading,
}) => {
	const { toggled } = useSelector(state => state.toggle);

	return (
		<div>
			<Head>
				<title>Live Fresh Admin</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>
			{!landing && <Sidebar selected={selected} />}
			<AdminNavbar />
			<LoadPage
				landing={landing}
				toggled={toggled}
				error={error}
				isError={isError}
				isLoading={isLoading}
				isFetching={isFetching}>
				<ToastContainer
					position='bottom-right'
					autoClose={500000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{children}
			</LoadPage>
		</div>
	);
};

const LoadPage = ({
	children,
	landing,
	toggled,
	isLoading,
	error,
	isError,
	data,
}) => {
	if (isError)
		return (
			<main
				className={
					landing ? styles.landing : toggled ? styles.toggled : styles.container
				}>
				<div
					style={{
						display: 'flex',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<h5 style={{ color: 'crimson' }}>
						{error?.data?.message
							? error.data.message
							: error?.data
							? error.data
							: error}
					</h5>
				</div>
			</main>
		);
	return (
		<main
			className={
				landing ? styles.landing : toggled ? styles.toggled : styles.container
			}>
			{children}
		</main>
	);
};

export default AdminPage;
