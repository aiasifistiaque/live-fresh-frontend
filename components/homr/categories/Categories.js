import React from 'react';
import ShopNowButton from '../../util/buttons/shop-now/ShopNowButton';
import styles from './Categories.module.css';

const data = [
	{ _id: 1, name: 'Chicken', image: '/icons/chicken.png' },
	{ _id: 1, name: 'Beef', image: '/icons/beef.png' },
	{ _id: 1, name: 'Goat', image: '/icons/goat.png' },
];

const Categories = () => {
	return (
		<div className={styles.container}>
			{data.map((item, i) => (
				<Category item={item} key={i} />
			))}
		</div>
	);
};

const Category = ({ item }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={item.image} alt={item.name} />
			</div>
			<ShopNowButton href={`/categories?category=${item.name}`} />
		</div>
	);
};

export default Categories;
