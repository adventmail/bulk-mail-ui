require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    AM_GA_TRACKING_ID: process.env.AM_GA_TRACKING_ID,
  },
  cssModules: true,
})
