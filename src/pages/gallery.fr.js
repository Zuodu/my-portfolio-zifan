import React from 'react';
import { SEO, GalleryDisplay } from 'Common';
import { LayoutFr } from 'Layout';
import { Heading, Txt, Box } from 'rendition';
import {
	GalleryWrapper,
	ContentWrapper,
	PaddedWrapper,
	CenteredWrapper,
} from '../themes/pageStyles';

// Images from svgbackgrounds.com and heropatterns.com
export default props => (
	<LayoutFr location={props.location}>
		<SEO title="Galerie photos" location="/fr/gallery" />
		<PaddedWrapper>
			<CenteredWrapper>
				<Heading.h1 pt={5} pb={3}>
          Galerie photo&nbsp;
					<span role="img" aria-label="camera">
            📷
					</span>
				</Heading.h1>
				<Box style={{ textAlign: 'justify' }} pb={5}>
					<Txt>
            À mes heures perdues, je me consacre à la photographie. J'ai comme
            appareil un SONY Alpha III avec plusieurs optiques. J'adore la
            macrophotographie et j'apprends petit à petit comment réaliser de
            belles prises. Je me balade aussi avec mon appareil lors des voyages
            et j'en profite pour prendre des prises sympas.
					</Txt>
					<Txt pt={2}>
            Si les photos de cette galerie vous intéressent, contactez moi via
            la page contact !
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
				<GalleryDisplay cat="japan" lang="fr" />
			</ContentWrapper>
		</GalleryWrapper>
		<GalleryWrapper
			bgImage="/illustrations/plus.svg"
			bgColor="#400000"
			zIndex={3}
		>
			<ContentWrapper>
				<GalleryDisplay cat="macro" lang="fr" />
			</ContentWrapper>
		</GalleryWrapper>
		<GalleryWrapper
			bgImage="/illustrations/squares.svg"
			bgColor="#787878"
			zIndex={2}
		>
			<ContentWrapper>
				<GalleryDisplay cat="everythingelse" lang="fr" />
			</ContentWrapper>
		</GalleryWrapper>
		<ContentWrapper />
	</LayoutFr>
);
