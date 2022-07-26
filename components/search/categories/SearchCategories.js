import React from 'react';
import ShopNowButton from '../../util/buttons/shop-now/ShopNowButton';
import styles from './SearchCategories.module.css';
import * as lib from '../../../lib/constants';
import H2 from '../../util/headers/H2';
import H3Page from '../../util/headers/H3Page';

const SearchCategories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{lib.data.categories.map((item, i) => (
					<Category item={item} key={i} />
				))}
			</div>
		</div>
	);
};

const Category = ({ item }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={item.image} alt={item.name} />
			</div>
			<div className={styles.title}>
				<h6>{item.name}</h6>
			</div>
		</div>
	);
};

export default SearchCategories;
