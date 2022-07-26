import React, { useEffect } from 'react';
import Button from '../../util/button/Button';
import HorizontalButtonContainer from '../../util/horizontal-button-container/HorizontalButtonContainer';
import Red from '../../util/text/Red';
import { CheckoutItem } from '../cart-summary/CheckoutSummary';
import styles from './ConfirmModal.module.css';
import Modal from 'react-bootstrap/Modal';
import useCart from '../../../hooks/useCart';
import { useCreateOrderMutation } from '../../../store/services/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { emptyCart } from '../../../store/slices/cartSlice';
import { useRouter } from 'next/router';

const ConfirmModal = ({ controller, show, hide }) => {
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const router = useRouter();

	const { items, total, delivery, subTotal, vat, discount } = useCart();
	const { isSet, address } = useSelector(state => state.address);

	const [order, result] = useCreateOrderMutation();

	const placeOrder = () => {
		if (!isSet) {
			toast('Please select an address to continue');
		} else {
			const formData = {
				orderItems: items,
				address: address._id,
				shippingAddress: address,
				itemPrice: total,
				vat,
				discount,
				shippingPrice: delivery,
				totalPrice: subTotal,
			};
			order(formData);
		}
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(emptyCart());
			hide();
			toast('Order Placed Successfully');
			router.replace(`/order/${result.data._id}?result=success`);
		}
	}, [result.isSuccess]);

	useEffect(() => {
		if (result.isError) toast('Error placing order, try again');
	}, [result.isError]);

	return (
		<Modal show={show} onHide={hide}>
			<Modal.Header>
				<h5>
					Confirm <Red>Order</Red>
				</h5>
			</Modal.Header>
			<Modal.Body>
				<h6>
					Order <Red>Details</Red>
				</h6>
				<Summary />
			</Modal.Body>
			<Modal.Footer>
				<HorizontalButtonContainer>
					<Button danger small onClick={hide}>
						Cancel
					</Button>
					<Button
						loading={result.isLoading}
						small
						onClick={placeOrder}
						positive>
						Confirm
					</Button>
				</HorizontalButtonContainer>
			</Modal.Footer>
		</Modal>
	);
};

const Summary = () => {
	// const vat = ((data.subTotal + data.shipping) * 10) / 100;
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
		</div>
	);
};

export default ConfirmModal;
