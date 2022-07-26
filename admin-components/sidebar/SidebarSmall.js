import Link from 'next/link';
import React from 'react';

const SidebarSmall = () => {
	return (
		<div className={styles.items}>
			<Link href='/'>
				<Item selected={selected}>Dashboard</Item>
			</Link>

			<Section title={'Sales & Purchase'}>
				<Link href='/sales'>
					<Item selected={selected}>Sales</Item>
				</Link>
				<Link href='/purchases'>
					<Item selected={selected}>Purchases</Item>
				</Link>
				<Link href='/expenses'>
					<Item selected={selected}>Expenses</Item>
				</Link>
			</Section>

			<Section title='Product Info'>
				<Link href='/products'>
					<Item selected={selected}>Products</Item>
				</Link>
				<Link href='/categories'>
					<Item selected={selected}>Categories</Item>
				</Link>
				<Link href='/brands'>
					<Item selected={selected}>Brands</Item>
				</Link>
			</Section>
			<Section title='Entities'>
				<Link href='/customers'>
					<Item selected={selected}>Customers</Item>
				</Link>
				<Link href='/suppliers'>
					<Item selected={selected}>Suppliers</Item>
				</Link>
			</Section>
			<Section title={'Stats & Reports'}>
				<Link href='/stats'>
					<Item selected={selected}>Stats</Item>
				</Link>
				<Link href='/daily'>
					<Item selected={selected}>Daily</Item>
				</Link>
				<Link href='/weekly'>
					<Item selected={selected}>Weekly</Item>
				</Link>
				<Link href='/monthly'>
					<Item selected={selected}>Monthly</Item>
				</Link>
				<Link href='/yearly'>
					<Item selected={selected}>Yearly</Item>
				</Link>
			</Section>
			<Link href='/settings'>
				<Item selected={selected}>Settings</Item>
			</Link>
		</div>
	);
};

const Section = ({ children, title }) => {
	return (
		<div className={styles.section}>
			<div className={styles.sectionTitle}>
				<p>{title}</p>
			</div>
			<div>{children}</div>
		</div>
	);
};

const Item = ({ children, selected, onClick }) => {
	const style = selected == children ? { color: '#f5f5f5' } : {};
	const ico = children.toLowerCase();
	const icon =
		selected == children ? `/icons/${ico}-selected.png` : `/icons/${ico}.png`;
	return (
		<div className={styles.item} onClick={onClick}>
			<img src={icon} alt='ico' />
		</div>
	);
};

export default SidebarSmall;
