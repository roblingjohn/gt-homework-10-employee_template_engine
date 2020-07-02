// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// ✕ Can set office number via constructor argument (2ms)
// ✕ getRole() should return "Manager"
// ✕ Can get office number via getOffice()

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
        this.getOfficeNumber = function(){
            return this.officeNumber;
        }
    }
    
}

module.exports = Manager;