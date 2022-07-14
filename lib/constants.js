import blogSeed from '../seeder/blogSeed';
import featuredProductsSeed from '../seeder/featuredProductsSeed';
import productSeedData from '../seeder/productSeed';

export const seeders = {
	products: productSeedData,
	featuredProducts: featuredProductsSeed,
	blog: blogSeed,
};
