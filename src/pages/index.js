import React from "react"
import Layout from "../components/layout"
import {Subheading} from "../components/elements"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
  		<Layout>

        <Helmet>
          <title>Christopher Cooper</title>
        </Helmet>

  			<Subheading>Nice to Meet You!</Subheading>
  			<div>
  				<p>
            I'm Christopher Cooper, a Digital Product Analyst located in Toronto, Ontario. This is an online space for showing off some of the exciting projects I've had the pleasure of being involved with.
          </p>
          <p>
            Please feel free to connect with me on <a href="https://www.linkedin.com/in/cgcooper/">LinkedIn</a>!
          </p>
  			</div>
		</Layout>
  	)
}
