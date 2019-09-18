import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { defaultLangKey } from 'Data'
import { Loading } from 'Common/Loading'

export default ()  => {
	let langKey;
	typeof window !== `undefined` ? langKey = window.localStorage.getItem("selectedLang") : null;
	if(langKey === null) langKey = defaultLangKey;
	typeof document !== `undefined` && console.log(document.referrer)
	useEffect(() => {
		navigate(`/${langKey}`)
	}, [langKey])
	return (
		<Loading />
	)
}