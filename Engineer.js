const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email,);
        this.github = github;
    }
    getGithub() {
        return this.github
    };
    getId() {
        return this.id
    };
    getRole() {
        return 'Engineer'
    };
}

module.exports = Engineer;