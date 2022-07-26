import React, { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../components/nav/page/AdminPage';
import { Item, Row, Table } from '../../components/util/tables/Table';
import { useGetAllOrdersQuery } from '../../store/services/apiService';

const Adminorders = () => {
	const [page, setPage] = useState(1);

	const { data, isFetching, isError, error, isLoading } = useGetAllOrdersQuery({
		page,
	});
	return (
		<AdminPage>
			<ListPage isError={isError} error={error} title='Orders'>
				<Table
					title='All Products'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Date</Item>
						<Item title>Total</Item>
						<Item title>Status</Item>
						<Item title>Area</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} href={`/admin/orders/${item._id}`} i={i}>
								<Item date>{item?.createdAt && item.createdAt}</Item>
								<Item>৳{item?.totalPrice && item.totalPrice}</Item>
								<Item>{item?.status && item.status}</Item>
								<Item>
									{item?.shippingAddress?.area && item.shippingAddress.area}
								</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminorders;
