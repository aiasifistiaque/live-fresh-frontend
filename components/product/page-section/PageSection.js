import React from 'react';
import ExploreButton from '../../util/buttons/explore/ExploreButton';
import styles from './PageSection.module.css';

const PageSection = ({ children, title, button, href, bg }) => {
	const text = title && title.split(' ');

	return (
		<div style={{ backgroundColor: bg ? '#f5f5f5' : 'transparent' }}>
			<div className={styles.container}>
				{title && (
					<div className={styles.title}>
						{title && (
							<h3>
								<span style={{ color: '#424242' }}>{text[0]}</span>
								{title.substring(text[0].length, title.length)}
							</h3>
						)}
						<div className={styles.border} />
					</div>
				)}
				{children}
				{href && <ExploreButton href={href}>{button}</ExploreButton>}
			</div>
		</div>
	);
};

export default PageSection;
