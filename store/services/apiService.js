import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

const tagTypes = [
	'Orders',
	'Order',
	'Products',
	'Product',
	'Self',
	'User',
	'Users',
	'Voucher',
	'Vouchers',
];

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}/api`,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: tagTypes,
	endpoints: builder => ({
		/**Auth Routes authRoutes
		 *
		 *
		 *
		 */

		getSelf: builder.query({
			query: () => `/auth/self`,
			providesTags: ['Self'],
		}),

		updateMyInfo: builder.mutation({
			query(body) {
				return {
					url: `/auth/self`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: ['Self'],
		}),

		login: builder.mutation({
			query(body) {
				return {
					url: `/auth/login`,
					method: 'POST',
					body,
				};
			},
		}),
		register: builder.mutation({
			query(body) {
				return {
					url: `/auth/register`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
		/**End of Auth Routes
		 *
		 *
		 *
		 */

		/**Products Routes productRouter
		 *
		 *
		 *
		 */

		getProductsByCategory: builder.query({
			query: ({
				sort = '-createdAt',
				page = 1,
				perpage = 10,
				category = 'All',
				rating,
			} = {}) =>
				`/products/category/${category}?sort=${sort}&page=${page}&rating=${rating}&perpage=${perpage}`,
			providesTags: ({ category }) => [
				{ type: 'Products', id: category ? category : '' },
			],
		}),
		getProductById: builder.query({
			query: id => `/products/${id}`,
			providesTags: id => [{ type: 'Product', id: id ? id : '' }],
		}),
		// addListing: builder.mutation({
		// 	query(body) {
		// 		return {
		// 			url: `/listings`,
		// 			method: 'POST',
		// 			body,
		// 		};
		// 	},
		// 	invalidatesTags: ['Listings', 'Activities'],
		// }),
		/**End of Product Routes
		 *
		 *
		 *
		 */
		/**Search Routes searchRoutes
		 *
		 *
		 *
		 */

		getSearch: builder.query({
			query: ({ str }) => `/search/${str}`,
			providesTags: ({ str }) => [{ type: 'Search', id: str ? str : '' }],
		}),

		// getFilteredSearch: builder.query({
		// 	query: ({
		// 		search,
		// 		sort = '-createdAt',
		// 		page = 1,
		// 		perpage = 10,
		// 		location = 'All',
		// 		category = 'All',
		// 		rating,
		// 	} = {}) =>
		// 		`/filter?search=${search}&location=${location}&category=${category}&sort=${sort}&page=${page}&rating=${rating}&perpage=${perpage}`,
		// }),

		/**End of Search Routes
		 *
		 *
		 *
		 */
		/**Order Routes orderRoutes
		 *
		 *
		 *
		 */
		createOrder: builder.mutation({
			query(body) {
				return {
					url: `/orders`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Orders'],
		}),
		getMyOrders: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/orders?sort=${sort}&page=${page}`,
			providesTags: ['Orders'],
		}),
		getOrderById: builder.query({
			query: id => `/orders/${id}`,
			providesTags: id => [{ type: 'Order', id: id ? id : '' }],
		}),

		/**End of Rating Routes
		 *
		 *
		 *
		 */

		createAddress: builder.mutation({
			query(body) {
				return {
					url: `/address`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Address'],
		}),

		getMyAddress: builder.query({
			query: () => `/address`,
			providesTags: ['Address'],
		}),

		getUserData: builder.query({
			query: id => `/users/${id}`,
			providesTags: id => [{ type: 'User', id: id ? id : '' }],
		}),

		//ADMIN ROUTES

		getAllUsers: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/users?sort=${sort}&page=${page}`,
		}),
		getAllOrders: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/orders/admin/all?sort=${sort}&page=${page}`,
		}),
		getAllVouchers: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/vouchers?sort=${sort}&page=${page}`,
		}),

		createProduct: builder.mutation({
			query(body) {
				return {
					url: `/products`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Products'],
		}),

		editOrderStatus: builder.mutation({
			query(body) {
				return {
					url: `/orders/${body._id}`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: ['Orders', 'Order'],
		}),
	}),
});

export const {
	useGetSelfQuery,
	useUpdateMyInfoMutation,
	useLoginMutation,
	useRegisterMutation,
	useGetProductsByCategoryQuery,
	useGetProductByIdQuery,
	useGetSearchQuery,
	useCreateOrderMutation,
	useGetMyOrdersQuery,
	useGetOrderByIdQuery,
	useCreateAddressMutation,
	useGetMyAddressQuery,

	//admin

	useGetAllUsersQuery,
	useGetAllOrdersQuery,
	useGetAllVouchersQuery,

	//mutations
	useCreateProductMutation,
	useEditOrderStatusMutation,
} = userApi;
