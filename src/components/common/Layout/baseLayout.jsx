import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Provider, Box } from 'rendition'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { StaticQuery, graphql } from 'gatsby'
import { Footer, Header } from 'Common'
import lightTheme from 'Themes/light'
import darkTheme from 'Themes/dark'
import { GlobalStyle } from './styles'

export const BaseLayout = ({ children, location, i18nMessages }) => {
	let storedDarkMode
	typeof window !== `undefined` ? storedDarkMode = window.localStorage.getItem('darkMode') : storedDarkMode = null
	const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true')
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
				const url = location.pathname
				const { langs, defaultLangKey } = data.site.siteMetadata.languages
				const langKey = getCurrentLangKey(langs, defaultLangKey, url)
				const homeLink = `/${langKey}`
				const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({
					...item,
					link: item.link.replace(/\/$/, ''),
				}))
				return (
					<IntlProvider locale={langKey} messages={i18nMessages}>
						<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
							<Provider theme={isDarkMode ? darkTheme : lightTheme}>
								<GlobalStyle />
								<Box bg="background.main">
									<Header getDarkMode={isDarkMode} setDarkMode={setIsDarkMode} langs={langsMenu} home={homeLink} />
									{children}
									<Footer />
								</Box>
							</Provider>
						</ThemeProvider>
					</IntlProvider>
				)
			}}
		/>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.array || PropTypes.object,
}
