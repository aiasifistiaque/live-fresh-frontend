import styles from './LoginModal.module.css';
import React from 'react';

export const LoginButtonsContainer = ({ children }) => {
	return (
		<div
			style={{
				display: 'grid',
				flex: 1,
				width: '200%',
				gridTemplateColumns: '1fr 1fr',
			}}>
			{children}
		</div>
	);
};

export const ChangePage = ({ children, href, onClick }) => {
	return (
		<div className={styles.change}>
			<p>{children}</p>
			<div onClick={onClick}>
				<h6>{href}</h6>
			</div>
		</div>
	);
};
