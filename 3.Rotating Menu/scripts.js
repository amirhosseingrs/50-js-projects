 const openBtn = document.getElementById('open')
 const closeBtn = document.getElementById('close')
 const container = document.getElementsByClassName('container')[0]
 const circle = document.getElementsByClassName('circle')[0]
 openBtn.addEventListener('click', () => {
    container.style.transform = 'rotate(-15deg)'
    circle.style.transform = 'rotate(-90deg)'
 })
 closeBtn.addEventListener('click', () => {
    container.style.transform = 'rotate(0deg)'
    circle.style.transform = 'rotate(0deg)'
 })
