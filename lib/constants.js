import blogSeed from '../seeder/blogSeed';
import cartSeed from '../seeder/cartSeed';
import featuredProductsSeed from '../seeder/featuredProductsSeed';
import productSeedData from '../seeder/productSeed';
import searchSeed from '../seeder/searchSeeder';
import categoriesData from './data/categoriesData';
import sortData from './data/sortData';

export const TOKEN_NAME = 'LIVE_FRESH_TEST_TOKEN_1';
export const CART_NAME = 'LIVE_FRESH_TEST_CART_1';
export const SHIPPING_ADDRESS = 'LIVE_FRESH_SHIPPING_ADDRESS_TEST_1';
export const CUSTOMER_LOCATION = 'LIVE_FRESH_CUSTOMER_LOCATION_TEST_1';

const localhost = process.env.NEXT_PUBLIC_BACKEND;

export const api = { backend: localhost };

export const seeders = {
	products: productSeedData,
	featuredProducts: featuredProductsSeed,
	blog: blogSeed,
	search: searchSeed,
	cart: cartSeed,
};

export const data = {
	sort: sortData,
	categories: categoriesData,
};

export const placeholders = {
	profileImage: '/placeholders/profile.svg',
	productImage: '/test/p3.png',
};
