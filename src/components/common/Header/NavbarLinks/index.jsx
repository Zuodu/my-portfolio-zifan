import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button, DropDownButton, useTheme } from "rendition";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { Style } from "radium";
import data from "Data";
import { getLangFromPath } from "Utils/pathUtils";
import { Wrapper } from "./styles";
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

const showIfHome = (pathname, isHome) => {
	if (!pathname) {
		return (
			{
				display: "none"
			}
		);
	}
	switch (isHome) {
		case true:
			if (pathname.match(/^\/\w{2}\/?$/g)) {
				return {};
			}
			return (
				{
					display: "none"
				}
			);
		case false:
			if (pathname.match(/^\/\w{2}\/?$/g)) {
				return (
					{
						display: "none"
					}
				);
			}
			return {};
		default:
			if (pathname.match(/^\/\w{2}\/?$/g)) {
				return {};
			}
			return (
				{
					display: "none"
				}
			);
	}
};

const NavbarLinks = ({ desktop, getDarkMode, setDarkMode, langs }) => {
	const bgColor = useTheme().colors.background.main;
	let currentLocation;
	typeof window !== `undefined` ? currentLocation = window.location.pathname : null;
	return (
		<Wrapper desktop={desktop}>
			<div style={showIfHome(currentLocation, false)}>
				<a href={redirectStrategist(`/resume/${data.resumeFileName}`, currentLocation)}><FormattedMessage id="about" /></a>
				<a href={redirectStrategist("/projects", currentLocation)}><FormattedMessage id="projects" /></a>
				<a href={redirectStrategist("/gallery", currentLocation)}><FormattedMessage id="gallery" /></a>
				<a href={redirectStrategist("/contact", currentLocation)}><FormattedMessage id="contact" /></a>
			</div>
			<div style={showIfHome(currentLocation, true)}>
				<AnchorLink href='#about'><FormattedMessage id="about" /></AnchorLink>
				<AnchorLink href='#projects'><FormattedMessage id="projects" /></AnchorLink>
				<a href={redirectStrategist("/gallery", currentLocation)}><FormattedMessage id="gallery" /></a>
				<AnchorLink href='#contact'><FormattedMessage id="contact" /></AnchorLink>
			</div>
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
			<Button onClick={() => {
				typeof window !== `undefined` && window.localStorage.setItem("darkMode", !getDarkMode);
				window.location = "/";
			}} plain fontSize={3} icon={getThemeIcon(getDarkMode)}
			/>
		</Wrapper>
	);
};

export default NavbarLinks;
