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

    res.render('contact', {
        title: 'Contact',
        description: 'Please fill out the form and I will return it as soon as possible. If you prefer you can contact me directly. Information below.',
        contactInfo: {
            name: 'Eduardo Missono',
            phone: '(416) 731-4990',
            email: 'missono.eduardo@gmail.com',
            linkedin: 'https://github.com/dudumissono',
            github: 'https://www.linkedin.com/in/eduardomissono/'
        }
    })
};