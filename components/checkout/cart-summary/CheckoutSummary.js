import React, { useState } from 'react';
import RedContainer from '../red-container/RedContainer';
import styles from './CartSummary.module.css';
import Red from '../../util/text/Red';
import BlackButton from '../../util/black-button/BlackButton';
import Input from '../../util/input/Input';
import Button from '../../util/button/Button';
import ConfirmModal from '../confirm-modal/ConfirmModal';
import useCart from '../../../hooks/useCart';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const CheckoytSummary = () => {
	const { items, total, delivery, subTotal } = useCart();
	return (
		<RedContainer>
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
				<Input placeholder='Promo Code' />
				<div style={{ marginTop: -16 }} />
				<Button small>Apply</Button>
				<Summary />
			</div>
		</RedContainer>
	);
};

const Summary = () => {
	//const vat = ((data.subTotal + data.shipping) * 10) / 100;
	const { isSet } = useSelector(state => state.address);
	const [show, setShow] = useState(false);
	const open = () => {
		if (!isSet) {
			toast('Please Select an address to continue');
		} else {
			setShow(true);
		}
	};
	const close = () => setShow(false);

	const { items, total, delivery, subTotal, vat } = useCart();

	return (
		<div className={styles.summary}>
			<div className={styles.items}>
				<CheckoutItem title='SubTotal'>৳{total}.00</CheckoutItem>
				<CheckoutItem title='Shipping'>৳{delivery}.00</CheckoutItem>
				<CheckoutItem title='VAT (10%)'>৳{vat}.00</CheckoutItem>
				<CheckoutItem title='Discount'>৳0.00</CheckoutItem>

				<CheckoutItem title='Total'>৳{subTotal}.00</CheckoutItem>
			</div>

			<BlackButton fill icon='arrow-white' onClick={open}>
				Confirm Order
			</BlackButton>

			<ConfirmModal show={show} hide={close} />
		</div>
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

export default CheckoytSummary;
