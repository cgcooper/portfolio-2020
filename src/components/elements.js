import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export function Subheading({ children }) {
	return (
			<h3 
				css={css`
						padding-top: ${rhythm(1)};
						color: #394975;
					`}
			>
				{children}
			</h3>
		)
}

export function Embed(props) {
  return (<div>
	  	<p><strong>Embedded Content:</strong></p>
	  	{props.embedLink}
  	</div>)
}

export function Link(props) {
	return (<div>
			<p><strong>Content Link: </strong>
				<a href={props.linkURL} target="_blank" rel="noreferrer">Click Here (Will Open New Tab)</a>
			</p>
	</div>)
}

export function Checklist(props) {
	return (<div>
			<p><strong>Digital Media Checklist for This Resource: </strong>
				<a href={props.checklistURL} target="_blank" rel="noreferrer">Click Here (Will Open New Tab)</a>
			</p>
	</div>)
}