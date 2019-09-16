import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'Common'
import { Wrapper } from './styles'


const NavbarLinks = ({desktop, getDarkMode, setDarkMode}) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
		<Button
			onClick={() => {
				console.log(`navbarlink/ getDarkMode: ${getDarkMode}`)
				setDarkMode(!getDarkMode);
				localStorage.setItem("darkMode", !getDarkMode);
			}}
		>
			Dark mode
		</Button>
	</Wrapper>
)

export default NavbarLinks
