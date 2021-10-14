const generateTeam = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <i class="fas fa-mug-hot"></i>
                Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <i class="fas fa-mug-hot"></i>
                Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}"</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <i class="fas fa-mug-hot"></i>
                Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}"</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            generateManager(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }

    }
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team</title>
</head>
<body>
    <header class="bg-dark">
        <h1>My Team</h1>
    </header>
    <Main>
        ${generateTeam(team)}
    </Main>
</body>
</html>
    `;
}