import React from 'react';
import styles from './CartTable.module.css';

const CartTable = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default CartTable;
