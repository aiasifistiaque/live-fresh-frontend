import React, { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../components/nav/page/AdminPage';
import { Item, Row, Table } from '../../components/util/tables/Table';
import { useGetAllUsersQuery } from '../../store/services/apiService';

const Adminusers = () => {
	const [page, setPage] = useState(1);

	const { data, isFetching, isError, error, isLoading } = useGetAllUsersQuery({
		page,
	});
	return (
		<AdminPage>
			<ListPage isError={isError} error={error} title='Users'>
				<Table
					title='All Users'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>Phone</Item>
						<Item title>Email</Item>
						<Item title>Wallet</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} href={`/admin/p/${item._id}`} i={i}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.phone && item.phone}</Item>
								<Item>{item?.email && item.email}</Item>
								<Item>{item?.wallet && item.wallet}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminusers;
