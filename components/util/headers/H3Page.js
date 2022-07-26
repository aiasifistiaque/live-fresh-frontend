import React from 'react';
import styles from './Headers.module.css';

const H3Page = ({ children }) => {
	const text = children && children.split(' ');
	return (
		<div className={styles.h2}>
			<h3>
				<span>{text[0]}</span>
				{children.substring(text[0].length, children.length)}
			</h3>
			<div className={styles.border} />
		</div>
	);
};

export default H3Page;
