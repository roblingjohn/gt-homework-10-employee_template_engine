// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// ✕ Can set school via constructor (2ms)
// ✕ getRole() should return "Intern" (1ms)
// ✕ Can get school via getSchool()

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
        this.getSchool = function(){
            return this.school;
        }
    }
    
}

module.exports = Intern;