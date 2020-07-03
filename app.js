const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
const ID = require("./lib/id")


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Ask information about the manager
 inquirer.prompt([
    {
        // name, email, office number
        type: "input",
        message: "Enter manager's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter manager's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter office number:",
        name: "officeNumber"
    }])
    .then(function(response){
        console.log(Manager.name)
        Manager.name = response.name;
        Manager.email = response.email;
        Manager.officeNumber = response.officeNumber;
        Manager.id = ID.number;
        ID.number++;
        employees.push({
            "name": Manager.name, 
            "role": "Manager",
            "email": Manager.email,
            "id": Manager.id,
            "officeNumber": Manager.officeNumber
        })
        console.log(employees);
        // push manager information into employees array
    }).then(function(){
        employeeInfo();
    })
     // Ask information for employee


function employeeInfo(){
         inquirer.prompt([
        {
            // name, email, role

            type: "input",
            message: "Enter employee name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter employee email address?",
            name: "email"
        },
        {
            type: "list",
            message: "Enter employee role:",
            choices: ["Engineer", "Intern"],
            name: "role"
        }
    ]).then(function(response){
        `${response.role}`.name = response.name;
        `${response.role}`.email = response.email;
        // if engineer, ask github
        if (response.role === "Engineer"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your GitHub user name?",
                    name: "github"
                }
            ]).then(function(response){
                Engineer.github = response.github
                employees.push({
                    "name": Engineer.name, 
                    "role": "Engineer",
                    "email": Engineer.email,
                    "id": Engineer.id,
                    "github": Engineer.github
                });
                console.log(employees);

            })
        }
        // if intern, ask school
        else if (response.role === "Intern"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "What school do you attend?",
                    name: "school"
                }
            ]).then(function(response){
                Intern.school = response.school
                employees.push({
                    "name": Intern.name, 
                    "role": "Intern",
                    "email": Intern.email,
                    "id": Intern.id,
                    "school": Intern.school
                });
                console.log(employees);
            })
        }
    }).then(function(){
    })
}
