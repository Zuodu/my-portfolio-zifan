import React from 'react';
import { SEO } from 'Common';
import { LayoutEn } from 'Layout';
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
	<LayoutEn location={props.location}>
		<SEO title="Contact Page" location="/fr/contact" />
		<ContentWrapper>
			<Details>
				<Heading.h3 pb={4}>
					<FormattedMessage id="contactMe" />
				</Heading.h3>
				<Txt pb={3}>
          You can send me an e-mail at : <a href="mailto:zifan.yao.fr@gmail.com">zifan.yao.fr@gmail.com</a>
				</Txt>
				<Txt>
          Or reach me using the form below !
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
	</LayoutEn>
);
