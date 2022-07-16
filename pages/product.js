import React from 'react';
import Categories from '../components/homr/categories/Categories';
import Newsletter from '../components/homr/newsletter/Newsletter';
import ProductSlides from '../components/homr/product-slides/ProductSlides';
import HomeSection from '../components/homr/section/HomeSection';
import Page from '../components/nav/page/Page';
import PageSection from '../components/product/page-section/PageSection';
import ProductDescription from '../components/product/product-description/PoductDescription';

const product = () => {
	return (
		<Page>
			<PageSection>
				<ProductDescription />
			</PageSection>

			<PageSection title='COOKING NOTES'>
				<p>
					{`You’ll`} want to cook this cut quickly over high heat. Season the
					outside with salt and pepper. Pre-heat some oil in a pan until it’s
					nice and hot. Sear until medium rare (130°F), under 10 minutes. After
					resting, slice and sprinkle with some flake or finishing salt. Don’t
					stress if you overcook this cut. The Flat Iron is very forgiving and
					will maintain its flavor into the medium and medium well range, making
					it ideal for cooking novices and those who prefer their meat a bit
					more well-done.
				</p>
			</PageSection>
			<PageSection title='SPECIAL NOTES'>
				<p>
					{`You’ll`} want to cook this cut quickly over high heat. Season the
					outside with salt and pepper. Pre-heat some oil in a pan until it’s
					nice and hot. Sear until medium rare (130°F), under 10 minutes. After
					resting, slice and sprinkle with some flake or finishing salt. Don’t
					stress if you overcook this cut. The Flat Iron is very forgiving and
					will maintain its flavor into the medium and medium well range, making
					it ideal for cooking novices and those who prefer their meat a bit
					more well-done.
				</p>
				<p>
					{`You’ll`} want to cook this cut quickly over high heat. Season the
					outside with salt and pepper. Pre-heat some oil in a pan until it’s
					nice and hot. Sear until medium rare (130°F), under 10 minutes. After
					resting, slice and sprinkle with some flake or finishing salt. Don’t
					stress if you overcook this cut. The Flat Iron is very forgiving and
					will maintain its flavor into the medium and medium well range, making
					it ideal for cooking novices and those who prefer their meat a bit
					more well-done.
				</p>
			</PageSection>
			<HomeSection
				title='Shop By Categories'
				href='/'
				button='Explore All Categories'>
				<Categories />
			</HomeSection>
			<ProductSlides title='Related Products' />
			<HomeSection bg>
				<Newsletter />
			</HomeSection>
		</Page>
	);
};

export default product;
