import React from 'react';
import ExploreButton from '../../util/buttons/explore/ExploreButton';
import styles from './FeaturedBlog.module.css';

const FeaturedBlog = ({ data }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={data?.displayImage && data.displayImage} alt={'..'} />
			</div>
			<div className={styles.main}>
				<div className={styles.details}>
					<h6>{data?.title && data.title}</h6>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?
					</p>
				</div>

				<div className={styles.button}>
					<ExploreButton href='/' size='small'>
						Continue Reading
					</ExploreButton>
				</div>
			</div>
		</div>
	);
};

export default FeaturedBlog;
