(() => {
    let anchor = document.getElementById('q1');
    // Função que remove o primeiro elemento filho.
    function cleaner(el) {
        while (el.firstChild) {
            el.firstChild.remove()
        }
    }
    // Criando um array com os times e seus dados.
    let teams = [
        {name: 'Roma', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Atalanta', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Milan', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Fiorentina', points: 0, wins: 0, draws: 0, loses: 0},
    ]
    // Criando a tabela de classificação.
    let standingTableDiv = document.createElement('div');
    let standingTable = document.createElement('table');
    standingTable.className = 'table table-hover';
    // Criando uma variável para inserir os títulos da tabela de classificação em uma linha.
    const standingTableTitles = standingTable.createTHead().insertRow();
    // Inserindo os títulos da tabela de classificação.
    standingTableTitles.insertCell(-1).innerText = 'Nome';
    standingTableTitles.insertCell(-1).innerText = 'Pontos';
    standingTableTitles.insertCell(-1).innerText = 'Vitórias';
    standingTableTitles.insertCell(-1).innerText = 'Empates';
    standingTableTitles.insertCell(-1).innerText = 'Derrotas';
    // Variável que cria o corpo da tabela de classificação.
    let standingTableBody = standingTable.createTBody(teams);
    // Função que tem a tabela de classificação completa.
    function createStandingTable(standingTableBody, teams) {
        cleaner(standingTableBody);
        // "for" que insere na tabela de classificação, os times e seus dados.
        for (team of teams) {
            // Variável que insere uma linha.
            let bodyRow = standingTableBody.insertRow();
            // Inserindo o nome dos times na linha.
            let name = bodyRow.insertCell(-1);
            name.innerText = team.name;
            // Inserindo os pontos dos times na linha.
            let points = bodyRow.insertCell(-1);
            points.innerText = team.points;
            // Inserindo as vitórias dos times na linha.
            let wins = bodyRow.insertCell(-1);
            wins.innerText = team.wins;
            // Inserindo os empates dos times na linha.
            let draws = bodyRow.insertCell(-1);
            draws.innerText = team.draws;
            // Inserindo as derrotas dos times na linha.
            let loses = bodyRow.insertCell(-1);
            loses.innerText = team.loses;
        }
    }
    // Criando a tabela de partidas.
    let matchesTableDiv = document.createElement('div');
    let matchesTable = document.createElement('table');
    matchesTable.className = 'table table-hover';
    // Criando uma variável para inserir os títulos da tabela de partidas em uma linha.
    const matchesTableTitles = matchesTable.createTHead().insertRow();
    // Inserindo os titulos da tabela de partidas.
    matchesTableTitles.insertCell(-1).innerText = 'casa';
    matchesTableTitles.insertCell(-1).innerText = 'vitória time da casa';
    matchesTableTitles.insertCell(-1).innerText = 'empate';
    matchesTableTitles.insertCell(-1).innerText = 'vitória time visitante';
    matchesTableTitles.insertCell(-1).innerText = 'visitante';
    // Array com as partidas.
    let matches = [
        // Rodada 1.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 1, awayName: teams[1].name},
        {homeName: teams[2].name, teamHome: 2, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        // Rodada 2.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 2, awayName: teams[2].name},
        {homeName: teams[1].name, teamHome: 1, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        // Rodada 3.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        {homeName: teams[1].name, teamHome: 1, win: '', draw: '', awayTeamWin: '', teamAway: 2, awayName: teams[2].name},
    ];
    // Variável que cria o corpo da tabela de partidas.
    let matchesTableBody = matchesTable.createTBody(matches);
    // Função que distribui os pontos e vitórias.
    function matchWinnerTeamPoints(matchWinner) {
        matchWinner.points += 3;
        matchWinner.wins ++;
    }
    // Função que distribui as derrotas.
    function matchLoserTeamPoints(matchLoser) {
        matchLoser.loses ++;
    }
    // Função que distribui os pontos e empates.
    function matchDrawPoints(teamHome, teamAway) {
        teamHome.points ++;
        teamAway.points ++;
        teamHome.draws ++;
        teamHome.draws ++;
    }
    // Função que tem a tabela de partidas completa.
    function createMatchesTable(matchesTableBody, matches) {
        cleaner(matchesTableBody);
        // "for" que cria as células das partidas.
        for (let match of matches) {
            // Variável que insere uma linha.
            let bodyRow = matchesTableBody.insertRow();
            // Inserindo o nome do time de casa.
            let homeTeamName = bodyRow.insertCell(-1);
            homeTeamName.innerText = match.homeName;
            // Inserindo as vitória do time da casa na linha.
            let win = bodyRow.insertCell(-1);
            // Inserindo o empate na linha.
            let draw = bodyRow.insertCell(-1);
            // Inserindo a vitória do time visitante.
            let awayTeamWin = bodyRow.insertCell(-1);
            // Inserindo o nome do time visitante.
            let awayTeamName = bodyRow.insertCell();
            awayTeamName.innerText = match.awayName;
            // Alterando a cor da célula, para verde, caso o usuário clique em vitória.
            if (match.win === true) {
                win.className = 'bg-success';
            }
            // Criando o evento do clique na vitória e colocando como "false" as outras opções.
            win.onclick = (e) => {
                match.draw = '';
                match.awayTeamWin = '';
                match.win = !match.win;
                createMatchesTable(matchesTableBody, matches);
                matchWinnerTeamPoints(teams[match.teamHome]);
                matchLoserTeamPoints(teams[match.teamAway]);
                cleaner(createStandingTable(standingTableBody, teams));
            }
            // Alterando a cor da célula, para amarelo, caso o usuário clique em empate.
            if (match.draw === true) {
                draw.className = 'bg-warning';
            }
            // Criando o evento do clique no empate e colocando como "false" as outras opções.
            draw.onclick = (e) => {
                match.win = '';
                match.awayTeamWin = '';
                match.draw = !match.draw;
                createMatchesTable(matchesTableBody, matches);
                matchDrawPoints(teams[match.teamHome], teams[match.teamAway]);
                cleaner(createStandingTable(standingTableBody, teams));
            }
            // Alterando a cor da célula, para azul, caso o usuário clique na vitória do visitante.
            if (match.awayTeamWin === true) {
                awayTeamWin.className = 'bg-primary';
            }
            // Criando o evento do clique em vitória do visitante e colocando como "false" as outras opções.
            awayTeamWin.onclick = (e) => {
                match.win = '';
                match.draw = '';
                match.awayTeamWin = !match.awayTeamWin;
                createMatchesTable(matchesTableBody, matches);
                matchWinnerTeamPoints(teams[match.teamAway]);
                matchLoserTeamPoints(teams[match.teamHome]);
                cleaner(createStandingTable(standingTableBody, teams));
            }
        }
    }
    // Chamando as funçóes.
    createStandingTable(standingTableBody, teams);
    createMatchesTable(matchesTableBody, matches);
    // Tabelas.
    anchor.append(standingTableDiv);
    standingTableDiv.appendChild(standingTable);
    anchor.append(matchesTableDiv);
    matchesTableDiv.appendChild(matchesTable);
})()
