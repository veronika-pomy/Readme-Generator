// Include packages needed for this application
const fs = require("fs");
const inquirer = require("./node_modules/inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of my project:',
        default: 'New Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of my project:',
        default: 'Coming soon...',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions for my project:',
        default: 'Coming soon...',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use my app:',
        default: 'Coming soon...',
    },
    {
        type: 'input',
        name: 'demo',
        message: 'Link to demo of my app:',
        default: 'https://example.com',
    },
    {
        type: 'input',
        name: 'mockup',
        message: 'Enter path to mockup files starting from current directory:',
        default: 'enter-path-to-files-here',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License used: ',
        choices: [ "Apache License 2.0", 
        "GNU General Public License v3.0", 
        "MIT License", 
        "BSD 2-Clause",
        "Simplified License",
        "BSD 3-Clause \"New\" or \"Revised\" License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "none"],
        default: 'none',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Guidelines on how to contribute to the project:',
        default: 'none',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Instructions on how to run necessary tests: ',
        default: 'none',
    },    
    {
        type: 'input',
        name: 'repo',
        message: 'Name of GitHub repo for my project (with dashes):',
        default: 'enter-your-project-repo-name-here',
    },
    {
        type: 'input',
        name: 'github',
        message: 'My github name (with dashes):',
        default: 'enter-your-github-name-here',
    },
    {
        type: 'input',
        name: 'email',
        message: 'My email:',
        default: 'enter-your-email-here',
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkdown.generateMarkdown(data),(err) =>
     err ? console.error(err) : console.log('Success!'))
};

// A function to initialize app
function init() {
    
    function promptUser () {
    return inquirer.prompt(questions)
    };

    promptUser()
    .then((answers) => writeToFile('README.md', answers))
    .then(() => console.log("Successfully wrote a readme file."))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
 