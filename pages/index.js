import React from 'react';
import Banner from '../components/homr/banner/Banner';
import Categories from '../components/homr/categories/Categories';
import CoreValues from '../components/homr/core-values/CoreValues';
import ProcurementCycle from '../components/homr/procurement-cycle/ProcurementCycle';
import HomeSection from '../components/homr/section/HomeSection';
import Page from '../components/nav/page/Page';
import WhoWeAre from '../components/who-we-are/WhoWeAre';

const Homepage = () => {
	return (
		<Page>
			<Banner />

			<HomeSection
				title={'Our Core Values'}
				button='Learn More about our values'
				href='/'>
				<CoreValues />
			</HomeSection>
			<HomeSection title='Our Procurement Cycle'>
				<ProcurementCycle />
			</HomeSection>
			<WhoWeAre />
			<HomeSection
				title='Product Categories'
				href='/'
				button='Explore All Categories'>
				<Categories />
			</HomeSection>
			<HomeSection title={'Featured Products & Specials'}>
				Featured Products
			</HomeSection>
			<HomeSection title='Products'>Product Sliders</HomeSection>
			<HomeSection title='How We Are Different'>
				How we are different
			</HomeSection>
			<HomeSection title='Our Blog'>blog</HomeSection>
			<HomeSection title='What Our Clients are saying'>
				Testemonials
			</HomeSection>
			<HomeSection title={'Our Clients & Partners'}>
				clients and partners
			</HomeSection>
			<HomeSection>Newsletter</HomeSection>
		</Page>
	);
};

export default Homepage;
