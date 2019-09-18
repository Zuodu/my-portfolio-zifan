import React from 'react'
import TextLoop from 'react-text-loop'
import { Button, Heading, Txt } from 'rendition'
import { FormattedMessage } from 'react-intl'
import { Container } from 'Common'
import nerd from 'Static/illustrations/nerd.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'



export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<Heading.h1 mb={4}>
					<TextLoop interval={2000}>
						<Txt>Bonjour !</Txt>
						<Txt>你好 !</Txt>
						<Txt>Hello !</Txt>
						<Txt>こんにちは !</Txt>
						<Txt>Guten Tag !</Txt>
					</TextLoop>
				</Heading.h1>
				<Heading.h4 color="text.light" mb={2}><FormattedMessage id="intro1" /></Heading.h4>
				<Heading.h4 color="text.light" mb={3}><FormattedMessage id="intro2" /></Heading.h4>
				<Button primary href="#about">
					<FormattedMessage id="view_more" />
				</Button>
			</Details>
			<Thumbnail>
				<img src={nerd} alt="It looks like me !" />
			</Thumbnail>
		</IntroWrapper>
		<div className="icon-scroll" />
	</Wrapper>
)
