import React from 'react';
import H6 from '../../util/headers/H6';
import styles from './CoreValue.module.css';

const CoreValue = ({ title, image, details }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{image && (
					<div className={styles.image}>
						<img src={`/test/${image}.png`} />
					</div>
				)}
				<div className={styles.text}>
					<H6>{title}</H6>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>{details}</p>
			</div>
		</div>
	);
};

export default CoreValue;
