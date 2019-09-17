import React from 'react'
import { SEO } from 'Common'
import { LayoutEn } from 'Layout'
import { Intro, About, Contact, Projects } from 'Components/landing'

export default (props) => (
	<LayoutEn location={props.location}>
		<SEO />
		<Intro />
		<About />
		<Projects />
		<Contact />
	</LayoutEn>
)
