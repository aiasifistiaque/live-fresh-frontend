import React from 'react';
import HomeSection from '../section/HomeSection';
import styles from './Styles.module.css';

const Banner = () => {
	const style = { height: '90vh', marginTop: '4vh' };
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.left}>
					<img src={`/test/logo-white.png`} alt='LIVE FRESH' />
					<h1>
						you only <br />
						<span>LIVE once</span>
						<br />
						so
						<br />
						<span>LIVE FRESH</span>
					</h1>
					<div className={styles.button}>
						<p>SHOP NOW</p>
					</div>
				</div>
				<div className={styles.bottom}>
					<p>Fresh {'&'} Safe Food for Building Better Future</p>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ src }) => {
	return (
		<div className={styles.slider}>
			<img src={`/test/${src}`} />
		</div>
	);
};

export default Banner;
