exports.showCreateTeamView = (req, res, next) => {
    res.render('create-team', { title : 'Create Team'});
}

exports.createTeam = (req, res, next) => {
    console.log('Creating team');
    res.redirect('/teams');
}

exports.showCreatePlayerView = (req, res, next) => {
    res.render('add-player', { title : 'Add Player'})
}

exports.createPlayer = (req, res, next) => {
    res.redirect('/players');
}