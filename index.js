// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please write a description for your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please write the installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add details on how to use the project.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please add guidelines for contributing by other developers for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write test instructions for your project.'
    },
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Would you like to include a license in your README?'
    },
    {
        type: 'list',
        choices: ['MIT', 'GPL v3', 'ISC'],
        default: '',
        name: 'license',
        message: 'Please select one of the following licenses: ',
        when: ({licenseConfirm}) => {
            if (licenseConfirm) {
                return true;
            }
            else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        else {
            console.log('File created!');
        }
    })
}

// Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(file => {
        return writeToFile('./README.md', file);
    });
