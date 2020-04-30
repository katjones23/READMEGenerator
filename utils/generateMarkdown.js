function generateMarkdown(data) {
  return `
# ${data.title}


<img src="https://img.shields.io/badge/license-${data.badge}-green" alt="License Badge">
<img src="https://img.shields.io/github/repo-size/${data.username}/${data.repo}" alt="Size Badge">


## Description 

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}


## Usage 

${data.usage}


## Credits

[${data.collabName}](${data.collabLink})

${data.assets}


## License

Licensed under the ${data.license} license.


## Contributing

${data.contributing}


## Tests

${data.tests}.


## Questions

<img src="${data.image}" alt="Avatar Image">

If you have any questions, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
