// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//    Can set GitHUb account via constructor (2ms)
//    getRole() should return "Engineer"
//    Can get GitHub username via getGithub() (1ms)

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
        this.getGithub = function(){
            return this.github;
        }
    }
    
}

module.exports = Engineer;