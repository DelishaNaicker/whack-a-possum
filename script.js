document.addEventListener("DOMContentLoaded", (event) =>{ 
    const holes =  
        document.querySelectorAll(".hole"); 
    const startButton =  
        document.getElementById("startButton"); 
    const endButton =  
        document.getElementById("endButton"); 
    const levelDisplay =  
        document.getElementById("level"); 
    const scoreDisplay =  
        document.getElementById("score"); 
    const timerDisplay =  
        document.getElementById("timer"); 
    const goalDisplay = 
        document.getElementById("goal");
    const modalDisplay = 
        document.getElementById("modaltext");
    
  
    let timer; 
    let level = 1; 
    let score = 0;
    let speedArray = [1800, 1600, 1400, 1200, 1000]
    let goalArray = [10, 12, 13, 14, 15, "You won!"]
    let gamespeed = 1800;
    let goalscore = 10;
    let countdown; 
    let moleInterval; 
    let modal = document.getElementById("nextLevelModal");
      
    // Set the initial state to game over 
    let gameOver = true;  
  
    function comeout() { 
        holes.forEach(hole => { 
            hole.classList.remove('mole');
            hole.classList.remove('deadmole'); 
            hole.removeEventListener( 
                'click', handleMoleClick); 
        }); 
  
        let random = holes[Math.floor(Math.random() * 9)]; 
  
        random.classList.add('mole'); 
        random.addEventListener('click', handleMoleClick); 
    } 
  
    function handleMoleClick() { 
        if (!gameOver) { 
            score++; 
            scoreDisplay.textContent = `Score: ${score}`; 
        } 
        this.classList.remove('mole');
        setInterval(this.classList.add('deadmole'), 200); 
    } 

    function gamePlay() {
        moleInterval = setInterval(() => { 
            if (!gameOver) {
            comeout();
            }    
        }, gamespeed);
    }

    function startLevel() {
        timer = 20;
        score = 0;
        timerDisplay.textContent = `Time: ${timer}s`; 

        countdown = setInterval(() => { 
            timer--; 
            timerDisplay.textContent = `Time: ${timer}s`; 
      
            if (timer <= 0) { 
                clearInterval(countdown); 
                if (score >= goalscore) {
                    level++;
                    if (level==6) {
                        alert(`Game Over!\nYou won! \nNow your mom can't call you a loser anymore :P`);
                        gameOver = true;
                        endGame();
                    };
                    clearInterval(moleInterval);
                    levelDisplay.textContent = `Level: ${level}`;
                    gamespeed = speedArray[level-1];
                    console.log(`${gamespeed}`);
                    goalscore = goalArray[level-1];
                    goalDisplay.textContent = `Goal: ${goalscore}`;
                    console.log(`${goalscore}`);
                    modal.style.display = "block";
                    modalDisplay.textContent = `Congratulations! You cleared level: ${level-1}!`;
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function() {
                        modal.style.display = "none";
                        if (!gameOver && modal.style.display == "none") {
                            startLevel(); 
                        }
                      }
                   
                    
                }
                else {
                    gameOver = true; 
                    alert(`Game Over!\nYou failed!`);
                    endGame();
                    }
                    
                } 
            }, 1000)

        gamePlay();

    }
  
    function startGame() { 
        if (!gameOver) { 
          
            // Prevent starting the game  
            // again if it's already in progress 
            return; 
        } 
  
        gameOver = false; 
        score = 0; 
        scoreDisplay.textContent = `Score: ${score}`; 
        level = 1;
        levelDisplay.textContent = `Level: ${level}`;
        
        startButton.disabled = true; 
        endButton.disabled = false; 

        startLevel();
 

    console.log("Game started"); 
    } 
  
    function endGame() { 
        clearInterval(countdown); 
        clearInterval(moleInterval); 
        gameOver = true; 
        score = 0; 
        timer = 20; 
        scoreDisplay.textContent = `Score: ${score}`; 
        timerDisplay.textContent = `Time: ${timer}s`; 
        startButton.disabled = false; 
        endButton.disabled = true; 
    } 
  
    startButton.addEventListener("click", startGame); 
    endButton.addEventListener("click", endGame); 
});

