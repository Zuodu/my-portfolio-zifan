import React from 'react';
import { SEO, GalleryDisplay } from 'Common';
import { LayoutEn } from 'Layout';
import { Heading, Txt, Box } from 'rendition';
import {
  GalleryWrapper,
  ContentWrapper,
  PaddedWrapper,
  CenteredWrapper,
} from '../themes/pageStyles';

// Images from svgbackgrounds.com and heropatterns.com
export default props => (
  <LayoutEn location={props.location}>
    <SEO title="Photo Gallery" location="/en/gallery" />
    <PaddedWrapper>
      <CenteredWrapper>
        <Heading.h1 pt={5} pb={3}>
          Photo Gallery&nbsp;
          <span role="img" aria-label="camera">
            📷
          </span>
        </Heading.h1>
        <Box style={{ textAlign: 'justify' }} pb={5}>
          <Txt>
            When I have free time, I enjoy taking pictures with my SONY Alpha
            III. I have since a few years collected several lenses. I love
            macrophotography and I try to learn the basics nowadays. When
            travelling, I usually bring my camera with me so i can take some
            surprinsingly good shots !
          </Txt>
          <Txt pt={2}>
            If you are interested by the photos in the gallery, please feel free
            to contact me !
          </Txt>
        </Box>
      </CenteredWrapper>
    </PaddedWrapper>
    <GalleryWrapper
      bgImage="/illustrations/endless-clouds.svg"
      bgColor="#003171"
      zIndex={4}
    >
      <ContentWrapper>
        <GalleryDisplay cat="japan" lang="en" />
      </ContentWrapper>
    </GalleryWrapper>
    <GalleryWrapper
      bgImage="/illustrations/plus.svg"
      bgColor="#400000"
      zIndex={3}
    >
      <ContentWrapper>
        <GalleryDisplay cat="macro" lang="en" />
      </ContentWrapper>
    </GalleryWrapper>
    <GalleryWrapper
      bgImage="/illustrations/squares.svg"
      bgColor="#787878"
      zIndex={2}
    >
      <ContentWrapper>
        <GalleryDisplay cat="everythingelse" lang="en" />
      </ContentWrapper>
    </GalleryWrapper>
    <ContentWrapper />
  </LayoutEn>
);
