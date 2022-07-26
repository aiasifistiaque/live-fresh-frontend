import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default CartItem;
