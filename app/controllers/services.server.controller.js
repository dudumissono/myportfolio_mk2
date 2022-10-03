exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('services', {
        title: 'Hello Mr. Wick',
        description: 'Mr. Anderson'
    })
};