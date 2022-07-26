import React, { useRef } from 'react';
import styles from './ProductSlides.module.css';
import * as lib from '../../../lib/constants';
import ProductsCard from '../../cards/products-card/ProductsCard';
import H2 from '../../util/headers/H2';
import { useGetProductsByCategoryQuery } from '../../../store/services/apiService';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductSlides = ({ title, category }) => {
	const scrollRef = useRef(null);
	const scrollDist = 410;

	const { data, isFetching, isError } = useGetProductsByCategoryQuery({
		category,
	});

	const scroll = scrollOffset => {
		scrollRef.current.scrollLeft += scrollOffset;
	};

	if (isFetching || isError) return null;
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title && <H2>{title}</H2>}</div>

			<div className={styles.sectionArrows}>
				<div className={styles.arrows} onClick={() => scroll(-scrollDist)}>
					<FontAwesomeIcon icon={faChevronLeft} className={styles.arrowIcon} />
				</div>
				<div className={styles.cards} ref={scrollRef}>
					{data.doc.map((item, i) => (
						<ProductsCard data={item} key={i} />
					))}
				</div>

				<div className={styles.arrows} onClick={() => scroll(scrollDist)}>
					<FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
				</div>
			</div>
		</div>
	);
};

export default ProductSlides;
