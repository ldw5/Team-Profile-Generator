const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    };
    getId() {
        return this.id
    };
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;