# Function comeOut ()
    - remove all moles in each hole
    - remove all dead moles in each hole
    - remove eventListener for mole click
    - select random hole
    - display a mole in random hole
    - add an event listener to random hole for mole click

# Function handleMoleClick ()
    - if game is not over, increase score and display new score when mole is clicked.
    - remove image of mole on click
    - display deadmole for 200 milliseconds

# Function startGame ()
    - prevent starting a new game if game is not over
    - disable start button & enable end button
##    Function startLevel ()
        - set score to zero
        *set goal score*
        - set timer to 60s 
        - countdown uses setInterval function to decrease timer at 1000 millisecond intervals
            - if timer reaches 0 - reset countdown, 
            *if goal score was achieved, proceed to next level, else game is over,* 
            alert message is displayed, start button enables and end button disables. 

###         Function levelDifficulty ()
            *- change value of x. level[1, 2, 3, 4, 5] = x[1800, 1600, 1400, 1200, 1000]*
            *- change goal score. level[1, 2, 3, 4, 5] = goalscore[30, 25, 20, 15, 10]*
            - moleInterval uses the setInterval function to execute `comeOut()` every x milliseconds if game is not over.

# Function endGame () 
 - this is used if the game is ended using the end button before the timer runs out. Similar execution applies.

