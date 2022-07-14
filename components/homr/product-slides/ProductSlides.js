import React from 'react';
import styles from './ProductSlides.module.css';
import * as lib from '../../../lib/constants';
import ProductsCard from '../../cards/products-card/ProductsCard';
import H2 from '../../util/headers/H2';

const ProductSlides = ({ title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title && <H2>{title}</H2>}</div>

			<div className={styles.cards}>
				{lib.seeders.products.map((item, i) => (
					<ProductsCard data={item} key={i} />
				))}
			</div>
		</div>
	);
};

export default ProductSlides;
