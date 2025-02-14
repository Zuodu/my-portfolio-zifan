import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button, DropDownButton, useTheme } from "rendition";
import {Link} from "gatsby";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { Style } from "radium";
import data from "Data";
import { getLangFromPath } from "Utils/pathUtils";
import { DynamicFlex, Wrapper } from "./styles";
import SelectLanguage from "../SelectLanguage";


const getThemeIcon = (darkMode) => {
	if (darkMode) {
		return (
			<IoIosSunny />
		);
	}
	return (
		<IoIosMoon />
	);
};

const redirectStrategist = (linkTo, pathname) => {
	const lang = getLangFromPath(pathname);
	return `/${lang}${linkTo}`;
};

const showIfHome = (isHome, showOnHome) => {
	if(isHome) {
		if (showOnHome) {
			return {};
		}
		return (
			{
				display: "none"
			}
		);
	} 
	if (showOnHome) {
		return (
			{
				display: "none"
			}
		);
	}
	return {};
	
};

const NavbarLinks = ({ desktop, getDarkMode, setDarkMode, langs, isHome }) => {
	const bgColor = useTheme().colors.background.main;
	let currentLocation;
	typeof window !== `undefined` ? currentLocation = window.location.pathname : null;
	return (
		<Wrapper desktop={desktop}>
			<DynamicFlex style={showIfHome(isHome, false)}>
				<a href={redirectStrategist(`/resume/${data.resumeFileName}`, currentLocation)}><FormattedMessage id="about" /></a>
				<Link to={redirectStrategist("/projects", currentLocation)}><FormattedMessage id="projects" /></Link>
				<Link to={redirectStrategist("/gallery", currentLocation)}><FormattedMessage id="gallery" /></Link>
				<Link to={redirectStrategist("/contact", currentLocation)}><FormattedMessage id="contact" /></Link>
			</DynamicFlex>
			<DynamicFlex style={showIfHome(isHome, true)}>
				<a href={redirectStrategist(`/resume/${data.resumeFileName}`, currentLocation)}><FormattedMessage id="about" /></a>
				<AnchorLink href='#projects'><FormattedMessage id="projects" /></AnchorLink>
				<Link to={redirectStrategist("/gallery", currentLocation)}><FormattedMessage id="gallery" /></Link>
				<AnchorLink href='#contact'><FormattedMessage id="contact" /></AnchorLink>
			</DynamicFlex>
			<DropDownButton
				className="lang-dropdown"
				mr={2}
				ml={3}
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
			<Button aria-label="Darkmode" onClick={() => {
				typeof window !== `undefined` && window.localStorage.setItem("darkMode", !getDarkMode);
				setDarkMode(!getDarkMode);
				typeof window !== `undefined` && window.document.location.reload();
			}} plain fontSize={3} icon={getThemeIcon(getDarkMode)} tooltip={{text: 'Work in progress !', placement: 'right'}}
			/>
		</Wrapper>
	);
};

export default NavbarLinks;
