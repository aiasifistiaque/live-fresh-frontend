import React, { useState } from 'react';
import useCart from '../../../hooks/useCart';
import BlackButton from '../../util/black-button/BlackButton';
import styles from './CartSummary.module.css';
import { useSelector } from 'react-redux';

const data = {
	subTotal: 2800,
	shipping: 200,
	currency: '৳',
};

const CartSummary = () => {
	const vat = ((data.subTotal + data.shipping) * 10) / 100;
	const { total, items } = useCart();
	const { cartItems } = useSelector(state => state.cart);
	return (
		<div className={styles.container}>
			<div className={styles.items}>
				<Item title='SubTotal'>৳{total}</Item>
				{/* <Item title='Shipping'>৳{data.shipping}</Item>
				<Item title='VAT (10%)'>৳{vat}</Item>
				<Item title='Total'>৳{total + data.shipping + vat}</Item> */}
			</div>
			{cartItems?.length && cartItems.length > 0 ? (
				<BlackButton icon='arrow-white' href='/checkout'>
					Proceed to checkout
				</BlackButton>
			) : (
				<BlackButton icon='arrow-white' href='/search'>
					Continue shopping
				</BlackButton>
			)}
		</div>
	);
};

const Item = ({ title, children }) => {
	return (
		<div className={styles.item}>
			<h6>{title}</h6>
			<p>{children}</p>
		</div>
	);
};

export default CartSummary;
