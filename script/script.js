const black_widow = document.querySelector('.black_widow');
const video_widow = document.querySelector('.video_widow');
const black_widow_poster = document.querySelector('.black_widow_poster');
let temp = 0;
video_widow.pause();
const collection_video = document.querySelectorAll('.collection_video');
const play_btn = document.querySelectorAll('.play_icon');
for (let i = 0; i < collection_video.length; i++) {
    collection_video[i].pause();
}
window.addEventListener('scroll', () => {
    if ($(document).scrollTop() >= $('.black_widow').offset().top - 200) {
        video_widow.play();
    }
})

for (let i = 0; i < play_btn.length; i++) {
    play_btn[i].addEventListener('click', () => {
        let parent = play_btn[i].closest('.collection_item');
        let play_video = parent.querySelector('.collection_video');
        let layout = parent.querySelector('.collection_video_layout');

        if (play_btn[i].classList.contains('clicked')) {
            play_btn[i].classList.remove('clicked');
            layout.style = `transform: translateY(0)`
            play_video.pause();

        }
        else {
            play_btn[i].classList.add('clicked');
            let parent = play_btn[i].closest('.collection_item');
            let play_video = parent.querySelector('.collection_video');
            let layout = parent.querySelector('.collection_video_layout');
            layout.style = `transform: translateY(-100%)`
            play_video.play();
        }


        collection_video[i].addEventListener('click', () => {
            if (play_btn[i].classList.contains('clicked')) {
                layout.style = `transform: translateY(0)`
                play_video.pause();
            }
            else {

            }
        })
        if (!play_video.paused) {
            for (let i = 0; i < collection_video.length; i++) {
                collection_video[i].pause();
            }
            play_video.play();

        }
        else {

        }

        for (let i = 0; i < collection_video.length; i++) {
            let tempParent = collection_video[i].closest('.collection_item');
            let tempLayout = tempParent.querySelector('.collection_video_layout');
            if (collection_video[i].paused) {
                tempLayout.style = `transform: translateY(0)`
            }
        }

    })


}


