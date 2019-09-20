import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { SEO } from 'Common'

export default () => {
	useEffect(() => {
		navigate('/fr');
	}, []);
	return (
		<SEO />
	);
};
