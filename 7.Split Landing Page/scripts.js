const sides = document.querySelectorAll('.side')
console.log(sides)
sides.forEach(side => {
    side.addEventListener('mouseover', () => {
        side.classList.add('hover')
    })
    side.addEventListener('mouseout', () => {
        side.classList.remove('hover')
    })
});