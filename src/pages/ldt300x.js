import React from "react"
import Layout from "../components/layout"
import {Subheading} from "../components/elements"
import {Embed} from "../components/elements"
import {Link} from "../components/elements"
import {Checklist} from "../components/elements"
import {showcases} from "../components/data"
import { Helmet } from "react-helmet"

export default function LDT300x({ data }) {
	return (
			<Layout>

				<Helmet>
					<title>LDT300x | Christopher Cooper</title>
				</Helmet>

				<p>
					Below you will find the digital portfolio of e-learning materials that serves as my "Signature Assessment"
					for <a href="https://www.edx.org/course/instructional-design-digital-media-new-tools-and-2">LDT300x</a>, 
						an online course offered through <strong>edX</strong>.
        		</p>

        	{/* Jump Menu */}
        		<div id="jump">
	        		<Subheading>Jump To:</Subheading>

	    		    <ul>
				      {showcases.map((showcase) =>
				        <li key={showcase.key}>
				          <a href={'#' + showcase.key}>{showcase.title}</a>
				        </li>
				      )}
				      	<li>
				      		<a href="#oer">Two Relevant OERs</a>
			      		</li>
				    </ul>
			    </div>

		    {/* Show individual portfolio items */}

			    {showcases.map((showcase) =>
			    	<div key={showcase.key} id={showcase.key}>
				        <Subheading>
				          {showcase.title}
				        </Subheading>

				        <p><strong>Rationale:</strong> {showcase.copy}</p>

				       	{
				        	showcase.embed && <Embed embedLink={showcase.embed} /> 
				    	}

				       	{
				        	showcase.link1 && <Link linkURL={showcase.link1} /> 
				    	}

				    	{
				        	showcase.link2 && <Checklist checklistURL={showcase.link2} /> 
				    	}

				    	<p><a href="#jump">Back to Top</a></p>
				        
			        </div>

		      	)}

			    <div id="oer">
			      	<Subheading>Two Relevant OERs</Subheading>

			      	<ol>
			      		<li>Produced by the RIAM Teaching and Learning Network, <a href='https://www.youtube.com/watch?v=mlZVQbFW0JA'>"Time Signatures, Bars and Barlines"</a> is a helpful and open educational video that introduces some core concepts in sheet music.</li>
			      		<li>Produced by the North Carolina School of Science and Mathematics, <a href="https://www.oercommons.org/courses/instrumental-music-violin-proper-sitting-position-for-violin">Proper Sitting Position for Violin</a> is a terrific posture resource -- especially for those students who plan to play in an orchestra setting, where they will primarily be seated.</li>
			      	</ol>
			      	<p><a href="#jump">Back to Top</a></p>
		      	</div>
    		</Layout>
		)
}