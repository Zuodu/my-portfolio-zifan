import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import nerd from 'Static/illustrations/nerd.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<h1>Bonjour !</h1>
				<h4>Je cherche un job dans l'informatique. Découvrez mon profil !</h4>
				<Button as={AnchorLink} href="#contact">
					En savoir plus
				</Button>
			</Details>
			<Thumbnail>
				<img src={nerd} alt="Place fun picture here !" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
