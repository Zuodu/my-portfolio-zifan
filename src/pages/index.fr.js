import React from 'react'
import { SEO } from 'Common'
import { LayoutFr } from 'Layout'
import { Intro, About, ContactFr, Projects } from 'Components/landing'

export default (props) => {
	return 	(
		<LayoutFr location={props.location}>
			<SEO />
			<Intro />
			<About path={props.location.pathname} />
			<Projects />
			<ContactFr />
		</LayoutFr>
	)
}

