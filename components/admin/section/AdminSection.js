import React from 'react';
import styles from './AdminSection.module.css';

const AdminSection = ({ title, data }) => {
	return (
		<div className={styles.container}>
			{title && <h5>{title}</h5>}
			<div className={styles.items}>
				{data.map((item, i) => (
					<div className={styles.item} key={i}>
						<h6>{item.title}</h6>
						<p>{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminSection;
