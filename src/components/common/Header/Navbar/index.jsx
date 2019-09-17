import React from 'react'
import { Link, Heading, Txt } from 'rendition'
import { Container } from 'Common'
import { FormattedMessage } from 'react-intl'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'


const Navbar = ({getDarkMode, setDarkMode, langs, home}) => (
	<Wrapper as={Container}>
		<Link color="text.main" href={home}>
			<Heading.h4>
				<FormattedMessage id="name" />
			</Heading.h4>
			<Txt>
				<FormattedMessage id="job" />
			</Txt>
		</Link>
		<NavbarLinks desktop getDarkMode={getDarkMode} setDarkMode={setDarkMode} langs={langs} />
	</Wrapper>
)

export default Navbar
