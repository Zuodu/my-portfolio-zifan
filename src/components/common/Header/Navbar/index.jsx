import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import { FormattedMessage } from 'react-intl'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'


const Navbar = ({getDarkMode, setDarkMode}) => (
	<Wrapper as={Container}>
		<Link to="/">
			<FormattedMessage id="name" />
		</Link>
		<NavbarLinks desktop getDarkMode={getDarkMode} setDarkMode={setDarkMode} />
	</Wrapper>
)

export default Navbar
