import Link from 'next/link';
import React from 'react';
import styles from './ExploreButton.module.css';

const ExploreButton = ({ href, children, size }) => {
	const text = children && children.split(' ');
	const style = size
		? size == 'small'
			? styles.smallButton
			: size == 'medium'
			? styles.mediumButton
			: size == 'medium' && styles.bigButton
		: styles.bigButton;

	return (
		<Link href={href}>
			<div className={style}>
				<p>
					<span className={styles.blackSpan}>
						{text.length > 2 ? `${text[0]} ${text[1]} ` : `${text[0]} `}
					</span>
					{text.map((p, i) => {
						if (i == 0) return null;
						if (text.length > 2 && i == 1) return null;
						return (
							<span className={styles.redSpan} key={i}>{`${text[i]} `}</span>
						);
					})}
				</p>
				<img src='/icons/arrow-red.png' alt='->' />
			</div>
		</Link>
	);
};

export default ExploreButton;
