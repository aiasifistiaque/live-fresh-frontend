import React, { useState } from 'react';
import RedContainer from '../red-container/RedContainer';
import styles from './CartSummary.module.css';
import Red from '../../util/text/Red';
import NoStretchRedContainer from '../red-container/NoStretchRedContainer';

const OrderSummary = ({ items, total, delivery, vat, subTotal, discount }) => {
	return (
		<NoStretchRedContainer>
			<div className={styles.container}>
				<h5>
					Order <Red>Summary</Red>
				</h5>
				<div className={styles.items}>
					{items.map((item, i) => (
						<div key={i} className={styles.item}>
							<div>
								<h6>{item.name}</h6>
								<p>{`৳${item.price} x ${item.qty}`}</p>
							</div>
							<div>
								<h6>{`৳${item.price * item.qty}`}</h6>
							</div>
						</div>
					))}
				</div>

				<div className={styles.summary}>
					<div className={styles.items}>
						<CheckoutItem title='SubTotal'>৳{total}.00</CheckoutItem>
						<CheckoutItem title='Shipping'>৳{delivery}.00</CheckoutItem>
						<CheckoutItem title='VAT (10%)'>৳{vat}.00</CheckoutItem>
						<CheckoutItem title='Discount'>৳{discount}.00</CheckoutItem>
						<CheckoutItem title='Total'>৳{subTotal}.00</CheckoutItem>
					</div>
				</div>
			</div>
		</NoStretchRedContainer>
	);
};

export const CheckoutItem = ({ title, children }) => {
	return (
		<div className={styles.item}>
			<h6>{title}</h6>
			<p>{children}</p>
		</div>
	);
};

export default OrderSummary;
