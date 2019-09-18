import React from 'react'
import { Container } from 'Common'
import { FormattedMessage } from 'react-intl'
import { Heading, Flex as FlexRen } from 'rendition'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<Heading.h4 color='white'><FormattedMessage id="name" /></Heading.h4>
				<FlexRen alignItems="center" color='white'>
					<span>
						<FormattedMessage id="rights" />
					</span>
					<span>
					 &nbsp;&nbsp;|&nbsp;&nbsp;{new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;
					</span>
					<FormattedMessage id="madeWith" /> &nbsp;
					<img width="20" style={{ margin: 0 }} src="/icons/gatsby.svg" alt="GatsbyJS" />
					&nbsp;, &nbsp;
					<img width="20" style={{ margin: 0 }} src="/icons/react.svg" alt="React" />
					&nbsp;, &nbsp;
					<FormattedMessage id="hostedOn" /> &nbsp;
					<img width="20" style={{ margin: 0 }} src="/icons/netlify.svg" alt="Netlify" />
					&nbsp;.
				</FlexRen>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
