function generateMarkdown(data) {
  const mapCreditsArr = data.creditsArr.map((item, index) => {
    const cArr = [];
    if (index % 2 === 0) {
      cArr.push(`* [${item}]`);
    } else if (index % 2 !== 0) {
      cArr.push(`(${item})`);
    }
    return cArr;
  });
  
   
   const creditSectionFn = function makeString () {
    let creditStr = mapCreditsArr.toString();
    let noComma = creditStr.replace(/,/g, "");
    let newLine = noComma.replace(/\)\*/g, ")\n*");
  
    return newLine; 
   } 

   const creditSection = creditSectionFn();

  return `
# ${data.title}

<img src="https://img.shields.io/badge/license-${data.license}-green" alt="License Badge">
<img src="https://img.shields.io/github/repo-size/${data.username}/${data.repo}" alt="Size Badge">


## Description 

${data.description}


## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Contributing](#contributing)
1. [Tests](#tests)
1. [Credits](#credits)
1. [Questions](#questions)


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

## Credits

${creditSection}

## Questions

<img src="${data.picture}" alt="Avatar Image" width="100" height="100">

If you have any questions, please contact me at <a href="mailto:${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
