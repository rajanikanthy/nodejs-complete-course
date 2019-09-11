exports.Player = class Player {
    constructor(tid, name, dob, location, imgURL) {
        this.tid = tid;
        this.name = name;
        this.imgURL = imgURL;
        this.dob = dob;
        this.location = location;
    }
}