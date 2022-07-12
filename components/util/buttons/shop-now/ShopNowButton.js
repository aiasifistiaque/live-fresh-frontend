import Link from 'next/link';
import React from 'react';
import styles from './ShopNowButton.module.css';

const ShopNowButton = ({ href, children }) => {
	const text = children && children.split(' ');

	return (
		<Link href={href}>
			<div className={styles.button}>
				<p>
					<span className={styles.blackSpan}>Shop </span>
					<span className={styles.redSpan}>Now</span>
				</p>
				<img src='/icons/arrow-red.png' alt='->' />
			</div>
		</Link>
	);
};

export default ShopNowButton;
