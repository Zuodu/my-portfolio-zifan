import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import {Heading} from 'rendition'
import { FormattedMessage } from 'react-intl'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const ContactFr = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<Heading.h3 mb={2}><FormattedMessage id="contactTitle" /></Heading.h3>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="Illustration contact" />
		</Thumbnail>
	</Wrapper>
)
