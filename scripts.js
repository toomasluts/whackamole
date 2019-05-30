window.onload = initAll;

var lives = 10;
var score = 0;
var delay = 500;

function initAll(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
    document.getElementById("start").style.display = "none";
    runGame();
}

function runGame (){
    let molenr = Math.floor(Math.random() * 16);
    let mole = document.getElementById("g" + molenr);

    mole.style.backgroundColor = "green";

    let expire = setTimeout(function(){
        mole.style.backgroundColor = "transparent";
        mole.style.border = "3px solid red";
        setTimeout(function(){mole.style.border = "1px solid black";}, 100);
        lives--;
        mole.onclick = null;

        setStatus();
        if (lives > 0){runGame();}
    }, delay)

    mole.onclick = function(){
        mole.style.backgroundColor = "transparent";
        clearTimeout(expire);
        score += 10;
        mole.onclick = null;
        setStatus();
        runGame();
    }
}

function setStatus() {
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("score").innerHTML = "Score: " + score;
}