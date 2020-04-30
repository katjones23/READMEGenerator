function generateMarkdown(data) {
  return `
# ${data.title}


<img src="https://img.shields.io/badge/license-${data.license}-green" alt="License Badge">
<img src="https://img.shields.io/github/repo-size/${data.username}/${data.repo}" alt="Size Badge">


## Description 

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage 

${data.usage}


## License

Licensed under the ${data.license} license.


## Contributing

${data.contributing}


## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

<img src="${data.picture}" alt="Avatar Image">

If you have any questions, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
