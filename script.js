const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#result');
const choices = ['rock', 'paper','scissors'];
const user1 = document.querySelector('#userResult');
const computers = document.querySelector('#computerResult');

btns.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.getAttribute('data-choice');
        const com = choices[Math.floor(Math.random() * choices.length)];
    
        const res = getResult(player, com);
        
        if (res === "You win") {
            result.innerHTML =` <span style ="color: #90ee90"> You:</span> ${player} <br> 
                                <span style ="color: #ff7f7f"> Computer:</span> ${com} <br>
                                <span style="color: silver;">Result: </span><span style="color: gold;">${res}</span>`;            
        } else if (res === "Computer win") {
            result.innerHTML = `<span style ="color: #90ee90"> You:</span> ${player} <br>
                                <span style ="color: #ff7f7f"> Computer:</span>  ${com} <br> 
                                <span style="color: silver;">Result: </span><span style="color: darkred;">${res}</span>`; 
        } else if (res === "Draw") {
            result.innerHTML = `<span style ="color: #90ee90"> You:</span> ${player} <br> 
                                <span style ="color: #ff7f7f"> Computer:</span> ${com} <br> 
                                <span style="color: silver;">Result: </span><span style="color: gray;">${res}</span>`; 
        } 
    }); 
});
function getResult(user, computer) {
    let colors;
    if (user === computer) return "Draw";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")
    ) {
        return "You win";
    } else {
        return "Computer win";
    }
}
