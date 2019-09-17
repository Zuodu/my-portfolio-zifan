import React from 'react'
import { SEO } from 'Common'
import { LayoutFr } from 'Layout'
import { Intro, About, Contact, Projects } from 'Components/landing'

export default (props) => {
	console.log(props);
	return 	(
		<LayoutFr location={props.location}>
			<SEO />
			<Intro />
			<About />
			<Projects />
			<Contact />
		</LayoutFr>
	)
}

