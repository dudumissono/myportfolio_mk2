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
        description: 'Hey, my name is Eduardo and I’m from Brazil. I’m a former audio engineer and I used to work as a HOF engineer in live concerts and as a recording engineer in studios. For the last six years, I’ve worked as an audio production manager and this experience was incredible as I had the opportunity to lead teams and work directly with clients. I decided to change my career after I was introduced to programming and I realize that programming is challenging and fun, and forces you to be creative every time you code.'
    })
};