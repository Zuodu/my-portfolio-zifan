import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { defaultLangKey } from 'Data';
import { Loading } from 'Common/Loading';

export default () => {
	const indexPath = `/${defaultLangKey}`;
	useEffect(() => {
		navigate(indexPath);
	}, [indexPath]);
	return <Loading />;
};
