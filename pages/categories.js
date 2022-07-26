import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Page from '../components/nav/page/Page';
import CategoriesSelector from '../components/search/categories/CategoriesSelector';
import SearchCategories from '../components/search/categories/SearchCategories';
import SearchContainer from '../components/search/search-container/SearchContainer';
import SearchFilters from '../components/search/search-filters/SearchFilters';
import CategoriesMain from '../components/search/search-main/CategoriesMain';

import { useGetProductsByCategoryQuery } from '../store/services/apiService';

const CategoriesPage = () => {
	const router = useRouter();
	//
	const { category } = router.query;

	const { data, isFetching, isError } = useGetProductsByCategoryQuery({
		category: category || 'all',
	});

	return (
		<Page>
			<CategoriesSelector />
			<SearchContainer>
				{data && <CategoriesMain data={data.doc} />}
			</SearchContainer>
		</Page>
	);
};

export default CategoriesPage;
