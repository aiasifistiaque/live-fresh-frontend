import React from 'react';
import styles from './Clients.module.css';

const data = [
	{
		_id: 1,
		image: '/test/client1.png',
	},
	{
		_id: 2,
		image: '/test/client2.png',
	},
	{
		_id: 3,
		image: '/test/client3.png',
	},
];

const Clients = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>
					LiveFresh is currently supplying the required quantity of the quality
					meat in ACI Limited and Banglacut as a trusted supplier. We are also
					partnered to provide the solution of the meat sector with iFarmer-a
					technology company that enables small scale farmers and Agri
					Businesses to maximize their profit. Apart from these large Agri
					Business companies, we are serving our product to the retailers and
					directly to the consumers. At the supply end we also partnered with
					more than 550 small and medium farmers who raise their product for us.{' '}
				</p>
			</div>
			<div className={styles.images}>
				{data.map((item, i) => (
					<img key={i} src={item.image} alt={i} />
				))}
			</div>
		</div>
	);
};

export default Clients;
