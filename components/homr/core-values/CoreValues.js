import React from 'react';
import CoreValue from './CoreValue';
import styles from './CoreValue.module.css';

const data = [
	{
		_id: 1,
		title: 'Grass Fed',
		image: 'value-1',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut quis nostrud',
	},
	{
		_id: 2,
		title: '100% Quality Checks',
		image: 'value-2',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut quis nostrud',
	},
	{
		_id: 3,
		title: 'Delivered Fresh',
		image: 'value-3',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut quis nostrud',
	},
];

const CoreValues = () => {
	return (
		<div className={styles.section}>
			{data.map((item, i) => (
				<CoreValue
					key={i}
					title={item.title}
					image={item.image}
					details={item.details}
				/>
			))}
		</div>
	);
};

export default CoreValues;
