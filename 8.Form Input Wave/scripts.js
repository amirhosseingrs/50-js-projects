const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

inputs.forEach((input, index) => {

    input.addEventListener('focus', () => {
        revertLabels();
        labels[index].style.top = '0px';
    })
})

function revertLabels() {
    labels.forEach((label, index) => {
        if (inputs[index].value === ''){
            label.style.top = '30px';
        }
    })
}

document.addEventListener('click', (e) => {
    const element = e.target.tagName;
    if (element !== 'INPUT') {
        revertLabels()
    }
})