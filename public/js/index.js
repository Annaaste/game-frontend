

    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
    let gameMode = ""
    //let playerNum = 0
    //const socket = io();

    // get your player number 
    //socket.on('player-number', num => {
      //if (num === -1) {
        //infoDisplay.innerHTML = "Sorry, the server is full"
      //}
    //})
  
    const squares = []

  
    //create your board
    function createBoard() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
  
        //add layout to the board
        if(layout[i] === 0) {
          squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
          squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
          squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
          squares[i].classList.add('power-pellet')
        }
      }
    }
    createBoard()
  
  
    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')
    
   
  
    //move pacman
    function movePacman(e) {
      squares[pacmanCurrentIndex].classList.remove('pac-man')
      switch(e.keyCode) {
        case 37:
          if(
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair'))
            
          pacmanCurrentIndex -= 1
          if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
          }
          break
        case 38:
          if(
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
            ) 
          pacmanCurrentIndex -= width
          break
        case 39:
          if(
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += 1
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
          }
          break
        case 40:
          if (
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += width
          break
      }
      squares[pacmanCurrentIndex].classList.add('pac-man')
      pacDotEaten()
      powerPelletEaten()
      checkForGameOver()
      checkForWin()
    }
    document.addEventListener('keyup', movePacman)
  
    // what happens when you eat a pac-dot
    function pacDotEaten() {
      if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
      }
    }
  
    //what happens when you eat a power-pellet
    function powerPelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score +=10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000)
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
      }
    }
  
    //make the ghosts stop flashing
    function unScareGhosts() {
      ghosts.forEach(ghost => ghost.isScared = false)
    }
  
    //create ghosts using Constructors
    class Ghost {
      constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
      }
    }
  
    //all my ghosts
    ghosts = [
      new Ghost('blinky', 348, 250),
      new Ghost('pinky', 376, 400),
      new Ghost('inky', 351, 300),
      new Ghost('clyde', 379, 500)
      ]
  
    //draw my ghosts onto the grid
    ghosts.forEach(ghost => {
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
      })
  
    //move the Ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))
  
    function moveGhost(ghost) {
      const directions =  [-1, +1, width, -width]
      let direction = directions[Math.floor(Math.random() * directions.length)]
  
      ghost.timerId = setInterval(function() {
        //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
        if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
          !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
            //remove the ghosts classes
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
            //move into that space
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        //else find a new random direction to go in
        } else direction = directions[Math.floor(Math.random() * directions.length)]
  
        //if the ghost is currently scared
        if (ghost.isScared) {
          squares[ghost.currentIndex].classList.add('scared-ghost')
        }
  
        //if the ghost is currently scared and pacman is on it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
          squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
          ghost.currentIndex = ghost.startIndex
          score +=100
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
      checkForGameOver()
      }, ghost.speed)
    }

      

      const myform = document.getElementById("myform");
      const myformObject = document.forms["myform"];
      let playerName = "";

    function showEndGame(){
      myform.style.display = "block";
    }

    //check for a win - more is when this score is reached
    function checkForWin() {
      if (score === 274) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        document.getElementById("playerscore").value = score;
        
        setTimeout(function(){ alert("You have WON!"); }, 500)
      }
    }
  
  
    //check for a game over
    function checkForGameOver() {
      if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        document.getElementById("playerscore").value = score;
        setTimeout(function(){ alert("gameover"); }, 500)
        showEndGame()
        
        //function()//{ alert("Game Over"); }, 500)
      }
    }

    function submitHighscore(){
        playerName = myformObject.elements["player_name"].value;
        //let data = {"user": playerName, "score": score}
        
        //let url ="http://localhost:3001/registerscore?user=" + playerName + "&score=" + score;
        let url ="https://game-backend.herokuapp.com/registerscore?user=" + playerName + "&score=" + score;
    
        var xhr = new XMLHttpRequest()
         xhr.open("GET", url);
    
        xhr.send()
    }   

  