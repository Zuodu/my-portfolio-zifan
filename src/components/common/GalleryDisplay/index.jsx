import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Card } from "Common";
import { Heading, Txt, Box } from "rendition";
import { FormattedMessage } from "react-intl";
import { TitleFrame, Wrapper, Grid, Item, Image } from "./styles";
import "./hover.css";

export const GalleryDisplay = ({ cat, lang }) => {
	const {
		allGalleryYaml: { edges }
	} = useStaticQuery(graphql`
      {
          allGalleryYaml {
              edges {
                  node {
											id
                      title
                      fr
                      en
                      category
                      date
                      image {
                          childImageSharp {
                              fluid(maxWidth: 520) {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                  }
              }
          }
      }
  `);
	const array = edges.filter((value) => {
		return value.node.category === cat;
	});
	return (
		<Wrapper>
			<TitleFrame>
				<Box p={3}>
					<Heading.h2 pb={2}>
						{cat}
					</Heading.h2>
				</Box>
			</TitleFrame>
			<Grid>
				{array.map(({ node }) => (
					<Item key={node.id}>
						<div className="content">
							<Image fluid={node.image.childImageSharp.fluid} />
							<div className="content-overlay">
								<div className="content-details fadeIn-bottom">
									<h3 className="content-title">
										{node.title}
									</h3>
									<p className="content-text">
										{lang === 'fr' ? node.fr : node.en}
									</p>
								</div>
							</div>
						</div>
					</Item>
				))}
			</Grid>
		</Wrapper>
	);
};