// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseCheck = license.license;
  let writeBadge;
  if (licenseCheck === "none") {
    writeBadge = ''
  } else {
    writeBadge = `https://img.shields.io/github/license/${license.github}/readme-generator?style=for-the-badge`;
  }
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

## Description

${data.description}

<!-- License Badge -->
[![License][license-shield]][license-url]

---

## Table of Contents

  <ol>
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
  </ol>

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

If you have any questions regarding this project, please don't hesitate to contact me using my email address: ${data.email}. You can find my project repositories here: [GitHub Repos](https://github.com/${data.github}?tab=repositories).

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
