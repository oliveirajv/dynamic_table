(() => {
    let anchor = document.getElementById('q1');
    // Function that removes the first child element.
    // Função que remove o primeiro elemento filho.
    function cleaner(el) {
        while (el.firstChild) {
            el.firstChild.remove()
        }
    }
    // Creating an array with the teams and their values.
    // Criando um array com os times e seus dados.
    let teams = [
        {name: 'Roma', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Atalanta', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Milan', points: 0, wins: 0, draws: 0, loses: 0},
        {name: 'Fiorentina', points: 0, wins: 0, draws: 0, loses: 0},
    ]
    // Creating the standing table.
    // Criando a tabela de classificação.
    let standingTableDiv = document.createElement('div');
    let standingTable = document.createElement('table');
    standingTable.className = 'table table-hover';
    // Creating a variable to insert the stading table headings into a row.
    // Criando uma variável para inserir os títulos da tabela de classificação em uma linha.
    const standingTableTitles = standingTable.createTHead().insertRow();
    // Inserting the standing table headings.
    // Inserindo os títulos da tabela de classificação.
    standingTableTitles.insertCell(-1).innerText = 'Nome';
    standingTableTitles.insertCell(-1).innerText = 'Pontos';
    standingTableTitles.insertCell(-1).innerText = 'Vitórias';
    standingTableTitles.insertCell(-1).innerText = 'Empates';
    standingTableTitles.insertCell(-1).innerText = 'Derrotas';
    // Variable that creates the body of the standing table.
    // Variável que cria o corpo da tabela de classificação.
    let standingTableBody = standingTable.createTBody(teams);
    // Function that has the complete standing table.
    // Função que tem a tabela de classificação completa.
    function createStandingTable(standingTableBody, teams) {
        cleaner(standingTableBody);
        // "for" that inserts in the standing table, the teams and their values.
        // "for" que insere na tabela de classificação, os times e seus dados.
        for (team of teams) {
            // Variable that inserts a row.
            // Variável que insere uma linha.
            let bodyRow = standingTableBody.insertRow();
            // Inserting the team names on the row.
            // Inserindo o nome dos times na linha.
            let name = bodyRow.insertCell(-1);
            name.innerText = team.name;            
            // Inserting the team points on the row.
            // Inserindo os pontos dos times na linha.
            let points = bodyRow.insertCell(-1);
            points.innerText = team.points;
            // Inserting the team wins on the row.
            // Inserindo as vitórias dos times na linha.
            let wins = bodyRow.insertCell(-1);
            wins.innerText = team.wins;
            // Inserting the team draws on the row.
            // Inserindo os empates dos times na linha.
            let draws = bodyRow.insertCell(-1);
            draws.innerText = team.draws;
            // Inserting the team loses on the row.
            // Inserindo as derrotas dos times na linha.
            let loses = bodyRow.insertCell(-1);
            loses.innerText = team.loses;
        }
    }
    // Creating the matches table.
    // Criando a tabela de partidas.
    let matchesTableDiv = document.createElement('div');
    let matchesTable = document.createElement('table');
    matchesTable.className = 'table table-hover';
    // Creating a variable to insert the matches table headings into a row.
    // Criando uma variável para inserir os títulos da tabela de partidas em uma linha.
    const matchesTableTitles = matchesTable.createTHead().insertRow();
    // Inserting the matches table headings.
    // Inserindo os titulos da tabela de partidas.
    matchesTableTitles.insertCell(-1).innerText = 'casa';
    matchesTableTitles.insertCell(-1).innerText = 'vitória time da casa';
    matchesTableTitles.insertCell(-1).innerText = 'empate';
    matchesTableTitles.insertCell(-1).innerText = 'vitória time visitante';
    matchesTableTitles.insertCell(-1).innerText = 'visitante';
    // Array with the matches.
    // Array com as partidas.
    let matches = [
        // Round 1.
        // Rodada 1.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 1, awayName: teams[1].name},
        {homeName: teams[2].name, teamHome: 2, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        // Round 2.
        // Rodada 2.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 2, awayName: teams[2].name},
        {homeName: teams[1].name, teamHome: 1, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        // Round 3.
        // Rodada 3.
        {homeName: teams[0].name, teamHome: 0, win: '', draw: '', awayTeamWin: '', teamAway: 3, awayName: teams[3].name},
        {homeName: teams[1].name, teamHome: 1, win: '', draw: '', awayTeamWin: '', teamAway: 2, awayName: teams[2].name},
    ];
    // Variable that creates the body of the matches table.
    // Variável que cria o corpo da tabela de partidas.
    let matchesTableBody = matchesTable.createTBody(matches);
    // Function that distributes points and wins.
    // Função que distribui os pontos e vitórias.
    function matchWinnerTeamPoints(matchWinner) {
        matchWinner.points += 3;
        matchWinner.wins ++;
    }
    // Function that distributes the loses.
    // Função que distribui as derrotas.
    function matchLoserTeamPoints(matchLoser) {
        matchLoser.loses ++;
    }
    // Function that distributes points and draws.
    // Função que distribui os pontos e empates.
    function matchDrawPoints(teamHome, teamAway) {
        teamHome.points ++;
        teamAway.points ++;
        teamHome.draws ++;
        teamHome.draws ++;
    }
    // Function that has the complete matches table.
    // Função que tem a tabela de partidas completa.
    function createMatchesTable(matchesTableBody, matches) {
        cleaner(matchesTableBody);
        // "for" that create the matches cells.
        // "for" que cria as células das partidas.
        for (let match of matches) {
            // Variable that inserts a row.
            // Variável que insere uma linha.
            let bodyRow = matchesTableBody.insertRow();
            // Inserting the team names on the row.
            // Inserindo o nome do time de casa.
            let homeTeamName = bodyRow.insertCell(-1);
            homeTeamName.innerText = match.homeName;
            // Inserting the team win on the row.
            // Inserindo as vitória do time da casa na linha.
            let win = bodyRow.insertCell(-1);
            // Inserting the team draw on the row.
            // Inserindo o empate na linha.
            let draw = bodyRow.insertCell(-1);
            // Inserting the visitor team win on the row.
            // Inserindo a vitória do time visitante.
            let awayTeamWin = bodyRow.insertCell(-1);
            // Inserting the visitor team name.
            // Inserindo o nome do time visitante.
            let awayTeamName = bodyRow.insertCell();
            awayTeamName.innerText = match.awayName;
            // Changing color of the cell, to green, if the user clicks on win.
            // Alterando a cor da célula, para verde, caso o usuário clique em vitória.
            if (match.win === true) {
                win.className = 'bg-success';
            }
            // Creating the click event on home victory and setting the other options to false.
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
            // Changing color of the cell, to yellow, if the user clicks on draw.
            // Alterando a cor da célula, para amarelo, caso o usuário clique em empate.
            if (match.draw === true) {
                draw.className = 'bg-warning';
            }
            // Creating the click event on draw and setting the other options to false.
            // Criando o evento do clique no empate e colocando como "false" as outras opções.
            draw.onclick = (e) => {
                match.win = '';
                match.awayTeamWin = '';
                match.draw = !match.draw;
                createMatchesTable(matchesTableBody, matches);
                matchDrawPoints(teams[match.teamHome], teams[match.teamAway]);
                cleaner(createStandingTable(standingTableBody, teams));
            }
            // Changing color of the cell, to blue, if the user clicks on draw.
            // Alterando a cor da célula, para azul, caso o usuário clique na vitória do visitante.
            if (match.awayTeamWin === true) {
                awayTeamWin.className = 'bg-primary';
            }
            // Creating the click event on visitor victory and setting the other options to false.
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
    // Calling the functions.
    // Chamando as funçóes.
    createStandingTable(standingTableBody, teams);
    createMatchesTable(matchesTableBody, matches);
    // Tables.
    // Tabelas.
    anchor.append(standingTableDiv);
    standingTableDiv.appendChild(standingTable);
    anchor.append(matchesTableDiv);
    matchesTableDiv.appendChild(matchesTable);
})()
