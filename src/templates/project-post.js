import React from 'react'
import en_messages from 'I18n/en'
import fr_messages from 'I18n/fr'
import { BaseLayout } from 'Layout/baseLayout'
import { graphql } from 'gatsby'

export default function Template(props) {
	const { markdownRemark } = props.data // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt } = markdownRemark
	const { langKey } = props.pathContext
	console.log(props)
	return (
		<BaseLayout
			{...props}
			i18nMessages={fr_messages}
		>
			<div className="blog-post">
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</BaseLayout>
	)
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
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`