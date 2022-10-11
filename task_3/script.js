const video = document.querySelector('.video');
const time = document.querySelector('.time');

let isPlay = false;

video.onclick = () => {
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
}

video.ontimeupdate = () => {
    time.innerHTML = 'Текущее время: ' + convertTime(video.currentTime)
}

video.onended = () => {
    video.currentTime = 0
}

const convertTime = (time) => {
    const string = String(time)
    const array = string.split('')
    const second = string.split('.')[0]
    const mm = string.substring(array.indexOf('.') + 1, array.indexOf('.') + 3)
    return `${Math.floor(time / 60)}:${+second % 60}:${mm}`
}