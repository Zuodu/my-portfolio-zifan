import React from 'react';
import { SEO } from 'Common';
import { LayoutEn } from 'Layout';
import { MainGalleryEn } from "Components/gallery/MainGalleryEn";

// Images from svgbackgrounds.com and heropatterns.com
export default props => (
	<LayoutEn location={props.location}>
		<SEO title="Photo Gallery" location="/en/gallery" />
		<MainGalleryEn />
	</LayoutEn>
);
