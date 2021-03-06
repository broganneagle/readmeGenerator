const generateMarkdown = require("./utils/generateMarkdown");
var inquirer = require("inquirer");
const fs = require("fs");

//inquirer questions
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your project Title?",
        name: "title",
        default: "Generate a README.md file "
    },

    {
        type: "input",
        message: "What is your repo called?",
        name: "repo",
        default:"HW9"

    },

    {
        type: "input",
        message: "How do you describe your Project?.",
        name: "description",
        default: "READEME homework assignment"

    },

    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
        default: "Step 1: Run npm install and Step 2: Run node index.js"
    },

    {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage",
        default: " "

    },

    {
        type: "input",
        message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space.)",
        name: "contributors",
        default: " "
    },

    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "test",
        default : " "
    }

];


function init() {
    inquirer.prompt(questions).then(answers => {
        fs.appendFileSync("README.md", ("This was developed by an account with the usersame: " + response.username + '\n') + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", ("The title of this project is " + response.title + '\n') + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", ("#" + response.repo) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", (response.description) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", (response.install) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", (response.usage) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", (response.contributors) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        fs.appendFileSync("README.md", (response.test) + '\n', function(err){
            if (err){
                console.log(err);
            } else {
                console.log("true");
            }
        })

        
            console.log(answers)
                .then(response => {
                    console.log(response);
                    fs.writeFile("README.md", generateMarkdown(answers), function (err) {
                        if (err) {
                            throw err;
                        } else{
                            console.log("true");
                        }})
                })
             })

        }
init();