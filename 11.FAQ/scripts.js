const buttons = document.querySelectorAll('i.fa-chevron-down');
const datas = document.querySelectorAll('.question');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle('fa-circle-xmark');
        button.classList.toggle('fa-chevron-down');
        if (button.classList.contains('fa-circle-xmark')) {
            datas[index].classList.add('active');
        } else {
            datas[index].classList.remove('active');
        }
    });
})