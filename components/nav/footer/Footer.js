import Link from 'next/link';
import React from 'react';
import HomeSection from '../../homr/section/HomeSection';
import H6 from '../../util/headers/H6';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<HomeSection>
				<div className={styles.main}>
					<div className={styles.left}>
						{/* <div>
							<H6>Contact Us</H6>
						</div> */}
						<div>
							<h5>Live Fresh Agro</h5>
						</div>
						<div>
							<h6>
								Corporate <span style={{ color: 'red' }}>Office</span>
							</h6>
							<p>
								House 42, Road 6,
								<br /> Mohammadi Housing Society
								<br /> Mohammadpur, Dhaka- 1207{' '}
							</p>
						</div>
						<div>
							<h6>
								Processing <span style={{ color: 'red' }}>Center</span>
							</h6>
							<p>
								Plot: 46, Doyal Housing,
								<br /> Bosila, Dhaka- 1207
							</p>
						</div>
						<div>
							<p>
								<span style={{ fontWeight: 700 }}>Phone:</span> +88 01799 399555
							</p>
						</div>
						<div>
							<p>
								<span style={{ fontWeight: 700 }}>Email:</span>{' '}
								info@livefreshbd.com
							</p>
						</div>
					</div>

					<div className={styles.right}>
						<Section
							title='Navitation'
							data={[
								{ name: 'Home', href: '/' },
								{ name: 'Categories', href: '/' },
								{ name: 'Search', href: '/search' },
								{ name: 'Cart', href: '/cart' },
								{ name: 'About us', href: '/about' },
								{ name: 'Blog', href: '/blog' },
							]}
						/>
						<Section
							title='Legal'
							data={['Privacy Policy', 'Terms of Use', 'Return Policy']}
						/>
						<Section
							title='Social'
							data={['Facebook', 'Instagram', 'YouTube']}
						/>
					</div>
				</div>
			</HomeSection>
			<div className={styles.disclaimer}>
				<p>Copyright © 2022, Live Fresh Agro | ALL RIGHTS RESERVED.</p>
			</div>
		</div>
	);
};

const Section = ({ title, data }) => {
	return (
		<div className={styles.section}>
			<h6>{title}</h6>
			<div className={styles.items}>
				{data.map((item, i) => (
					<div key={i} style={{ marginBottom: 8 }}>
						<p>{item?.name ? item.name : item}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Footer;
