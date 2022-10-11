const btn = document.querySelector('.container__btn')
const elements = document.querySelectorAll('.container__flex__element')

let isAdd = false

const addOrDeleteElements = () => {
    if (!isAdd) {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].classList.remove('delete');
            elements[i].classList.add('add');
        }
        isAdd = true;
        btn.textContent = "Удалить";
    } else {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].classList.remove('add');
            elements[i].classList.add('delete');
        }
        isAdd = false;
        btn.textContent = "Добавить";
    }
}

const debounce = (fn, wait) => {
    let timeout
    return function(...args) {
      const later = () => {
        clearTimeout(timeout)
        fn.apply(this, args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

const debounceHandler = debounce(addOrDeleteElements, 250);

btn.addEventListener('click', debounceHandler);
