const bg = document.getElementsByClassName('bg')[0];
const persentage = document.getElementById('persentage')
const loadingPanel = document.getElementsByClassName('loadingPanel')[0]

let blurSize = 10;

const myInterval = setInterval(() => {
    bg.style.filter = 'blur('+blurSize+'px)';
    blurSize = (blurSize * 10 - 1 )/ 10;
    persentage.innerText = 100 - blurSize*10 + '%';
    if (blurSize === 0) {
        clearInterval(myInterval)
        bg.style.filter = 'blur(0px)';
        loadingPanel.style.display = 'none';
    }
}, 30);