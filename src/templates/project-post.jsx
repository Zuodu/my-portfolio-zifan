import React from "react";
import { FormattedMessage } from "react-intl";
import { Container } from "Common";
import Img from "gatsby-image";
import { Heading } from "rendition";
import en_messages from "I18n/en";
import fr_messages from "I18n/fr";
import { BaseLayout } from "Layout/baseLayout";
import { graphql } from "gatsby";
import { ProjectsPageWrapper, PostHead, Description, ContentSection } from "./styles";

const langStrategist = (lang) => {
	switch (lang) {
	case "fr":
		return fr_messages;
	case "en":
		return en_messages;
	default:
		return en_messages;
	}
};

const NonStretchedImage = props => {
	let normalizedProps = props;
	console.log(props.fluid);
	if (props.fluid && props.fluid.presentationWidth) {
		normalizedProps = {
			...props,
			style: {
				...(props.style || {}),
				width: "100%",
				maxWidth: props.fluid.presentationWidth,
				margin: "0 auto"
			}
		};
	}
	return <Img {...normalizedProps} />;
};

export default function Template(props) {
	const { markdownRemark } = props.data; // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt } = markdownRemark;
	const { langKey } = props.pageContext;
	console.log(props);
	return (
		<BaseLayout
			{...props}
			i18nMessages={langStrategist(langKey)}
		>
			<Container>
				<ProjectsPageWrapper className="project-post">
					<PostHead>
						<Heading.h2 py={2}>{frontmatter.title}</Heading.h2>
						<Heading.h3 pb={3}>{frontmatter.subtitle}</Heading.h3>
						<NonStretchedImage fluid={frontmatter.topImage.childImageSharp.fluid} />
						<Description>
							<p><FormattedMessage id="projectType" />:&nbsp;</p>
							<p><FormattedMessage id="projectSkills" />:&nbsp;</p>
							<p><FormattedMessage id="projectLocation" />:&nbsp;</p>
							<p><FormattedMessage id="projectTime" />:&nbsp;</p>
						</Description>
					</PostHead>
					<ContentSection
						className="project-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</ProjectsPageWrapper>
			</Container>
		</BaseLayout>
	);
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(fields: {slug: {eq: $path}}) {
            html
            excerpt
            fields {
                slug
                langKey
            }
            frontmatter {
                date(formatString: "MM/YYYY")
                title
                subtitle
                topImage {
                    childImageSharp {
                        fluid(maxWidth: 590) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                }
            }
        }
    }
`;