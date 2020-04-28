// user gives username
// api retrieves email and profile image
// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email
// Refer to template mentioned in readme

const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
];

inquirer.prompt(questions).then(answers => {
    console.log('\nUsername:');
    console.log(JSON.stringify(answers.username));
  });

function writeToFile(fileName, data) {
}

function init() {

}

init();
