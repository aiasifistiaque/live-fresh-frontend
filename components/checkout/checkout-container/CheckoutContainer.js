import React from 'react';
import styles from './CheckoutContainer.module.css';

const CheckoutContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default CheckoutContainer;
