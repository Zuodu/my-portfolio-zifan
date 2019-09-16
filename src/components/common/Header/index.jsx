import React, { useState } from 'react'
import Headroom from 'react-headroom'
import { Box } from 'rendition'
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
				<Box bg='background.main'>
					<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
					<Navbar getDarkMode={getDarkMode} setDarkMode={setDarkMode} />
					<Hamburger sidebar={sidebar} toggle={toggle} />
					<Sidebar sidebar={sidebar} toggle={toggle} />
				</Box>
			</Wrapper>
		</Headroom>
	)
}
