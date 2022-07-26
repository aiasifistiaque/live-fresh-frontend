import React from 'react';
import styles from './Disclaimer.module.css';

const Disclaimer = ({ children }) => {
	return (
		<div className={styles.container}>
			<p>{children}</p>
		</div>
	);
};

export default Disclaimer;
