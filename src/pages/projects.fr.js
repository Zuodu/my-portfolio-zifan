import React from 'react';
import { SEO, Container } from 'Common';
import { LayoutFr } from 'Layout';
import { Button, Heading, Txt } from 'rendition';
import Design from 'Static/illustrations/design.svg';
import { FormattedMessage } from 'react-intl';
import { Projects } from 'Components/landing/Projects';
import { Details, ContentWrapper, Thumbnail } from '../themes/pageStyles';

export default props => (
  <LayoutFr location={props.location}>
    <SEO title="Projets réalisés" location="/fr/projects" />
    <ContentWrapper as={Container}>
      <Details>
        <Heading.h3 mb={4}>Mes projets réalisés</Heading.h3>
        <Txt>
          Voici une panoplie des projets que j'ai réalisé individuellement ou en
          groupe.
        </Txt>
      </Details>
      <Thumbnail>
        <img src={Design} alt="Let's build together !" />
      </Thumbnail>
    </ContentWrapper>
    <Projects hideTitle lang="fr" />
  </LayoutFr>
);
