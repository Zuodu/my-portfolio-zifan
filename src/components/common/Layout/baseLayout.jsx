import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { StaticQuery, graphql } from 'gatsby'
import { Footer } from 'Theme'
import { Global } from './styles'
import './fonts.css'


export const BaseLayout = ({ children, location, i18nMessages }) => {
	console.log(children);
	return (
		<StaticQuery
			query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
			render={data => {
				const url = location.pathname;
				const { langs, defaultLangKey } = data.site.siteMetadata.languages;
				const langKey = getCurrentLangKey(langs, defaultLangKey, url);
				const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
				const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({
					...item,
					link: item.link.replace(`/${defaultLangKey}/`, '/'),
				}));
				return (
					<IntlProvider locale={langKey} messages={i18nMessages}>
						<Global />
						{ children }
						<Footer />
					</IntlProvider>
				)
			}}
		/>
	);
};

BaseLayout.propTypes = {
	children: PropTypes.array,
}
