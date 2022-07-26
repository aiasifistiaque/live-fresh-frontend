import Link from 'next/link';
import React, { useState } from 'react';
import { placeholders } from '../../../lib/constants';
import styles from './CartProduct.module.css';
import Modal from 'react-bootstrap/Modal';
import BlackButton from '../../util/black-button/BlackButton';
import Red from '../../util/text/Red';
import Div from '../../containers/div/Div';
import ModalBody from '../../modals/util/ModalBody';
import RedButton from '../../util/red-button.js/RedButton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../store/slices/cartSlice';

const CartProduct = ({ data }) => {
	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img
					src={
						data?.displayImage ? data.displayImage : placeholders.productImage
					}
					alt='...'
				/>
			</div>
			<div className={styles.details}>
				<Link href={`/product/${data.product}`}>
					<h6>{data?.name && data.name}</h6>
				</Link>

				<p>৳{data?.price && data.price}</p>
				<a onClick={open}>Remove</a>
			</div>
			<DeleteModal show={show} hide={close} data={data} />
		</div>
	);
};

const DeleteModal = ({ controller, show, hide, data }) => {
	const dispatch = useDispatch();
	const remove = () => {
		dispatch(removeFromCart(data.product));
		hide();
	};
	return (
		<Modal show={show} onHide={hide} centered>
			<Modal.Body>
				<ModalBody>
					<h5>
						Remove <Red>Item</Red>
					</h5>
					<h6>Are you sure you want to delete this item from cart</h6>
					<div style={{ display: 'flex', gap: 4 }}>
						<BlackButton variant='secondary' onClick={hide}>
							cancel
						</BlackButton>

						<RedButton variant='primary' onClick={remove}>
							Delete
						</RedButton>
					</div>
				</ModalBody>
			</Modal.Body>
		</Modal>
	);
};

export default CartProduct;
