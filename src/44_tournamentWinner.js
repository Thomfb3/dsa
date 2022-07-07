
const tournamentWinner = (games, results) => {
    let bestTeam = 'nobody';
    const scores = {'nobody': 0}

    for (let i = 0; i < games.length; i++) {
        let winner = results[i] === 1 ? games[i][0] : games[i][1]
        let winnerPoints = scores[winner] ? scores[winner] + 3 : 3;
        scores[winner] = winnerPoints;
    };
    
    for (const team in scores) {
        bestTeam = scores[team] > scores[bestTeam] ? team : bestTeam;
    };

    return bestTeam;
};