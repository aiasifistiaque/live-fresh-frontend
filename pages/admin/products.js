import React, { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../components/nav/page/AdminPage';
import { Item, Row, Table } from '../../components/util/tables/Table';
import { useGetProductsByCategoryQuery } from '../../store/services/apiService';

const Adminproducts = () => {
	const [page, setPage] = useState(1);

	const { data, isFetching, isError, error, isLoading } =
		useGetProductsByCategoryQuery({ category: 'all', page });
	return (
		<AdminPage>
			<ListPage
				isError={isError}
				error={error}
				title='Products'
				button='New Product'
				href={`/addproduct`}>
				<Table
					title='All Products'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>Category</Item>
						<Item title>Price</Item>
						<Item title>Stock</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} href={`/admin/p/${item._id}`} i={i}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.category && item.category}</Item>
								<Item>{item?.price && item.price}</Item>
								<Item>{item?.stock && item.stock}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminproducts;
