const slider = document.querySelector('.slider')

let isPressed = false
let startX = 0

slider.addEventListener('mousedown', (event) => {
    isPressed = true
    startX = event.clientX
})

slider.addEventListener('mousemove', (event) => {
    if (!isPressed) return null
    slider.scrollLeft += startX - event.clientX
})

slider.addEventListener('mouseleave', (event) => {
    isPressed = false
    startX = event.clientX

})