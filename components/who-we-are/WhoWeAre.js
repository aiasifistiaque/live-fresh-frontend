import React from 'react';
import ExploreButton from '../util/buttons/explore/ExploreButton';
import H2 from '../util/headers/H2';
import styles from './WhoWeAre.module.css';

const WhoWeAre = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src='/test/about.png' alt='about' />
			</div>
			<div className={styles.text}>
				<div className={styles.title}>
					<H2>Who We Are</H2>
				</div>
				<div className={styles.main}>
					<div className={styles.highlight}>
						<img src='/icons/quote-open.png' alt='"' />

						<h6>
							LiveFresh Agro provides a turnkey solution for meat and meat
							product from production by processing to ready to eat and hence
							{` "Farm to From"`}. <img src='/icons/quote-close.png' alt='"' />
						</h6>
					</div>
					<p>
						The core focus for LiveFresh Agro is to create value for our
						stakeholders i.e. small and medium holding farmers, contract farmers
						sustainably by bring the market to resources. We have extensive
						experience in working with other agri-business players across the
						value chain and have developed rich experience in tackling various
						issues facing the industry currently from production to processing
						and retailing. Our expertise in tackling issues related to growth
						strategies, sustainability and operational efficiency has made us
						suitably positioned to deliver tangible value to our clients in
						dealing with cost pressures, partnering, sourcing and delivery
						capabilities {'&'} improving Food {'&'} Agribusinesses.
					</p>
				</div>
				<div className={styles.button}>
					<ExploreButton href='/'>Learn More About Us</ExploreButton>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
