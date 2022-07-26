import React from 'react';
import styles from './SearchMain.module.css';
import ProductsCard from '../../cards/products-card/ProductsCard';
import FeaturedCard from '../../cards/featured-products-card/FeaturedCard';

const CategoriesMain = ({ data }) => {
	return (
		<div className={styles.cat}>
			<div className={styles.cards}>
				{data.map((item, i) => (
					<FeaturedCard data={item} key={i} />
				))}
			</div>
		</div>
	);
};

export default CategoriesMain;
