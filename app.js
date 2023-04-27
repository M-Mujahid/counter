let numberCounter = document.querySelector(".counterNumber");
let increaseNum = document.querySelector(".increaseBtn");
let resetBtn = document.querySelector(".resetBtn");
let decreaseNum = document.querySelector(".decreaseBtn");
let count = 0;

let increaseNumber = () => {
    numberCounter.textContent = ++count
    if (numberCounter.textContent > 0) {
        
        numberCounter.style.color = "green"
        
    }
};

let reset = () => location.reload();

let decreaseNumber = () => {
    numberCounter.textContent = --count
    if (numberCounter.textContent < 0) {

        numberCounter.style.color = "red"
        
    } 
};