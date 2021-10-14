const path = require('path');
const fs = require('fs');
const profilesDir = path.resolve(__dirname, './profiles');

const render = employees => {
    const html = [];

html.push(...employees
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => renderManager(manager))
);
html.push(...employees
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => renderEngineer(engineer))
);
html.push(...employees
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => renderIntern(intern))
);
return renderMain(html.join(''));
};

const renderManager = manager => {
    let profile = fs.readFileSync(path.resolve(profilesDir, 'manager.html'), 'utf-8');
    profile = replacePlaceholder(profile, 'name', manager.getName());
    profile = replacePlaceholder(profile, 'role', manager.getRole());
    profile = replacePlaceholder(profile, 'email', manager.getEmail());
    profile = replacePlaceholder(profile, 'id', manager.getId());
    profile = replacePlaceholder(profile, 'officeNumber', manager.getOffice());
    return profile;
};

const renderEngineer = engineer => {
    let profile = fs.readFileSync(path.resolve(profilesDir, 'engineer.html'), 'utf-8');
    profile = replacePlaceholder(profile, 'name', engineer.getName());
    profile = replacePlaceholder(profile, 'role', engineer.getRole());
    profile = replacePlaceholder(profile, 'email', engineer.getEmail());
    profile = replacePlaceholder(profile, 'id', engineer.getId());
    profile = replacePlaceholder(profile, 'github', engineer.getGithub());
    return profile;
};

const renderIntern = intern => {
    let profile = fs.readFileSync(path.resolve(profilesDir, 'intern.html'), 'utf-8');
    profile = replacePlaceholder(profile, 'name', intern.getName());
    profile = replacePlaceholder(profile, 'role', intern.getRole());
    profile = replacePlaceholder(profile, 'email', intern.getEmail());
    profile = replacePlaceholder(profile, 'id', intern.getId());
    profile = replacePlaceholder(profile, 'school', intern.getSchool());
    return profile;
};

const renderMain = html => {
    const profile = fs.readFileSync(path.resolve(profilesDir, 'main.html'), 'utf-8');
    return replacePlaceholder(profile, 'team', html);
};

const replacePlaceholder = (profile, placeholder, value) => {
    const pattern = new RegExp('{{ ' + placeholder + '}}', 'gm');
    return profile.replace(pattern, value);
};

module.exports = render;