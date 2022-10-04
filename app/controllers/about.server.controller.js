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

    res.render('about', {
        title: 'About Me',
        description: 'Hey, my name is Eduardo and I’m from Brazil. I’m a former audio engineer and I used to work from live shows to studio recordings. For the last six years, I’ve worked as an audio production manager and this experience was incredible as I had the opportunity to lead teams and work directly with clients.'
    })
};