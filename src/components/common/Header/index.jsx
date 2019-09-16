import React, { useState } from 'react'
import Headroom from 'react-headroom'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'

export const Header = ({getDarkMode, setDarkMode}) => {
	const [sidebar, toggle] = useState(false)
	console.log(getDarkMode)
	return (
		<Headroom>
			<Wrapper>
				<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
				<Navbar getDarkMode={getDarkMode} setDarkMode={setDarkMode} />
				<Hamburger sidebar={sidebar} toggle={toggle} />
				<Sidebar sidebar={sidebar} toggle={toggle} />
			</Wrapper>
		</Headroom>
	)
}
