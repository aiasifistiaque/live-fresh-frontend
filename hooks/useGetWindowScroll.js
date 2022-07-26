import React, { useState, useEffect, useRef } from 'react';
const isClient = typeof window === 'object';

const useGetWindowScroll = () => {
	const [scroll, setScroll] = useState();
	const [scrollingDown, setScrollingDown] = useState(false);
	const [state, setState] = useState();
	const frame = useRef(0);
	useEffect(() => {
		setScroll(0);
	}, []);

	useEffect(() => {
		function handleScroll(e) {
			//console.log(window.scrollY);
			setScroll(window.scrollY);
			//console.log(e);
		}

		handleScroll();
		window.addEventListener('scroll', handleScroll, {
			capture: false,
			passive: true,
		});

		// if (document.readyState === 'complete') {
		// 	handleScroll();
		// } else {

		// }

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isClient]);

	return { scroll, scrollingDown };
};

export default useGetWindowScroll;
