import React from 'react';
import styles from './CartRow.module.css';

const CartRow = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default CartRow;
