document.addEventListener( 
    "DOMContentLoaded", function () { 
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
  
    let timer; 
    let level = 1; 
    let score = 0;
    let speedArray = [1800, 1600, 1400, 1200, 1000]
    let goalArray = [30, 25, 20, 15, 10]
    let gamespeed = 1800;
    let goalscore = 20;
    let countdown; 
    let moleInterval; 
      
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
  
    function startGame() { 
        if (!gameOver) { 
          
            // Prevent starting the game  
            // again if it's already in progress 
            return; 
        } 
  
        gameOver = false; 
        score = 0; 
        scoreDisplay.textContent = `Score: ${score}`; 
        timer = 60; 
        timerDisplay.textContent = `Time: ${timer}s`; 
        level = 1;
        levelDisplay.textContent = `Level: ${level}`;
        
        startButton.disabled = true; 
        endButton.disabled = false; 
        gamespeed = 1800;

        goalscore = 20;
            

        countdown = setInterval(() => { 
            timer--; 
            timerDisplay.textContent = `Time: ${timer}s`; 
      
            if (timer <= 0) { 
                clearInterval(countdown); 
                if (score >= goalscore) {
                    level++;
                    levelDisplay.textContent = `Level: ${level}`;
                    gamespeed = speedArray[level];
                    console.log(`${gamespeed}`);
                    goalscore = goalArray[level];
                    console.log(`${goalscore}`)

                }
                else {
                    gameOver = true; 
                    alert(`Game Over!\nYour final score: ${score}`);
                    console.log('game over'); 
                    startButton.disabled = false; 
                    endButton.disabled = true; 
                    }
                    
                } 
            }, 1000); 
      
        
            moleInterval = setInterval(() => { 
                if (!gameOver) comeout(); 
            }, gamespeed); 

        
  
        
  
    console.log("Game started"); 
    } 
  
    function endGame() { 
        clearInterval(countdown); 
        clearInterval(moleInterval); 
        gameOver = true; 
        alert(`Game Ended!\nYour final score: ${score}`); 
        score = 0; 
        timer = 60; 
        scoreDisplay.textContent = `Score: ${score}`; 
        timerDisplay.textContent = `Time: ${timer}s`; 
        startButton.disabled = false; 
        endButton.disabled = true; 
    } 
  
    startButton.addEventListener("click", startGame); 
    endButton.addEventListener("click", endGame); 
});