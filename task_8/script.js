const div = document.querySelector('.container__field');
const btn = document.querySelector('.container__btn');

let isClick = false

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

btn.addEventListener('click', () => {
    if (isClick) {
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
    }
    const randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
    for (let i = 0; i < randomNumber; i += 1) {
        const element = document.createElement('div');
        element.classList.add('element');
        element.style.backgroundColor = getRandomColor();
        div.appendChild(element);
    }
    isClick = true
    
})