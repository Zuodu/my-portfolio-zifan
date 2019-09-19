import React from 'react';
import { SEO, Container } from 'Common';
import { LayoutEn } from 'Layout';
import { Button, Heading, Txt } from 'rendition';
import Design from 'Static/illustrations/design.svg';
import { FormattedMessage } from 'react-intl';
import { Projects } from 'Components/landing/Projects';
import { Details, ContentWrapper, Thumbnail } from '../themes/pageStyles';

export default props => (
  <LayoutEn location={props.location}>
    <SEO title="My Projects" location="/en/projects" />
    <ContentWrapper as={Container}>
      <Details>
        <Heading.h3 mb={4}>Projects I have worked on</Heading.h3>
        <Txt>
          Here you can find details about projects I have done by myself or
          within a team.
        </Txt>
      </Details>
      <Thumbnail>
        <img src={Design} alt="Let's build together !" />
      </Thumbnail>
    </ContentWrapper>
    <Projects hideTitle lang="en" />
  </LayoutEn>
);
