import React from 'react';

const Div = ({ m, p, children, gap, row }) => {
	return (
		<div
			style={{
				display: 'flex',
				margin: m || 0,
				padding: p || 0,
				gap: gap || 0,
				flexDirection: row ? 'row' : 'column',
			}}>
			{children}
		</div>
	);
};

export default Div;
