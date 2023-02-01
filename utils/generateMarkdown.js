// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseCheck = license.license;
  let writeBadge;

  switch (licenseCheck) {
    case 'Apache License 2.0':
      writeBadge =`https://img.shields.io/badge/license-Apache.v2-blue?style=for-the-badge`;
      break;
    case 'GNU General Public License v3.0':
      writeBadge =`https://img.shields.io/badge/license-GNU.Gen.v3-blue?style=for-the-badge`;
      break;
    case 'MIT License':
      writeBadge =`https://img.shields.io/badge/license-MIT-blue?style=for-the-badge`;
      break;
    case 'BSD 2-Clause':
      writeBadge =`https://img.shields.io/badge/license-BSD.2.Clause-blue?style=for-the-badge`;
      break;
    case 'Simplified License':
      writeBadge =`https://img.shields.io/badge/license-Simplified-blue?style=for-the-badge`;
      break;
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
      writeBadge =`https://img.shields.io/badge/license-BSD.3.Clause.New-blue?style=for-the-badge`;
      break;
    case 'Boost Software License 1.0':
      writeBadge =`https://img.shields.io/badge/license-Boost-blue?style=for-the-badge`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      writeBadge =`https://img.shields.io/badge/license-CC0.v1-blue?style=for-the-badge`;
      break;
    case 'Eclipse Public License 2.0':
      writeBadge =`https://img.shields.io/badge/license-Eclipse.v2-blue?style=for-the-badge`;
      break;
    case 'GNU Affero General Public License v3.0':
      writeBadge =`https://img.shields.io/badge/license-GNU.Affero.v3-blue?style=for-the-badge`;
      break;
     case 'GNU General Public License v2.0':
      writeBadge =`https://img.shields.io/badge/license-GNU.Gen.v2-blue?style=for-the-badge`;
      break;
    case 'GNU Lesser General Public License v2.1':
      writeBadge =`https://img.shields.io/badge/license-GNU.Lesser.v2.1-blue?style=for-the-badge`;
      break;
    case 'Mozilla Public License 2.0':
      writeBadge =`https://img.shields.io/badge/license-MPL.v2-blue?style=for-the-badge`;
    break;
    case 'The Unlicense':
      writeBadge =`https://img.shields.io/badge/license-Unlicense-blue?style=for-the-badge`;
    break;
    case 'none': 
      writeBadge = '';
      break;
    default:
      writeBadge = '';
  };
  return writeBadge;
};

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkCheck = license.license;
  let writeLink;
  if (licenseLinkCheck === "none") {
    writeLink = '';
  } else {
    writeLink = `https://github.com/${license.github}/${license.repo}/blob/main/LICENSE`;
  }
  return writeLink;
};

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSectionCheck = license.license;
    if (licenseSectionCheck === "none") {
      return `` ;
    } else {
     return `Distributed under the ${license.license}. See "LICENSE.txt" for more information.`
    }
};

// A function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

<!-- License Badge -->
[![License][license-shield]][license-url]

## Description

${data.description}

---

## Table of Contents

  <ul>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
        <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#mockup">Mockup</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
    <li>
        <a href="#contributing">Contributing</a>
    </li>
    <li>
        <a href="#tests">Tests</a>
    </li>
    <li>
        <a href="#questions">Questions</a>
    </li>
  </ul>

---

## Installation

Instructions on how ot install the application: ${data.installation}

---

## Usage

Instructions on how to use the application: ${data.usage}

[Product Demo](${data.demo})

---
## Mockup

![Mockup](${data.mockup})

---

## License

${renderLicenseSection(data)}

---

## Contributing

Please follow these guidelines when contributing to the project: ${data.contributing}

---

## Tests

Instructions on how to test the software: ${data.tests}

---

## Questions

If you have any questions regarding this project, please don't hesitate to contact me using my email address: ${data.email}. You can find my project repositories here: [${data.github}](https://github.com/${data.github}?tab=repositories).

---

<!-- License and Demos -->
[license-shield]: ${renderLicenseBadge(data)}
[license-url]: ${renderLicenseLink(data)}
[product-demo]: ${data.demo}
`
};

module.exports = {
  generateMarkdown
};
