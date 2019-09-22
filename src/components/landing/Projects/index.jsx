import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Card, Container } from "Common";
import { Heading, Tag } from "rendition";
import { FormattedMessage } from "react-intl";
import { Content, Grid, Item, Stats, Wrapper } from "./styles";

export const Projects = ({ hideTitle, lang }) => {
	const {
		allMarkdownRemark: { edges }
	} = useStaticQuery(graphql`
      {
          allMarkdownRemark(filter: {frontmatter: {directory: {eq: "projects"}}}) {
              edges {
                  node {
                      frontmatter {
													order
                          title
                          subtitle
													worktype
                          tags
                      }
                      fields {
                          slug
                          langKey
                      }
                      id
                      excerpt
                  }
              }
          }
      }
	`);
	const array = edges.filter((value) => {
		return value.node.fields.langKey === lang;
	});
	array.sort((a,b) =>  a.node.frontmatter.order - b.node.frontmatter.order);
	return (
		<Wrapper as={Container} id="projects">
			<Heading.h3 mb={3} style={{ display: hideTitle ? "none" : "inherit" }}><FormattedMessage
				id="projects"
			/></Heading.h3>
			<Grid>
				{array.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={node.fields.slug}
					>
						<Card>
							<Content>
								<h4>{node.frontmatter.title}</h4>
								<p>{node.frontmatter.subtitle}</p>
								<small>{node.frontmatter.worktype}</small>
							</Content>
							<Stats>
								{node.frontmatter.tags.map(tag => (
									<Tag mr={1} name={tag} key={tag} />
								))}
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	);
};
