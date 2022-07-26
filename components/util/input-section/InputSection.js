import React from 'react';
import styles from './InputSection.module.css';

const InputSection = ({
	children,
	row,
	horizontal,
	align,
	flex,
	justify,
	mt,
	mb,
	mr,
	ml,
	m,
	p,
	pl,
	pr,
	pt,
	pb,
	style,
	bg,
}) => {
	return (
		<div
			className={`${styles.container} ${horizontal && styles.horizontal}`}
			style={{
				...(m && { margin: m }),
				...(mt && { marginTop: mt }),
				...(mb && { marginBottom: mb }),
				...(ml && { marginLeft: ml }),
				...(mr && { marginRight: mr }),
				...(p && { padding: p }),
				...(pt && { paddingTop: pt }),
				...(pb && { paddingBottom: pb }),
				...(pl && { paddingLeft: pl }),
				...(pr && { paddingRight: pr }),
				...style,
			}}>
			{children}
		</div>
	);
};

export default InputSection;
