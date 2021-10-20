const licenses = [
  {
    name: 'MIT',
    link: 'https://opensource.org/licenses/MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
  },
  {
    name: 'ISC',
    link: 'https://opensource.org/licenses/ISC',
    badge: 'https://img.shields.io/badge/License-ISC-blue.svg'
  },
  {
    name: 'GPL v3',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
]

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  for (i=0; i < licenses.length; i++) {
    const current = licenses[i];

    if (current.name === license) {
      return current.badge;
    }
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  for (i=0; i < licenses.length; i++) {
    const current = licenses[i];

    if (current.name === license) {
      return current.link;
    }
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, desc, install, usage, contribute, test, license} = data;
  return `
  # ${title}
  ${renderLicenseSection(license)}

  ## Description
  ${desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Testing](#testing)
  
  ## Installation
  ${install}

  ## Usage
  ${usage}

  ## Contribute
  ${contribute}

  ## Testing
  ${test}
`;
}

module.exports = generateMarkdown;
