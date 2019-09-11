exports.Player = class Player {
    constructor(tid, name, dob, location, awards, injury, imgURL) {
        this.tid = tid;
        this.name = name;
        this.imgURL = imgURL;
        this.dob = dob;
        this.location = location;
        this.awards = awards;
        this.injury = injury;
    }
}