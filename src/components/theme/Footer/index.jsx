import React from 'react'
import { Container } from 'Common'
import { FormattedMessage} from 'react-intl'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Zifan Yao</h2>
				<span>
					<FormattedMessage id="rights" />
				</span>
				<span>
					© All rights reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://zifan.fr/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Smakosh
					</a>
				</span>
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
