import React from 'react';
import H2 from '../../util/headers/H2';
import styles from './Newsletter.module.css';

const Newsletter = () => {
	return (
		<div className={styles.container}>
			<img src='/icons/beef.png' alt='beef' />
			<div className={styles.main}>
				<H2>Subscribe to our Newsletter</H2>
				<p>
					Subscribe to our Newsletter and get exclusive updates,
					<br /> amazing offers
					{' &'} discounts
				</p>
			</div>
			<div className={styles.input}>
				<input placeholder='Enter your e-mail' />
				<div className={styles.button}>
					<p>Subscribe</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
