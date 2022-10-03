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
        description: 'Mr. Anderson'
    })
};