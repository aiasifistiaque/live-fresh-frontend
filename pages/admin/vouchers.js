import React, { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../components/nav/page/AdminPage';
import { Item, Row, Table } from '../../components/util/tables/Table';
import { useGetAllVouchersQuery } from '../../store/services/apiService';

const Adminvouchers = () => {
	const [page, setPage] = useState(1);

	const { data, isFetching, isError, error, isLoading } =
		useGetAllVouchersQuery({
			page,
		});
	return (
		<AdminPage>
			<ListPage isError={isError} error={error} title='Vouchers'>
				<Table
					title='All Products'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Code</Item>
						<Item title>type</Item>
						<Item title>discount</Item>
						<Item title>upto</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} href={`/admin/voucher/${item._id}`} i={i}>
								<Item>{item?.code && item.code}</Item>
								<Item>{item?.type && item.type}</Item>
								<Item>৳{item?.discount && item.discount}</Item>
								<Item>{item?.upto && item.upto}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminvouchers;
