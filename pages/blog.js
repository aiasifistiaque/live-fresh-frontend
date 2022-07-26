import React from 'react';
import BlogPage from '../components/homr/blog-page/BlogPage';
import Page from '../components/nav/page/Page';
import PageSection from '../components/product/page-section/PageSection';

const Blogpage = () => {
	return (
		<Page>
			<PageSection>
				<BlogPage />
			</PageSection>
		</Page>
	);
};

export default Blogpage;
