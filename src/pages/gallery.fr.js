import React from 'react';
import { SEO } from 'Common';
import { LayoutFr } from 'Layout';
import { MainGalleryFr } from "Components/gallery/MainGalleryFr";

// Images from svgbackgrounds.com and heropatterns.com
export default props => (
	<LayoutFr location={props.location}>
		<SEO title="Galerie photos" location="/fr/gallery" />
		<MainGalleryFr />
	</LayoutFr>
);
