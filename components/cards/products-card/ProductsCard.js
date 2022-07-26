import Link from 'next/link';
import React, { useState } from 'react';
import styles from './ProductsCard.module.css';
import * as lib from '../../../lib/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductsCard = ({ data }) => {
	const dispatch = useDispatch();

	const [selected, setSelected] = useState(1);

	const inc = () => {
		setSelected(selected + 1);
	};
	const dec = () => {
		selected > 1 && setSelected(selected - 1);
	};
	const addToCartPressed = () => {
		dispatch(addToCart({ data, qty: selected }));
		setSelected(1);
		toast(
			<div>
				<p>{`${selected} ${data.unit} ${data.name} added to cart`}</p>
				<Link href='/cart'>
					<a style={{ color: 'red', fontSize: '.8rem' }}>View Cart</a>
				</Link>
			</div>
		);
		//dispatch(showToast({ text: 'Item Added to cart', date: Date.now() }));
	};
	return (
		<>
			<div className={styles.card}>
				<Link href={`product/${data?._id && data._id}`}>
					<div className={styles.image}>
						<img
							src={
								data?.displayImage
									? data.displayImage
									: lib.placeholders.productImage
							}
							alt={'..'}
						/>
					</div>
				</Link>
				<Link href={`product/${data?._id && data._id}`}>
					<div className={styles.main}>
						<p>{data?.name && data.name}</p>
						<h6>{`৳${data?.price && data.price}/${
							data?.unit && data.unit
						}`}</h6>
					</div>
				</Link>
				<div className={styles.buttons}>
					<div className={styles.selectButton}>
						<div className={styles.selector} onClick={dec}>
							<p>-</p>
						</div>

						<p>
							{selected} {data?.unit && data.unit}
						</p>
						<div className={styles.selector} onClick={inc}>
							<p>+</p>
						</div>
					</div>
					<div className={styles.addToCartButton} onClick={addToCartPressed}>
						<p>Add to cart</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductsCard;
