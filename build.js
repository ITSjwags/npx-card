'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Text + chalk definitions
const data = {
  name: chalk.white('            Jonathan Wagoner'),
  handle: chalk.white('itsjwags'),
  work: chalk.cyan('Senior UI Engineer at Happy Money'),
  twitter: chalk.dim.white('https://twitter.com/') + chalk.blue('itsjwags'),
  npm: chalk.dim.white('https://npmjs.com/') + chalk.blue('~itsjwags'),
  github: chalk.dim.white('https://github.com/') + chalk.blue('itsjwags'),
  linkedin: chalk.dim.white('https://linkedin.com/in/') + chalk.blue('jonathanwagoner'),
  web: chalk.dim.white('https://') + chalk.blue('itsjwags.com'),
  npx: chalk.magenta('npx') + ' ' + chalk.magenta('itsjwags'),
  labelWork: chalk.dim.white('     Work:'),
  labelTwitter: chalk.dim.white('  Twitter:'),
  labelnpm: chalk.dim.white('      npm:'),
  labelGitHub: chalk.dim.white('   GitHub:'),
  labelLinkedIn: chalk.dim.white(' LinkedIn:'),
  labelWeb: chalk.dim.white('      Web:'),
  labelCard: chalk.dim.white('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ~ ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))
