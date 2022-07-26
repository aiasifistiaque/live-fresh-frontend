import React from 'react';
import styles from './SearchMain.module.css';
import * as lib from '../../../lib/constants';
import ProductsCard from '../../cards/products-card/ProductsCard';

const SearchMain = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{lib.seeders.search.map((item, i) => (
					<ProductsCard data={item} key={i} />
				))}
			</div>
		</div>
	);
};

export default SearchMain;
