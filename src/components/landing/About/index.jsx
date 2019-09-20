import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Container } from "Common";
import configData from "Data";
import { Box, Button, Heading, Txt } from "rendition";
import { FormattedMessage } from "react-intl";
import { AboutWrapper, Details, Thumbnail, Wrapper } from "./styles";
import "../Intro/iconScroll.css";


export const About = ({ lang }) => (
	<StaticQuery
		query={graphql`
    query {
        imagePortrait: file(relativePath: {eq: "photos/portrait.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
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
							<Img fluid={data.imagePortrait.childImageSharp.fluid} title="Myself in Shanghai" alt="My portrait" />
						</Box>
					</Thumbnail>
					<Details>
						<Heading.h3 mb={3}><FormattedMessage id="welcome" /></Heading.h3>
						<Txt fontSize={2} m={1}><FormattedMessage id="thanks" /></Txt>
						<Txt fontSize={2} m={1}><FormattedMessage id="about1" /></Txt>
						<Txt fontSize={2} m={1}><FormattedMessage id="about2" /></Txt>
						<Txt fontSize={2} m={1}><FormattedMessage id="about3" /></Txt>
						<Txt fontSize={2} m={1}><FormattedMessage id="about4" /></Txt>
						<Button info href={`/${lang}/resume/${configData.resumeFileName}`} mt={3}>
							<FormattedMessage id="seeResume" />
						</Button>
						{/* todo: display when page is ready */}
						<Button info href={`${lang}/resume`} mt={3} style={{ display: "none" }}>
							<FormattedMessage id="seeResume" />
						</Button>
					</Details>
				</AboutWrapper>
			</Wrapper>
		)}
	/>
);
