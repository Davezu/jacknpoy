const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#result');
const choices = ['rock', 'paper','scissors']

btns.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.getAttribute('data-choice');
        const com = choices[Math.floor(Math.random() * choices.length)];
    
        const res = getResult(player, com)
        result.textContent = res;
    });
});
    

function getResult(user, computer) {
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
