import React, { useState } from 'react';
import styles from './ProductDescription.module.css';

const data = {
	_id: 2,
	name: 'Live Fresh Premium Beef Bone-In [Approx 1kg]',
	price: '699',
	unit: 'kg',
	symbol: '৳',
	displayImage: '/test/p2.png',
	description:
		'If ribeye is your ultimate cut of steak, our well-marbled, tender and juicy Antibiotic-Free Black Angus Ribeye Steak is perfect for you! Wet aged for 21 days, hand trimmed and perfectly portioned, sear this showstopper in a cast iron skillet or on a grill, then grab a fork and knife and get your steak on. Note that we recently changed the portion size for this cut to make it the perfect single-serving steak.',
	images: [
		'/test/p1.png',
		'/test/p3.png',
		'/test/p4.png',
		'/test/p5.png',
		'/test/p6.png',
	],
	tags: ['Hormone Free', 'No Antibiotics', 'Pasture Raised'],
};

const PoductDescription = () => {
	const [img, setImg] = useState(data.displayImage);
	return (
		<div className={styles.container}>
			<div className={styles.images}>
				<div className={styles.secondary}>
					{data.images.map((item, i) => (
						<img onClick={() => setImg(item)} src={item} alt={i} key={i} />
					))}
				</div>
				<div className={styles.primary}>
					<img src={img} alt={'img'} />
				</div>
			</div>
			<div className={styles.description}>
				<div className={styles.title}>
					<h5>{data.name}</h5>
				</div>
				<div className={styles.tags}>
					{data.tags.map((item, i) => (
						<Tag key={i}>{item}</Tag>
					))}
				</div>
				<div className={styles.description}>
					<p>{data.description}</p>
				</div>
				<div className={styles.price}>
					<h4>
						<span>{data?.symbol && data.symbol}</span>
						{`${data?.price && data.price}/`}
						<span>{data?.unit && data.unit}</span>
					</h4>
					<div className={styles.button}>
						<p>ADD TO CART</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Tag = ({ children }) => {
	const text = children && children.split(' ');

	return (
		<div className={styles.tag}>
			<p>
				<span>{text[0]}</span>
				{children.substring(text[0].length, children.length)}
			</p>
		</div>
	);
};

export default PoductDescription;
