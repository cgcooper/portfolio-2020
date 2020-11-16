import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Subheading} from "../components/elements"

export default function About({ data }) {
	return (
			<Layout>
				<Subheading>About Page</Subheading>
				<p>This one is under construction!
        		</p>
    		</Layout>
		)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`