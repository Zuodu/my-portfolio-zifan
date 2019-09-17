import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'
import { Container, Button } from 'Common'
import { Box } from 'rendition'
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<StaticQuery
		query={graphql`
    query {
        imagePortrait: file(relativePath: {eq: "photos/portrait.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
	`}
		render={data => (
			<Wrapper id="about">
				<AboutWrapper as={Container}>
					<Thumbnail>
						<Box p={5}>
							<Img fluid={data.imagePortrait.childImageSharp.fluid} title="Myself in Shanghai" />
						</Box>
					</Thumbnail>
					<Details>
						<h1>Hi There!</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry’s standard dummy.
						</p>
						<Button as={AnchorLink} href="#contact">
							Hire me
						</Button>
					</Details>
				</AboutWrapper>
			</Wrapper>
		)}
	/>
)
