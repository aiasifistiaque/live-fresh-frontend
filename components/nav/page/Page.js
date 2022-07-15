import React from 'react';
import Head from 'next/head';
import styles from './Styles.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Page = ({ title, children, landing, auth, onPageClick, blur }) => {
	return (
		<div onClick={() => {}}>
			<Head>
				<title>{title ? title : 'Live Fresh'}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>

			{/* <Navbar
				auth={auth}
				landing={landing}
				focus={searchFocus}
				setFocus={e => setSearchFocus(e)}
				setSidebar={e => setSidebar(e)}
				sidebar={sidebar}
			/> */}
			<Header />

			{/* <Sidebar barPressed={sidebar} /> */}

			<main onClick={onPageClick} className={styles.container}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Page;
