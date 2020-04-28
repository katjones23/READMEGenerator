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
const api = require('./utils/api.js')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
];

inquirer.prompt(questions).then(answers => {
    async function run() {
        let { email, picture } = await api(answers.username);
        console.log(email, picture)
    }

    run();
});

function writeToFile(fileName, data) {
}

function init() {

}

init();
