import Link from 'next/link';
import React from 'react';
import styles from './ExploreButton.module.css';

const ExploreButton = ({ href, children }) => {
	const text = children && children.split(' ');

	return (
		<Link href={href}>
			<div className={styles.button}>
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
