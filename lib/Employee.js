// TODO: Write code to define and export the Employee class

//  Can instantiate Employee instance (2ms)
//  Can set name via constructor arguments (1ms)
//  Can set id via constructor argument
//  Can set email via constructor argument
//  Can get name via getName() (1ms)
// ✕ Can get id via getId()
// ✕ Can get email via getEmail()
// ✕ getRole() should return "Employee" (1ms)

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        this.getName = function(){
            return this.name;
        }
        this.getId = function(){
            return this.id;
        }
        this.getEmail = function(){
            return this.email;
        }
        this.getRole = function(){
            return this.role
        }
    }
}

module.exports = Employee;