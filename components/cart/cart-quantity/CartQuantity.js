import React from 'react';
import styles from './CartQuantity.module.css';
import { useDispatch } from 'react-redux';
import { addToCart, setCartQuantity } from '../../../store/slices/cartSlice';

const CartQuantity = ({ children, item }) => {
	const dispatch = useDispatch();
	const inc = () => {
		dispatch(
			setCartQuantity({
				data: { _id: item.product, ...item },
				qty: children + 1,
			})
		);
	};
	const dec = () => {
		children > 1 &&
			dispatch(
				setCartQuantity({ data: { _id: item.product }, qty: children - 1 })
			);
	};
	return (
		<div className={styles.container}>
			<div className={`${styles.button} ${styles.buttonLeft}`} onClick={dec}>
				<img src='/icons/subtract.svg' alt='-' />
			</div>
			<div className={styles.main}>
				<p>{children}</p>
				{/* <p>{JSON.stringify(item)}</p> */}
			</div>
			<div className={`${styles.button} ${styles.buttonRight}`} onClick={inc}>
				<img src='/icons/add.svg' alt='-' />
			</div>
		</div>
	);
};

export default CartQuantity;
