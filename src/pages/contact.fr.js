import React from 'react';
import { SEO } from 'Common';
import { LayoutFr } from 'Layout';
import { Heading, Txt } from 'rendition';
import { FormattedMessage } from 'react-intl';
import ContactForm from 'Components/landing/ContactFr/ContactForm';
import contact from 'Static/illustrations/contact.svg';
import {
	ContentWrapper,
	Details,
	Thumbnail,
	PaddedWrapper,
} from '../themes/pageStyles';

export default props => (
	<LayoutFr location={props.location}>
		<SEO title="Page de contact" location="/fr/contact" />
		<ContentWrapper>
			<Details>
				<Heading.h3 pb={4}>
					<FormattedMessage id="contactMe" />
				</Heading.h3>
				<Txt pb={3}>
          Vous pouvez m'envoyer un mail à l'adresse : <a href="mailto:zifan.yao.fr@gmail.com">zifan.yao.fr@gmail.com</a>
				</Txt>
				<Txt>
          Ou me joindre via le formulaire ci-dessous !
				</Txt>
			</Details>
			<Thumbnail>
				<img src={contact} alt="Illustration contact" />
			</Thumbnail>
		</ContentWrapper>
		<PaddedWrapper>
			<Details>
				<Heading.h3 mb={2}>
					<FormattedMessage id="contactTitle" />
				</Heading.h3>
				<ContactForm />
			</Details>
		</PaddedWrapper>
	</LayoutFr>
);
