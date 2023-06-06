const spans = document.querySelectorAll('span');
const panel = document.querySelector('.info');
const guide = document.querySelector('h1');
document.addEventListener('keydown', (e) => {
    guide.style.display = 'none';
    panel.style.display = 'flex';
    spans[1].innerHTML = e.key;
    spans[3].innerHTML = e.keyCode;
    spans[5].innerHTML = e.code;
})