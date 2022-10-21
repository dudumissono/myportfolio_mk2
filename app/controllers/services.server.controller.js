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

    res.render('services', {
        title: 'Services',
        displayName: req.user ? req.user.displayName : "",
        description: '',
        serviceOne: {
            title: 'Back End Development',
            img: '/img/back_end.png',
            alt: 'Back End Development',
            description: 'Develop the server-side part of the application. Create, code, and/or improve server-side applications always aiming for a functional and seamless experience for the end-user.',
            references: 'https://medium.com/backenders-club/how-to-can-become-a-backend-developer-2022-3c39411197c5'
        },
        serviceTwo: {
            title: 'Web Application Development',
            img: '/img/web_application.png',
            alt: 'Web Application',
            description: 'Develop from top to bottom a full-functioning web application. Design, built, test and deploy an application that checks all the client’s requirements.',
            references: 'https://appinventiv.com/blog/ways-web-application-development-changing/'
        },
        serviceThree: {
            title: 'Loading...',
            img: 'https://giphy.com/embed/l3nWhI38IWDofyDrW',
            alt: 'Loading',
            description: 'In time more and more services will be added to this list.',
            references: 'https://giphy.com/gifs/thinking-l3nWhI38IWDofyDrW'
        },
    })
};