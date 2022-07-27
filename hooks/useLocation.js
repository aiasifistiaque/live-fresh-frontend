import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TOKEN_NAME, CUSTOMER_LOCATION } from '../lib/constants';
import { useSelector } from 'react-redux';

const useLocation = () => {
	const [loading, setLoading] = useState({});
	const [location, setLocation] = useState({});

	const state = useSelector(state => state.location);

	useEffect(() => {
		if (typeof window == 'undefined') return;

		setLocation({
			city: state?.location?.city && state.location.city,
			area: state?.location?.area && state.location.area,
		});
	}, [state]);

	return { location };
};

export default useLocation;
