import React from 'react';
import Banner from '../components/homr/banner/Banner';
import BannerTwo from '../components/homr/bannertwo/BannerTwo';
import BlogSlides from '../components/homr/blog-slides/BlogSlides';
import Categories from '../components/homr/categories/Categories';
import Clients from '../components/homr/clients/Clients';
import CoreValues from '../components/homr/core-values/CoreValues';
import FeaturedProducts from '../components/homr/featured-products/FeaturedProducts';
import HowWeAreDifferent from '../components/homr/how-we-are-different/HowWeAreDifferent';
import Newsletter from '../components/homr/newsletter/Newsletter';
import ProcurementCycle from '../components/homr/procurement-cycle/ProcurementCycle';
import ProductSlides from '../components/homr/product-slides/ProductSlides';
import HomeSection from '../components/homr/section/HomeSection';
import Page from '../components/nav/page/Page';
import WhoWeAre from '../components/who-we-are/WhoWeAre';

const Homepage = () => {
	return (
		<Page landing>
			<BannerTwo />
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
				href='/categories'
				button='Explore All Categories'>
				<Categories />
			</HomeSection>
			<HomeSection bg>
				<FeaturedProducts />
			</HomeSection>
			{/* <ProductSlides title='Best Sellers' /> */}
			<ProductSlides title='All Products' category='all' />
			<ProductSlides title='Beef Products' category='beef' />
			<ProductSlides title='Our Chicken' category='chicken' />
			{/* <ProductSlides title='Frozen Items' />
			<ProductSlides title='Marinated products' /> */}
			<HomeSection
				title='How We Are Different'
				href='/'
				button='Explore Details'>
				<HowWeAreDifferent />
			</HomeSection>
			<HomeSection title='Our Blog' href='/' button='Explore Our Blog' bg>
				<BlogSlides />
			</HomeSection>
			{/* <HomeSection title='What Our Clients are saying'>
				Testemonials
			</HomeSection> */}
			<HomeSection
				title={'Our Clients & Partners'}
				href='/'
				button='Explore Details'>
				<Clients />
			</HomeSection>
			<HomeSection bg>
				<Newsletter />
			</HomeSection>
		</Page>
	);
};

export default Homepage;
