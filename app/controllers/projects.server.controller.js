/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('projects', {
        title: 'Projects',
        description: 'As my tech career is just beginning, I decided to list here on tech job and two other projects that I’ve worked on before.',
        projectOne: {
            title: 'Software Development',
            img: '',
            description: 'Part-time internship in Canada. I’m working on a project that was built using low-code tools, but I’m able to exercise programming logic and write some custom code inside the software.'
        },
        projectTwo: {
            img: '',
            description: ''
        },
        references: ''
    })
};