import Link from 'next/link';
import React from 'react';
import styles from './ProductsCard.module.css';

const ProductsCard = ({ data }) => {
	return (
		<Link href='/product'>
			<div className={styles.card}>
				<div className={styles.image}>
					<img src={data?.displayImage && data.displayImage} alt={'..'} />
				</div>
				<div className={styles.main}>
					<p>{data?.name && data.name}</p>
					<h6>{`${data?.symbol && data.symbol} ${data?.price && data.price}/${
						data?.unit && data.unit
					}`}</h6>
				</div>
				<div className={styles.buttons}>
					<div className={styles.selectButton}>
						<p>1 KG</p>
					</div>
					<div className={styles.addToCartButton}>
						<p>Add to cart</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductsCard;
