import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "Static/thumbnail/thumbnail.png";
import {
	address,
	contact,
	defaultDescription,
	defaultTitle,
	foundingDate,
	legalName,
	logo,
	social,
	socialLinks,
	url
} from "Data";

export const SEO = ({
											title = defaultTitle,
											description = defaultDescription,
											location = ""
										}) => {
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "inquiry"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}",
			"${socialLinks.facebook}
		]
  	}`;

	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta name="description" content={description} />
			<meta name="image" content={Thumbnail} />

			<meta property="og:url" content={`${url}${location}/?ref=zifan.fr`} />
			<meta property="og:type" content="blog" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Thumbnail} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={Thumbnail} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{title}</title>
			<html lang="fr" dir="ltr" />
		</Helmet>
	);
};
