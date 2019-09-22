const path = require('path');
const config = require('./src/data/config');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		languages: {
			langs: config.langs,
			defaultLangKey: config.defaultLangKey,
		},
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-netlify',
		'gatsby-plugin-offline',
		'gatsby-transformer-yaml',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
							showCaptions: true,
							backgroundColor: 'transparent'
						},
					},
					{
						resolve: 'gatsby-remark-emojis',
						options: {
							active: true,
							class: 'emoji-icon',
							size: 64,
							// Add custom styles
							styles: {
								display: 'inline',
								margin: '0',
								'margin-top': '1px',
								position: 'relative',
								top: '5px',
								width: '24px',
							},
						},
					},
					`gatsby-remark-native-lazy-load`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: path.join(__dirname, 'src', 'assets'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: path.join(__dirname, 'src', 'pages', 'blog'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'projects',
				path: path.join(__dirname, 'src','pages', 'projects'),
			},
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Arvo',
						variants: ['400', '700']
					},
					{
						family: 'Cabin',
						variants: ['400', '700']
					},
					{
						family: 'Montserrat',
						variants: ['400','700']
					}
				]
			},
		},
		{
			resolve: 'gatsby-plugin-i18n',
			options: {
				useLangKeyLayout: true,
				langKeyForNull: 'any',
				langKeyDefault: config.defaultLangKey,
				prefixDefault: true,
				markdownRemark: {
					postPage: 'src/templates/project-post.jsx',
					query: `
					{
						allMarkdownRemark {
							edges {
								node {
									fields {
										slug
										langKey
									}
								}
							}
						}
					}
					`,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './static/favicon/favicon-512.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Themes: path.resolve(__dirname, 'src/themes'),
					Utils: path.resolve(__dirname, 'src/utils'),
					Common: path.resolve(__dirname, 'src/components/common'),
					Layout: path.resolve(__dirname, 'src/components/common/Layout'),
					Static: path.resolve(__dirname, 'static'),
					Assets: path.resolve(__dirname, 'src/assets'),
					Theme: path.resolve(__dirname, 'src/components/theme'),
					Data: path.resolve(__dirname, 'src/data/config'),
					I18n: path.resolve(__dirname, 'src/i18n'),
				},
			},
		},
	],
};
