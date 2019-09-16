import React, { useState, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { useTheme, Provider } from 'rendition'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { StaticQuery, graphql } from 'gatsby'
import { Footer, Header, Loading } from 'Common'
import lightTheme from 'Themes/light'
import darkTheme from 'Themes/dark'
import { GlobalStyle } from './styles'
import light from '../../../themes/light'

export const BaseLayout = ({ children, location, i18nMessages }) => {
	const storedDarkMode = localStorage.getItem('darkMode')
	const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true')
	const theme = useTheme()
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
				const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
				const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({
					...item,
					link: item.link.replace(`/${defaultLangKey}/`, '/'),
				}))
				console.log(`base/ isDarkmode : ${isDarkMode}`)
				return (
					<IntlProvider locale={langKey} messages={i18nMessages}>
						<Suspense fallback={<Loading />}>
							<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
								<Provider theme={isDarkMode ? darkTheme : lightTheme}>
									<GlobalStyle />
									<Header getDarkMode={isDarkMode} setDarkMode={setIsDarkMode} />
									{children}
									<Footer />
								</Provider>
							</ThemeProvider>

						</Suspense>
					</IntlProvider>
				)
			}}
		/>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.array,
}
