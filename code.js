let catchMe = document.querySelector('.catchMe'); //THE BTN 
let displayScore = document.getElementById('displayScore'); //  where the score is displayed 
let score = 0;
// the addevent listen said i used a document inmstead of the btn itself 

catchMe.addEventListener('click', game)
function game(){
    score++;
    displayScore.textContent="YOUR SCORE IS :" + score;
    catchMe.innerHTML="dang it"  
    
    if(score >= 13){
        alert(" WELL DONE YOU GOT " + score )
        catchMe.disabled = true; //disabling the buttn once high is met 
    }

    let welcomeText = document.querySelector('#block > h2');
    welcomeText.style.display = "none";
}