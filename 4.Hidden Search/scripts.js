const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('searchInput');
searchBtn.addEventListener('click', () => {
    const size = input.style.width.toString()
    console.log(size)
    if (size === '0px' || size === '') {
        input.style.width = '210px'
    }else {
        input.style.width = '0'
    }
})