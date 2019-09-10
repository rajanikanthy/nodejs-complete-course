const express = require('express');

const router = express.Router();


const teams = [
    {
      "teamId": 1610612737,
      "abbreviation": "ATL",
      "teamName": "Atlanta Hawks",
      "simpleName": "Hawks",
      "location": "Atlanta",
      "description": "The Atlanta Hawks are an American professional basketball team based in Atlanta, Georgia. The Hawks compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The team plays its home games at State Farm Arena.The team's origins can be traced to the establishment of the Buffalo Bisons in 1946 in Buffalo, New York, a member of the National Basketball League (NBL) owned by Ben Kerner and Leo Ferris.[9] After 38 days in Buffalo, the team moved to Moline, Illinois, where they were renamed the Tri-Cities Blackhawks.[10] In 1949, they joined the NBA as part of the merger between the NBL and the Basketball Association of America (BAA), and briefly had Red Auerbach as coach. In 1951, Kerner moved the team to Milwaukee, where they changed their name to the Hawks. Kerner and the team moved again in 1955 to St. Louis, where they won their only NBA Championship in 1958 and qualified to play in the NBA Finals in 1957, 1960 and 1961. The Hawks played the Boston Celtics in all four of their trips to the NBA Finals. The St. Louis Hawks moved to Atlanta in 1968, when Kerner sold the franchise to Thomas Cousins and former Georgia Governor Carl Sanders.[11][12]"
    },
    {
      "teamId": 1610612738,
      "abbreviation": "BOS",
      "teamName": "Boston Celtics",
      "simpleName": "Celtics",
      "location": "Boston",
      "description": "The Boston Celtics are an American professional basketball team based in Boston, Massachusetts. The Celtics compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. Founded in 1946 as one of the league's original eight teams, the team play their home games at TD Garden, which they share with the National Hockey League (NHL)'s Boston Bruins. The Celtics are one of the most successful teams in NBA history; the franchise has won the most championships in the NBA with 17, accounting for 23.9 percent of all NBA championships since the league's founding.[8][9] The Celtics have a notable rivalry with the Los Angeles Lakers, who have won 16 NBA championships, second behind the Celtics. The rivalry was heavily highlighted throughout the 1960s and 1980s. The franchise has played the Lakers a record 12 times in the NBA Finals (including their most recent appearances in 2008 and 2010), of which the Celtics have won nine.[10] Four Celtics players (Bob Cousy, Bill Russell, Dave Cowens and Larry Bird) have won the NBA Most Valuable Player Award for an NBA record total of 10 MVP awards.[11] Both the nickname \"Celtics\" and their mascot \"Lucky the Leprechaun\" are a nod to Boston's historically large Irish population.[12]"
    },
    {
      "teamId": 1610612751,
      "abbreviation": "BKN",
      "teamName": "Brooklyn Nets",
      "simpleName": "Nets",
      "location": "Brooklyn",
      "description": "The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn. The Nets compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Barclays Center. They are one of two NBA teams located in New York City; the other is the New York Knicks. The team was established in 1967 as a charter franchise of the NBA's rival league, the American Basketball Association (ABA). They played in New Jersey as the New Jersey Americans during their first season, before moving to Long Island in 1968 and changing their name to the New York Nets. During this time, the Nets won two ABA championships (in 1974 and 1976). In 1976, the ABA merged with the NBA, and the Nets were absorbed into the NBA along with three other ABA teams (the San Antonio Spurs, Indiana Pacers, and Denver Nuggets, all of whom remain in the league today)."
    },
    {
      "teamId": 1610612766,
      "abbreviation": "CHA",
      "teamName": "Charlotte Hornets",
      "simpleName": "Hornets",
      "location": "Charlotte"
    },
    {
      "teamId": 1610612741,
      "abbreviation": "CHI",
      "teamName": "Chicago Bulls",
      "simpleName": "Bulls",
      "location": "Chicago"
    },
    {
      "teamId": 1610612739,
      "abbreviation": "CLE",
      "teamName": "Cleveland Cavaliers",
      "simpleName": "Cavaliers",
      "location": "Cleveland"
    },
    {
      "teamId": 1610612742,
      "abbreviation": "DAL",
      "teamName": "Dallas Mavericks",
      "simpleName": "Mavericks",
      "location": "Dallas"
    },
    {
      "teamId": 1610612743,
      "abbreviation": "DEN",
      "teamName": "Denver Nuggets",
      "simpleName": "Nuggets",
      "location": "Denver"
    },
    {
      "teamId": 1610612765,
      "abbreviation": "DET",
      "teamName": "Detroit Pistons",
      "simpleName": "Pistons",
      "location": "Detroit"
    },
    {
      "teamId": 1610612744,
      "abbreviation": "GSW",
      "teamName": "Golden State Warriors",
      "simpleName": "Warriors",
      "location": "Golden State"
    },
    {
      "teamId": 1610612745,
      "abbreviation": "HOU",
      "teamName": "Houston Rockets",
      "simpleName": "Rockets",
      "location": "Houston"
    },
    {
      "teamId": 1610612754,
      "abbreviation": "IND",
      "teamName": "Indiana Pacers",
      "simpleName": "Pacers",
      "location": "Indiana"
    },
    {
      "teamId": 1610612746,
      "abbreviation": "LAC",
      "teamName": "Los Angeles Clippers",
      "simpleName": "Clippers",
      "location": "Los Angeles"
    },
    {
      "teamId": 1610612747,
      "abbreviation": "LAL",
      "teamName": "Los Angeles Lakers",
      "simpleName": "Lakers",
      "location": "Los Angeles"
    },
    {
      "teamId": 1610612763,
      "abbreviation": "MEM",
      "teamName": "Memphis Grizzlies",
      "simpleName": "Grizzlies",
      "location": "Memphis"
    },
    {
      "teamId": 1610612748,
      "abbreviation": "MIA",
      "teamName": "Miami Heat",
      "simpleName": "Heat",
      "location": "Miami"
    },
    {
      "teamId": 1610612749,
      "abbreviation": "MIL",
      "teamName": "Milwaukee Bucks",
      "simpleName": "Bucks",
      "location": "Milwaukee"
    },
    {
      "teamId": 1610612750,
      "abbreviation": "MIN",
      "teamName": "Minnesota Timberwolves",
      "simpleName": "Timberwolves",
      "location": "Minnesota"
    },
    {
      "teamId": 1610612740,
      "abbreviation": "NOP",
      "teamName": "New Orleans Pelicans",
      "simpleName": "Pelicans",
      "location": "New Orleans"
    },
    {
      "teamId": 1610612752,
      "abbreviation": "NYK",
      "teamName": "New York Knicks",
      "simpleName": "Knicks",
      "location": "New York"
    },
    {
      "teamId": 1610612760,
      "abbreviation": "OKC",
      "teamName": "Oklahoma City Thunder",
      "simpleName": "Thunder",
      "location": "Oklahoma City"
    },
    {
      "teamId": 1610612753,
      "abbreviation": "ORL",
      "teamName": "Orlando Magic",
      "simpleName": "Magic",
      "location": "Orlando"
    },
    {
      "teamId": 1610612755,
      "abbreviation": "PHI",
      "teamName": "Philadelphia 76ers",
      "simpleName": "76ers",
      "location": "Philadelphia"
    },
    {
      "teamId": 1610612756,
      "abbreviation": "PHX",
      "teamName": "Phoenix Suns",
      "simpleName": "Suns",
      "location": "Phoenix"
    },
    {
      "teamId": 1610612757,
      "abbreviation": "POR",
      "teamName": "Portland Trail Blazers",
      "simpleName": "Trail Blazers",
      "location": "Portland"
    },
    {
      "teamId": 1610612758,
      "abbreviation": "SAC",
      "teamName": "Sacramento Kings",
      "simpleName": "Kings",
      "location": "Sacramento"
    },
    {
      "teamId": 1610612759,
      "abbreviation": "SAS",
      "teamName": "San Antonio Spurs",
      "simpleName": "Spurs",
      "location": "San Antonio"
    },
    {
      "teamId": 1610612761,
      "abbreviation": "TOR",
      "teamName": "Toronto Raptors",
      "simpleName": "Raptors",
      "location": "Toronto"
    },
    {
      "teamId": 1610612762,
      "abbreviation": "UTA",
      "teamName": "Utah Jazz",
      "simpleName": "Jazz",
      "location": "Utah"
    },
    {
      "teamId": 1610612764,
      "abbreviation": "WAS",
      "teamName": "Washington Wizards",
      "simpleName": "Wizards",
      "location": "Washington"
    }
  ]

router.get('/', (req, res, next) =>  {
    res.render('teams', { title: 'Teams', teams: teams});
})

module.exports = router;