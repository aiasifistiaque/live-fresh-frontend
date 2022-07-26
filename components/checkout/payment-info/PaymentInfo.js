import React from 'react';
import Red from '../../util/text/Red';
import RedContainer from '../red-container/RedContainer';

const PaymentInfo = () => {
	return (
		<RedContainer>
			<h3>
				Payment <Red>Details</Red>
			</h3>
			<h6 style={{ marginTop: 8 }}>
				Dear Customer, <br />
				Currently we only accept cash on delivery. <br />
				We hope to bring more payment options soon. <br />
				Thank You.
			</h6>
		</RedContainer>
	);
};

export default PaymentInfo;
