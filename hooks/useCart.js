import React, { useEffect, useState } from 'react';
import { CART_NAME } from '../lib/constants';
import { useSelector } from 'react-redux';

const useCart = () => {
	const [items, setItems] = useState([]);
	const { cartItems } = useSelector(state => state.cart);
	const [total, setTotal] = useState(0);
	const [vat, setVat] = useState(0);
	const delivery = 200;
	const vatPercentage = 10;
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {}, []);
	useEffect(() => {
		setItems(cartItems);
		let ttl = 0;
		cartItems.map(item => {
			ttl = ttl + item.price * item.qty;
			setTotal(ttl);
		});
		if (cartItems.length === 0) {
			setTotal(0);
		}
	}, [cartItems]);

	useEffect(() => {
		if (cartItems.length === 0) {
			setVat(0);
		}
		let totalVat = ((total + delivery) * vatPercentage) / 100;
		setVat(totalVat);
		setSubTotal(total + delivery + vat);
	}, [total, cartItems]);

	useEffect(() => {
		if (cartItems.length === 0) {
			setSubTotal(0);
		}
		setSubTotal(total + delivery + vat);
	}, [vat, cartItems, total]);

	return { items, total, vat, subTotal, delivery };
};

export default useCart;
