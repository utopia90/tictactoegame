class TicTacGame {
    constructor(){
        this.startBtn = document.getElementById("start-btn");
        this.playerX = document.getElementById("player1");
        this.playerY = document.getElementById("player2");
        this.firstLayer = document.getElementById("firstlayer");
        this.secondLayer = document.getElementById("secondlayer");
        this.showPlayerX = document.getElementById('displayplayerX');
        this.showPlayerY = document.getElementById('displayplayerY');
        this.winnerMsg = document.getElementById("winnermsgdisplay");
        this.actualWinner = document.getElementById ("actualwinnername");
        this.sq1 = document.getElementById('sq1');
        this.sq2 = document.getElementById('sq2');
        this.sq3 = document.getElementById('sq3');
        this.sq4 = document.getElementById('sq4');
        this.sq5 = document.getElementById('sq5');
        this.sq6 = document.getElementById('sq6');
        this.sq7 = document.getElementById('sq7');
        this.sq8 = document.getElementById('sq8');
        this.sq9 = document.getElementById('sq9');
    }

    startGame(){
        this.startBtn.classList.remove('hide');
    }

    nextLayer(){
        this.firstLayer.classList.add('hide');
        this.secondLayer.classList.remove('hide');
        this.showPlayerX.innerText = `Player X: ${this.playerX.value}`;
        this.showPlayerY.innerText = `Player O: ${this.playerY.value}`;
        this.showPlayerX.classList.add('yourTurn');
    }
     
    playGame(event){
        if (this.showPlayerX.classList.contains('yourTurn')) {
            event.innerText = `X`;
            this.showPlayerX.classList.remove('yourTurn');
            this.showPlayerY.classList.add('yourTurn');
            event.removeEventListener('click', preventDoubleClick);

        } else{
            event.innerText = "O";
            this.showPlayerX.classList.add('yourTurn');
            this.showPlayerY.classList.remove('yourTurn');
            event.removeEventListener('click', preventDoubleClick)
        }
        this.winner();
    }

    winner() {
        if (this.sq1.innerText === `O` && this.sq2.innerText === `O` && this.sq3.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } else if (this.sq4.innerText === `O` && this.sq5.innerText === `O` && this.sq6.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } else if (this.sq7.innerText === `O` && this.sq8.innerText === `O` && this.sq9.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        }  else if (this.sq1.innerText === `O` && this.sq4.innerText === `O` && this.sq7.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } else if (this.sq2.innerText === `O` && this.sq5.innerText === `O` && this.sq8.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } else if (this.sq3.innerText === `O` && this.sq6.innerText === `O` && this.sq9.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        }  else if (this.sq1.innerText === `O` && this.sq5.innerText === `O` && this.sq9.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } else if (this.sq3.innerText === `O` && this.sq5.innerText === `O` && this.sq7.innerText === `O`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerY.value;
        } 
        
        else if (this.sq1.innerText === `X` && this.sq2.innerText === `X` && this.sq3.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        } else if (this.sq4.innerText === `X` && this.sq5.innerText === `X` && this.sq6.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        } else if (this.sq7.innerText === `X` && this.sq8.innerText === `X` && this.sq9.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        }  else if (this.sq1.innerText === `X` && this.sq4.innerText === `X` && this.sq7.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        } else if (this.sq2.innerText === `X` && this.sq5.innerText === `X` && this.sq8.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        } else if (this.sq3.innerText === `X` && this.sq6.innerText === `X` && this.sq9.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        }  else if (this.sq1.innerText === `X` && this.sq5.innerText === `X` && this.sq9.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        } else if (this.sq3.innerText === `X` && this.sq5.innerText === `X` && this.sq7.innerText === `X`) {
            this.winnerMsg.classList.remove('hide');
            this.actualWinner.innerText = this.playerX.value;
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener('DOMcontentLoaded', ready);
    } else {
        ready();
    }


function ready(){
    let ttg = new TicTacGame();
    const startBtn = document.getElementById("start-btn");
    let players = Array.from(document.getElementsByClassName("player"));
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    let squares = Array.from(document.getElementsByClassName('grid-item'));

    players.forEach(player => {
        player.addEventListener("keyup", () => {
            if (player1.value.length > 0 && player2.value.length > 0) {
                ttg.startGame();
            } else {
                startBtn.classList.add('hide');
            }
        });
    }); 

    startBtn.addEventListener('click', () => {
        ttg.nextLayer();
    });

    squares.forEach(x => {
        x.addEventListener('click', preventDoubleClick );
    });
}

function preventDoubleClick(event) {
    let ttg = new TicTacGame();

    ttg.playGame(event.target);
}