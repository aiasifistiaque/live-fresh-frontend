import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Link href='/'>
					<img src='/test/headerlogo.png' alt='Live Fresh' />
				</Link>
			</div>
			<div className={styles.middle}> </div>
			<div className={styles.right}> </div>
		</div>
	);
};

export default Header;
