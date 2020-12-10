const black_widow = document.querySelector('.black_widow');
const video_widow = document.querySelector('.video_widow');
const black_widow_poster = document.querySelector('.black_widow_poster');
let temp = 0;
video_widow.pause();
window.addEventListener('scroll', () => {
    if ($(document).scrollTop() >= $('.black_widow').offset().top - 200) {
        video_widow.play();
    }
})