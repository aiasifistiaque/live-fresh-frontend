import React, { useState } from 'react';
import useCart from '../../../hooks/useCart';
import BlackButton from '../../util/black-button/BlackButton';
import styles from './CartSummary.module.css';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import Red from '../../util/text/Red';

const data = {
	subTotal: 2800,
	shipping: 200,
	currency: '৳',
};

const CartSummary = () => {
	const vat = ((data.subTotal + data.shipping) * 10) / 100;
	const { total, items } = useCart();
	const { cartItems } = useSelector(state => state.cart);
	const { isLoggedIn } = useAuth();
	return (
		<div className={styles.container}>
			<div className={styles.items}>
				<Item title='SubTotal'>৳{total}</Item>
				{/* <Item title='Shipping'>৳{data.shipping}</Item>
				<Item title='VAT (10%)'>৳{vat}</Item>
				<Item title='Total'>৳{total + data.shipping + vat}</Item> */}
			</div>
			{cartItems?.length && cartItems.length > 0 ? (
				isLoggedIn ? (
					<BlackButton icon='arrow-white' href='/checkout'>
						Proceed to checkout
					</BlackButton>
				) : (
					<h6>
						Log In to <Red>Continue</Red>
					</h6>
				)
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
