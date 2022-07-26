import React, { useState } from 'react';
import Page from '../../components/nav/page/Page';
import ProfileContainer from '../../components/profile/profile-container/ProfileContainer';
import { Item, Row, Table } from '../../components/util/tables/Table';
import { useGetMyOrdersQuery } from '../../store/services/apiService';

const Manageprofile = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError, isFetching } = useGetMyOrdersQuery({
		page,
	});

	return (
		<Page>
			<ProfileContainer title='Orders' select='orders'>
				{data && (
					<Table
						title='My Orders'
						isLoading={isFetching}
						page={data?.page ? data.page : 1}
						totalPages={data?.totalPages ? data.totalPages : 1}
						setPage={e => setPage(e)}>
						<Row title>
							<Item title>Date</Item>
							<Item title>Price</Item>
							<Item title>Status</Item>
							<Item title>Delivered</Item>
						</Row>
						{!isLoading &&
							data?.doc &&
							data.doc.map((item, i) => (
								<Row key={i} i={i} href={`/order/${item?._id}`}>
									<Item date>{item?.createdAt && item.createdAt}</Item>
									<Item>৳{item?.totalPrice && item.totalPrice}</Item>
									<Item>{item.status}</Item>
									<Item>
										{item?.isDelivered ? 'Delivered' : 'Not Delivered'}
									</Item>
								</Row>
							))}
					</Table>
				)}
			</ProfileContainer>
		</Page>
	);
};

export default Manageprofile;
