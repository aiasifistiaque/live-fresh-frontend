import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './Styles.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import useGetWindowScroll from '../../../hooks/useGetWindowScroll';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Sidebar from '../../nav/sidebar/Sidebar';

const Page = ({ title, children, landing, auth, onPageClick, blur }) => {
	const { scroll, scrollingDown } = useGetWindowScroll();
	const { text, date } = useSelector(state => state.toast);

	const ref = useRef();

	useEffect(() => {
		console.log('toast triggered');

		//toast.configure();
	}, [text, date]);

	return (
		<div onClick={() => {}} ref={ref}>
			<Head>
				<title>{title ? title : 'Live Fresh'}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>

			<Sidebar />

			<main onClick={onPageClick} className={styles.container}>
				<Header landing={landing} scroll={scroll} />

				{children}
				<div>
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
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Page;
