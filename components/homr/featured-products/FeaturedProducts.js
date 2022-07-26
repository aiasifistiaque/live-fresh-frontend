import React from 'react';
import H2 from '../../util/headers/H2';
import styles from './FeaturedProducts.module.css';
import * as lib from '../../../lib/constants';
import ProductsCard from '../../cards/products-card/ProductsCard';
import FeaturedCard from '../../cards/featured-products-card/FeaturedCard';
import { useGetProductsByCategoryQuery } from '../../../store/services/apiService';

const FeaturedProducts = () => {
	const { data, isFetching, isError } = useGetProductsByCategoryQuery({
		category: 'all',
	});
	return (
		<div className={styles.container}>
			<H2>{'Featured Products & Specials'}</H2>
			<p>
				We conduct business with Ethics {'&'} Integrity. We are proud of the
				products which we manufacture and the efforts we put into them. Our R{' '}
				{'&'}D wing constantly put in great efforts to innovate in the field.
				Our goal is to serve on our country by setting standards of quality,
				services and commitment to customers.
			</p>
			<div className={styles.cards}>
				{data &&
					data.doc.map(
						(item, i) => i < 4 && <FeaturedCard data={item} key={i} />
					)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
