import React from 'react';

const ModalBody = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 16,
				padding: '1rem 0',
				width: '60%',
				margin: 'auto',
				textAlign: 'center',
			}}>
			{children}
		</div>
	);
};

export default ModalBody;
