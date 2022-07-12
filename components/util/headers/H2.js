import React from 'react';
import styles from './Headers.module.css';

const H2 = ({ children }) => {
	const text = children && children.split(' ');
	return (
		<div className={styles.h2}>
			<h2>
				<span>{text[0]}</span>
				{children.substring(text[0].length, children.length)}
			</h2>
			<div className={styles.border} />
		</div>
	);
};

export default H2;
