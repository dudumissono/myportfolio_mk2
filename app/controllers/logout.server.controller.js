/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 20, 2022
 */

exports.performLogout = function (req, res, next) {
    // req.logout();
    // res.redirect('/');
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}