import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, DropDownButton, useTheme } from 'rendition'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { FormattedMessage } from 'react-intl'
import { Style } from 'radium'
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

const NavbarLinks = ({ desktop, getDarkMode, setDarkMode, langs }) => {
	const bgColor = useTheme().colors.background.main;
	return (
		<Wrapper desktop={desktop}>
			<AnchorLink href="#about">About</AnchorLink>
			<AnchorLink href="#projects">Projects</AnchorLink>
			<AnchorLink href="#contact">Contact</AnchorLink>
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
						boxShadow: "1px 1px 5px #000"
					}}
				/>
				<SelectLanguage langs={langs} />
				<div />
			</DropDownButton>
			<Button onClick={() => {
				typeof window !== `undefined` && window.localStorage.setItem('darkMode', !getDarkMode);
				window.location = '/';
			}} plain fontSize={3} icon={getThemeIcon(getDarkMode)}
			/>
		</Wrapper>
	)
};

export default NavbarLinks
