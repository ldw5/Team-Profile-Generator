const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const path = require('path');
const fs = require('fs');
const render = require('./renderHtml');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const teamPro = []

function employeeQues() {
    inquirer.prompt([
        {
            type:'input',
            message: 'what is the team member name?',
            name: 'answerName'
        }, 
        {
            type:'input',
            message: 'what is their ID number?',
            name: 'answerID'
        }, 
        {
            type:'input',
            message: 'What is their email?',
            name: 'answerEmail'
        }, 
        {
            type:'list',
            message: 'what is their role?',
            name: 'answerRole',
            choices: ['Engineer', 'Intern', 'Manager']
        }, 
    ]).then(function(answers){
        if (answers.answerRole === 'Engineer') {
            engineerQues(answers);
        } else if (answers.answerRole === 'Intern') {
            internQues(answers);
        } else {
            managerQues(answers);
        }
    })
}

function engineerQues(baseAnswers) {
    inquirer.prompt ([
        {
            type:'input',
            message: 'what is their github username?',
            name: 'answerGithub'
        }, 
        {
            type:'confirm',
            message: 'Would you like to add another team member?',
            name: 'answerAdd'
        }, 
    ]).then(function(answers) {
        const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answerRole)
        teamPro.push(newEngineer);
        if (answers.answerAdd === true) {
            employeeQues()
        } else {
            buildTeam();
            console.log('success!')
        }
    })
}

function internQues(baseAnswers) {
    inquirer.prompt ([
        {
            type:'input',
            message: 'what school do they attend?',
            name: 'answerSchool'
        }, 
        {
            type:'confirm',
            message: 'Would you like to add another team member?',
            name: 'answerAdd'
        }, 
    ]).then(function(answers) {
        const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answerRole)
        teamPro.push(newIntern);
        if (answers.answerAdd === true) {
            employeeQues()
        } else {
            buildTeam();
            console.log('success!')
        }
    })
}

function managerQues(baseAnswers) {
    inquirer.prompt ([
        {
            type:'input',
            message: 'what is their office number?',
            name: 'answerOffice'
        }, 
        {
            type:'confirm',
            message: 'Would you like to add another team member?',
            name: 'answerAdd'
        }, 
    ]).then(function(answers) {
        const newManager = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answerRole)
        teamPro.push(newManager);
        if (answers.answerAdd === true) {
            employeeQues()
        } else {
            buildTeam();
            console.log('success!')
        }
    })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamPro), 'utf-8');
}

employeeQues();