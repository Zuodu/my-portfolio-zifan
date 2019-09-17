import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle, getDarkMode, setDarkMode, langs }) => (
	<Wrapper active={sidebar} onClick={toggle}>
		<NavbarLinks getDarkMode={getDarkMode} setDarkMode={setDarkMode} langs={langs} />
	</Wrapper>
)

export default Sidebar
