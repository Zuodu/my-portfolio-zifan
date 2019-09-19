import React from 'react';
import { SEO } from 'Common';
import { LayoutEn } from 'Layout';
import { Intro, About, ContactEn, Projects } from 'Components/landing';

export default props => (
  <LayoutEn location={props.location}>
    <SEO title="Zifan's blog" location="/en" />
    <Intro />
    <About lang="en" />
    <Projects lang="en" />
    <ContactEn />
  </LayoutEn>
);
