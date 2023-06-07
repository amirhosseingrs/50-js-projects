const units = document.querySelectorAll('.unit')
const glass = document.querySelector('.glass')
const filled = document.querySelector('.filled')
const filledText = document.querySelector('.filled h1')
const remaining = document.querySelector('.remaining')
const remainingText = document.querySelector('.remaining h3')
let filledRemaining = 0;
units.forEach((unit, index) => {
    unit.addEventListener('click', () => {
        if (index === 0 && unit.style.backgroundColor === 'dodgerblue' && filledRemaining === 1) {
            unit.style.backgroundColor = '#fff';
            filledRemaining = 0
        }else {
            for (let i = 0; i <= 7; i++) {
                units[i].style.backgroundColor = '#fff'
                filledRemaining = 0
            }
            for (let i = 0; i <= index; i++) {
                units[i].style.backgroundColor = 'dodgerblue'
                filledRemaining++
            }
        }
        filled.style.height = filledRemaining*12.5 + '%'
        filledText.innerHTML = filledRemaining !== 0 ? filledRemaining * 12.5 + '%' : ''
        remainingText.innerHTML = (8 - filledRemaining) / 4 + 'L' 
        if (filledRemaining === 8) 
            remaining.style.display = 'none'
        else 
            remaining.style.display = 'block'
        
    })
})