const inquirer = require('inquirer')
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository\'s name?'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?',
        default: function (answers) {
            return answers.repo
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How shoud users install the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should be used?',
        choices: ['GNU-GPLv3', 'MIT', 'Apache License 2.0', 'ISC']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should contributors know?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How should users run a test?'
    }
];

function init() {
    inquirer.prompt(questions).then(answers => {
        try {
            async function run() {
                let { email, picture } = await api(answers.username);

                switch (answers.license) {
                    case 'GNU-GPLv3':
                        answers.license = 'GNU';
                        break;
                    case 'MIT':
                        answers.license = 'MIT';
                        break;
                    case 'Apache License 2.0':
                        answers.license = 'Apache';
                        break;
                    case 'ISC':
                        answers.license = 'ISC';
                        break;
                };

                const data = {
                    username: answers.username,
                    email,
                    picture,
                    repo: answers.repo,
                    title: answers.projectTitle,
                    description: answers.description,
                    installation: answers.installation,
                    usage: answers.usage,
                    license: answers.license,
                    contributing: answers.contributing,
                    tests: answers.tests
                };

                const markdown = generateMarkdown(data);
                writeToFile(markdown);
            };

            run();
        } catch (err) {
            throw err;
        };
    });
};


function writeToFile(markdown) {
    fs.writeFile("README.md", markdown, function (err) {
        if (err) {
            throw err;
        }
        console.log("Successfully generated README.md.")
    });
};

init();
