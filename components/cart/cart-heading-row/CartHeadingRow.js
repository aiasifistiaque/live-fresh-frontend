import React from 'react';
import styles from './CartHaedingRow.module.css';

const CartHeadingRow = ({ children, data }) => {
	return (
		<div className={styles.container}>
			{data.map((item, i) => (
				<div className={styles.item} key={i}>
					<p>{item}</p>
				</div>
			))}
		</div>
	);
};

export default CartHeadingRow;
