import Link from 'next/link';
import React from 'react';
import ExploreButton from '../../util/buttons/explore/ExploreButton';
import styles from './HomeSection.module.css';

const HomeSection = ({ children, title, button, href, bg }) => {
	return (
		<div style={{ backgroundColor: bg ? '#f5f5f5' : 'transparent' }}>
			<div className={styles.container}>
				{title && (
					<div className={styles.title}>
						<h2>{title}</h2>
						<div className={styles.border} />
					</div>
				)}
				{children}
				{href && <ExploreButton href={href}>{button}</ExploreButton>}
			</div>
		</div>
	);
};

export default HomeSection;
