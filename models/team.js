exports.Team = class Team {
    constructor(tid, name, abbrev, region, pop, strategy, stadiumCapacity, imgURL) {
        this.tid = tid;
        this.name = name;
        this.abbrev = abbrev;
        this.region = region;
        this.pop = pop;
        this.strategy = strategy;
        this.stadiumCapacity = stadiumCapacity;
        this.imgURL = imgURL;
    }
}