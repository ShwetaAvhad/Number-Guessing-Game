let buttons=document.querySelector(".container2");
let paraDiv=document.querySelector(".container3");
let attemptDiv=document.querySelector(".attemptsDiv");
let para=document.querySelector("P");

const createButtons=(e)=>{ 
    for (let index = 1; index <= 40; index++) {
    const button=document.createElement("button");
    buttons.appendChild(button);
    button.classList.add("btns");
    button.textContent=index;
    }
    let random=Math.floor(Math.random()*40)+1;
    console.log("Random No : "+random);
    return random;
    
};

const totalAttempts=6;
let attempts=0;
let random=createButtons();

const displayAttempts=document.createElement("P");
attemptDiv.appendChild(displayAttempts);

const checkNumber=buttons.addEventListener('click',(e)=>
        {
            attempts++; 
            if(e.target.tagName==="BUTTON")
            {                
                if(attempts>totalAttempts)
                {                    
                    GameOver();                   
                }
                else if(e.target.innerText==random)
                {
                    e.target.style.backgroundColor="green";
                    para.innerText="You Won!! Correct number guessed in "+`${attempts}`+" attempts";
                    disableButtons();
                    resetGame();
                    displayAttempts.textContent="Attempts : "+`${attempts}`;
                }
                else if(e.target.innerText<random)
                {
                    e.target.style.backgroundColor="yellow";
                    displayAttempts.textContent="Attempts : "+`${attempts}`;
                }
                else if(e.target.innerText>random)
                {
                    e.target.style.backgroundColor="red";
                    displayAttempts.textContent="Attempts : "+`${attempts}`;
                }                               
            }
            console.log(attempts);
                                  
        })

function GameOver()
{
    para.innerText="Game Over!!";
    resetGame();     
}
function disableButtons()
{
    const Allbuttons = buttons.getElementsByTagName("button");
    for (const button of Allbuttons) {
        button.disabled = true;
    }  
}
function resetGame()
{
    let element = paraDiv.querySelector("button");
    if(element  == null)
    {
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game'; 
        resetButton.classList.add("resetButton");
        paraDiv.appendChild(resetButton);
    }   
    resetButton.addEventListener('click',(e)=>{
        attempts=0;
        displayAttempts.textContent="Attempts : "+`${attempts}`;
        para.innerText="";
        const Allbuttons = buttons.getElementsByTagName("button");
        for (const button of Allbuttons) {
            button.disabled = false;
            button.style.backgroundColor="blue";
        }
        random = Math.floor(Math.random() * 40) + 1;
        console.log("New Random No : "+ random);
        resetButton.remove(); 
    })
}






