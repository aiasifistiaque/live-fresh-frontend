import Link from 'next/link';
import React from 'react';
import styles from './RedButton.module.css';

const RedButton = ({ style, fill, href, onClick, children, icon }) => {
	if (href)
		return (
			<Link href={href}>
				<div
					style={style}
					className={`${styles.container} ${fill && styles.fill}`}>
					<p>{children}</p>
					{icon && <img src={`/icons/${icon}.svg`} alt={icon} />}
				</div>
			</Link>
		);
	return (
		<div
			style={style}
			className={`${styles.container} ${fill && styles.fill}`}
			onClick={onClick}>
			<p>{children}</p>
			{icon && <img src={`/icons/${icon}.svg`} alt={icon} />}
		</div>
	);
};

export default RedButton;
