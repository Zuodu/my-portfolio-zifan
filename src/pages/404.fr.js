import React from "react";
import { SEO } from "Common";
import { LayoutFr } from "Layout";

export default (props) => (
	<LayoutFr location={props.location}>
		<SEO title="404: page non trouvé" location="/404" />
		<h1>PAGE NON TROUVÉ</h1>
		<p>La page n'existe pas... dommage :(</p>
	</LayoutFr>
)
