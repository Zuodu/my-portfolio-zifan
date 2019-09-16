import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { defaultLangKey } from 'Data';

export default ()  => {
	useEffect(() => {
		navigate(`/${  defaultLangKey}`);
	}, []);
	return null;
}