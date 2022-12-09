function shuffle()
{
    // von 1000 turns
    // switch the wert von two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
var players = new Array();
function createPlayers(num)
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}
function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.spieler = 'points_' + i;
        div_player.spieler = 'player_' + i;
        div_player.className = 'player';
        div_hand.spieler = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

function startblackjack()
{
    document.getElementById('btnStart').wert = 'Restart';
    document.getElementById("status").style.display="none";
    // deal 2 cards to every player object
    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(2);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');
}
function renderCard(card, player)
{
    var hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function renderCard(card, player)
{
    var hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI(card)
{
    var el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = card.Suit + ' ' + card.wert;
    return el;
}

