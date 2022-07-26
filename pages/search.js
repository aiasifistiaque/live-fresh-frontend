import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Page from '../components/nav/page/Page';
import SearchCategories from '../components/search/categories/SearchCategories';
import SearchContainer from '../components/search/search-container/SearchContainer';
import SearchFilters from '../components/search/search-filters/SearchFilters';
import SearchMain from '../components/search/search-main/SearchMain';
import * as lib from '../lib/constants';

const Searchpage = () => {
	const router = useRouter();
	//
	const [query, setQuery] = useState(router.query.search);
	const [rating, setRating] = useState();
	const [show, setShow] = useState(true);
	const [features, setFeatures] = useState([]);
	const [location, setLocation] = useState();

	const [category, setCategory] = useState();
	const [sort, setSort] = useState(lib.data.sort[0]);

	const [filters, setFilters] = useState({ search: query });

	const [finalQuery, setFinalQuery] = useState();
	const [fianlCategory, setFinalCategory] = useState();
	const [finalSort, setFinalSort] = useState();
	const [finalLocation, setFinalLocation] = useState();
	const [finalRating, setFinalRating] = useState();
	const [page, setPage] = useState(1);

	const onApplyFilters = () => {};

	return (
		<Page>
			<SearchCategories />
			<SearchContainer>
				<SearchFilters
					total={12}
					onApplyFilters={onApplyFilters}
					setLocation={e => setLocation(e)}
					rating={rating}
					setRating={e => setRating(e)}
					show={show}
					setShow={e => setShow(e)}
					features={features}
					setFeatures={e => setFeatures(e)}
					query={query}
					setQuery={setQuery}
					setCategory={e => setCategory(e)}
					categories={[]}
					sort={sort}
					setSort={e => setSort(e)}
				/>
				<SearchMain />
			</SearchContainer>
		</Page>
	);
};

export default Searchpage;
