const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const steps = document.querySelectorAll('.step')
const stepsCount = steps.length
const progress = document.getElementById('progress');
nextBtn.addEventListener('click', () => {
    const activeSteps = countingActiveSteps()
    console.log(activeSteps)
    if (activeSteps < stepsCount) {
        const barIncrease = (activeSteps)/(stepsCount - 1) * 100;
        progress.style.width = barIncrease + '%'
        steps[activeSteps].classList.add('active')
    }
    if (activeSteps >= 1) {
        prevBtn.removeAttribute('disabled')
    }
    if (activeSteps == stepsCount-1) {
        nextBtn.setAttribute('disabled', 'disabled')
    }
    if (activeSteps == 0) {
        prevBtn.setAttribute('disabled', 'disabled')
        nextBtn.removeAttribute('disabled')
    }
})
prevBtn.addEventListener('click', () => {
    const activeSteps = countingActiveSteps()
    console.log(activeSteps)
    if (activeSteps < stepsCount) {
        nextBtn.removeAttribute('disabled')
        const barDecrease = (activeSteps-2)*33;
        progress.style.width = barDecrease + '%'
        steps[activeSteps-1].classList.remove('active')
    }
    if (activeSteps == stepsCount) {
        nextBtn.setAttribute('disabled', 'disabled')
        const barDecrease = (activeSteps-2)*33;
        progress.style.width = barDecrease + '%'
        steps[activeSteps-1].classList.remove('active')
    }
    if (activeSteps == 2) {
        prevBtn.setAttribute('disabled', 'disabled')
    }
})
function countingActiveSteps() {
    const activeSteps = document.querySelectorAll('.active')
    return activeSteps.length
}