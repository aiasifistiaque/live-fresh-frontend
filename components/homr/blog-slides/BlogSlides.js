import React from 'react';
import BlogCard from '../../cards/blog-card/BlogCard';
import styles from './BlogSlides.module.css';
import * as lib from '../../../lib/constants';
import FeaturedBlog from '../../cards/featured-blog/FeaturedBlog';
import H2 from '../../util/headers/H2';

const BlogSlides = ({ title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title && <H2>{title}</H2>}</div>

			<div className={styles.feature}>
				<FeaturedBlog data={lib.seeders.blog[0]} />
			</div>

			<div className={styles.cards}>
				{lib.seeders.blog.map(
					(item, i) => i > 0 && <BlogCard data={item} key={i} />
				)}
			</div>
		</div>
	);
};

export default BlogSlides;
