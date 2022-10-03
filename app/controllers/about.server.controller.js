exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('about', {
        title: 'Elvis is in the building',
        description: 'Burning love'
    })
};