import React from 'react'
import { SEO } from 'Common'
import { LayoutEn } from 'Layout'
import { Intro, Skills, Contact, Projects } from 'Components/landing'

export default (props) => (
	<LayoutEn location={props.location}>
		<SEO />
		<Intro />
		<Projects />
		<Skills />
		<Contact />
	</LayoutEn>
)
