import React from 'react'
import { SEO } from 'Common'
import { LayoutFr } from 'Layout'
import { Intro, About, ContactFr, Projects } from 'Components/landing'

export default props => (
  <LayoutFr location={props.location}>
    <SEO title="Blog de Zifan" location="/fr" />
    <Intro />
    <About lang="fr" />
    <Projects lang="fr" />
    <ContactFr />
  </LayoutFr>
)
