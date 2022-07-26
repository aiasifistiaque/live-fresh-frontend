import Link from 'next/link';
import React from 'react';
import styles from './BlackButton.module.css';

const BlackButton = ({
	style,
	fill,
	href,
	onClick,
	children,
	icon,
	submit,
	loading,
}) => {
	if (loading)
		return (
			<div
				style={style}
				className={`${styles.container} ${fill && styles.fill}`}>
				<p>processing...</p>
				{/* {icon && <img src={`/icons/${icon}.svg`} alt={icon} />} */}
			</div>
		);
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
	if (submit)
		if (submit)
			return (
				<input
					type='submit'
					value={children}
					className={`${styles.container} ${fill && styles.fill}`}
					style={{ fontSize: 15, color: 'whitesmoke', fontWeight: '600' }}
				/>
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

export default BlackButton;
