import React from 'react';
import styles from './HowWeAreDifferent.module.css';

const data = [
	{ title: 'Humanely &', subtitle: 'Sustainably Raised' },
	{ title: 'Conviniently Delivered', subtitle: 'to your home' },
	{ title: 'No Antibiotics or', subtitle: 'Hormones' },
	{ title: 'No Added salts', subtitle: 'or Chemicals' },
	{ title: 'Zero Mechanical', subtitle: 'Tenderizing' },
];

const HowWeAreDifferent = () => {
	return (
		<div className={styles.container}>
			<div className={styles.table}>
				<div className={styles.row}>
					<div className={styles.item}></div>
					<div className={styles.item}>
						<h6>
							Live <span>Fresh</span>
						</h6>
					</div>
					<div className={styles.item}>
						<h6>
							Grocery <span>Store</span>
						</h6>
					</div>
				</div>
				{data.map((item, i) => (
					<div
						key={i}
						className={styles.row}
						style={{ backgroundColor: i % 2 ? 'whitesmoke' : 'transparent' }}>
						<div className={styles.item}>
							<p>{item.title}</p>
							<p style={{ color: 'red' }}>{item.subtitle}</p>
						</div>
						<div className={styles.image}>
							<img src='/icons/check.png' alt='y' />
						</div>
						<div className={styles.image}>
							<img src='/icons/question.png' alt='?' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HowWeAreDifferent;
