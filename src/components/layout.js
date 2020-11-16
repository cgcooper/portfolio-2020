import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
	//Perform the data query
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	//Return layout structure
	return (

	    <div
	      css={css`
	        margin: 0 auto;
	        max-width: 800px;
	        padding: ${rhythm(2)};
	        padding-top: ${rhythm(1)};
	      `}
	    >
			<Link to={'/'}>
				<h1
					css={css`
						display: inline-block;
						font-style: normal;
						color: #545454;
					`}
				>
					{data.site.siteMetadata.title}
				</h1>
			</Link>

			<Link
				to={'/ldt300x/'}
				css={css`
					float: right;
					font-size: 110%;
					padding-top:5px;
				`}
			>
				LDT300x
			</Link>
			<hr />
			{children}
		</div>
	)
}