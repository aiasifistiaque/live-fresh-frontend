import React from 'react';
import styles from './Headers.module.css';

const H6 = ({ children }) => {
	const text = children.split(' ');
	return (
		<div className={styles.container}>
			<h6 style={{ fontWeight: '700' }}>
				<span>{text[0]}</span>
				{children.substring(text[0].length, children.length)}
			</h6>
			<div className={styles.border} />
		</div>
	);
};

export default H6;
