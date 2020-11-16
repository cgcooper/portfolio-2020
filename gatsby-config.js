/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 	`Christopher Cooper`,
	},
	  /* Your site config here */
	  plugins: [
	  	`gatsby-plugin-react-helmet`,
	  	`gatsby-plugin-emotion`,
	  	{
	  		resolve: `gatsby-plugin-typography`,
	  		options: {
	  			pathToConfigModule: `src/utils/typography`,
	  		},
	  	},
	],
}
