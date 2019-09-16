const path = require('path')
const config = require('./data/config')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		languages: {
			langs: config.langs,
			defaultLangKey: config.defaultLangKey
		},
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		/* {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: '${__dirname}/src/assets',
      },
    }, */
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-netlify',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Arvo:400,700', 'Cabin:400,700']
				}
			}
		},
		{
			resolve: 'gatsby-plugin-i18n',
			options: {
				useLangKeyLayout: true,
				langKeyForNull: 'any',
				langKeyDefault: config.defaultLangKey,
				prefixDefault: true,
			}
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
				},
				fetchOptions: {},
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
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Themes: path.resolve(__dirname, 'src/themes'),
					Utils: path.resolve(__dirname, 'src/utils'),
					Common: path.resolve(__dirname, 'src/components/common'),
					Layout: path.resolve(__dirname, 'src/components/common/Layout'),
					Static: path.resolve(__dirname, 'static/'),
					Theme: path.resolve(__dirname, 'src/components/theme'),
					Data: path.resolve(__dirname, 'data/config'),
					I18n: path.resolve(__dirname, 'src/i18n')
				},
			},
		}
	],
}
