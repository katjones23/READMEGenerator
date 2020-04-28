// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// *credits
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email

const inquirer = require('inquirer')
const api = require('./utils/api.js')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license should be used?'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Did you have any collaborators?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should contributors know?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests to run?'
    }
];

inquirer.prompt(questions).then(answers => {
    async function run() {
        let { email, picture } = await api(answers.username);
        console.log(email, picture);
    }

    run();
});

function writeToFile(fileName, data) {
}

function init() {

}

init();
