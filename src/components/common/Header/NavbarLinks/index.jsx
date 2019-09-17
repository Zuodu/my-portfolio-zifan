import React from 'react'
import { Button, DropDownButton, useTheme } from 'rendition'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { FormattedMessage } from 'react-intl'
import { Style } from 'radium'
import { getLangFromPath } from 'Utils/pathUtils'
import { Wrapper } from './styles'
import SelectLanguage from '../SelectLanguage'


const getThemeIcon = (darkMode) => {
	if (darkMode) {
		return (
			<IoIosSunny />
		)
	}
	return (
		<IoIosMoon />
	)
}

const pathWithLangParser = (linkTo, pathname) => {
	const lang = getLangFromPath(pathname)
	return `/${lang}/${linkTo}`;
}

const NavbarLinks = ({ desktop, getDarkMode, setDarkMode, langs }) => {
	const bgColor = useTheme().colors.background.main
	let currentLocation
	typeof window !== `undefined` ? currentLocation = window.location.pathname : null
	return (
		<Wrapper desktop={desktop}>
			<a href={pathWithLangParser('resume', currentLocation)}><FormattedMessage id="about" /></a>
			<a href={pathWithLangParser('projects', currentLocation)}><FormattedMessage id="projects" /></a>
			<a href={pathWithLangParser('contact', currentLocation)}><FormattedMessage id="contact" /></a>
			<DropDownButton
				className="lang-dropdown"
				mr={3}
				quartenary
				joined
				outline
				label={<div><FormattedMessage id="language" /></div>}
			>
				<Style
					scopeSelector=".lang-dropdown>div"
					rules={{
						background: `${bgColor}`,
						boxShadow: '1px 1px 5px #000',
					}}
				/>
				<SelectLanguage langs={langs} />
				<div />
			</DropDownButton>
			<Button onClick={() => {
				typeof window !== `undefined` && window.localStorage.setItem('darkMode', !getDarkMode)
				window.location = '/'
			}} plain fontSize={3} icon={getThemeIcon(getDarkMode)}
			/>
		</Wrapper>
	)
}

export default NavbarLinks
