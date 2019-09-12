exports.createTeam = (req, res, next) => {
    res.render('create-team', { title : 'Create Team'});
}

exports.addPlayer = (req, res, next) => {
    res.render('add-player', { title : 'Add Player'})
}