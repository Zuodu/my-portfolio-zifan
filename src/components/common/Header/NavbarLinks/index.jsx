import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Box, Button } from 'rendition'
import { Wrapper } from './styles'


const NavbarLinks = ({ desktop, getDarkMode, setDarkMode }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
		<Button onClick={() => {
			setDarkMode(!getDarkMode)
			localStorage.setItem('darkMode', !getDarkMode)
		}}
		primary
		>
			Dark mode
		</Button>
		<Button secondary>Hello</Button>
	</Wrapper>
)

export default NavbarLinks
