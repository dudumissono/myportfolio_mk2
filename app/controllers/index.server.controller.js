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

    res.render('index', {
        title: 'Home',
        messageOne: 'Welcome',
        descriptionOne: 'Hey, I’m Eduardo and welcome to my portfolio. I designed this page so you can have the opportunity to know a little more about myself and my work.',
        messageTwo: 'Mission Statement',
        descriptionTwo: 'I want to provide my co-workers, managers, and clients with the best experience in the workplace and results. Start by creating an environment for open communication, always trying to learn something new, and “always looking at the bright side of life” (Monty Python, 1979).'
    })
};