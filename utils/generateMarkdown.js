const licenses = [
  {
    name: 'MIT',
    link: 'https://opensource.org/licenses/MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    description: 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s.'
  },
  {
    name: 'ISC',
    link: 'https://opensource.org/licenses/ISC',
    badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
    description: 'The ISC license is a permissive free software license published by the Internet Software Consortium, now called Internet Systems Consortium (ISC).'
  },
  {
    name: 'GPL v3',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    description: 'The GNU General Public License is a free, copyleft license for software and other kinds of works.'
  }
]

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  for (i=0; i < licenses.length; i++) {
    const current = licenses[i];

    if (current.name === license) {
      return `[![License: ${license}](${current.badge})]`
    }
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  for (i=0; i < licenses.length; i++) {
    const current = licenses[i];

    if (current.name === license) {
      return `(${current.link})`;
    }
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return 'There is no license for this project.';
  }
  else {
    for (i=0; i < licenses.length; i++) {
      const current = licenses[i];
  
      if (current.name === license) {
        return `${current.description}
        ${current.link}`;
      }
    }
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, desc, install, usage, contribute, test, license, github, email } = data;
  return `
  # ${title}
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

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

  ## Questions
  If you have any questions, contact me at ${email}. To see other projects I've done, view my GitHub page here: https://github.com/${github}.

  ## License
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
