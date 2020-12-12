const black_widow = document.querySelector('.black_widow');
const video_widow = document.querySelector('.video_widow');
const black_widow_poster = document.querySelector('.black_widow_poster');
const collection_video = document.querySelectorAll('.collection_video');
const play_btn = document.querySelectorAll('.play_icon');
const main_films_play_btn = document.querySelectorAll('.main_films_play_btn');
const series_play_icon = document.querySelectorAll('.series_play_icon');
const main_films_video = document.querySelectorAll('.main_films_video');
const series_video = document.querySelectorAll('.series_video');
const all_videos = document.querySelectorAll('video');
const header_nav = document.querySelector('.header__nav');
for (let i = 0; i < all_videos.length; i++) {
    all_videos[i].pause();
}

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
            all_videos.forEach(el => el.pause())
            play_video.play();

        }
        else {

        }

        videoPlayingCheck()

    })


}

for (let i = 0; i < main_films_play_btn.length; i++) {
    main_films_play_btn[i].addEventListener('click', () => {
        let parent = main_films_play_btn[i].closest('.main_films_item');
        let play_video = parent.querySelector('.main_films_video');
        let layout = parent.querySelector('.main_films_layover');

        if (main_films_play_btn[i].classList.contains('clicked')) {
            main_films_play_btn[i].classList.remove('clicked');
            layout.style = `transform: translateY(0)`
            play_video.pause();
        }
        else {
            main_films_play_btn[i].classList.add('clicked');
            let parent = main_films_play_btn[i].closest('.main_films_item');
            let play_video = parent.querySelector('.main_films_video');
            let layout = parent.querySelector('.main_films_layover');
            layout.style = `transform: translateY(-100%)`
            play_video.play();
        }
        main_films_video[i].addEventListener('click', () => {
            if (main_films_play_btn[i].classList.contains('clicked')) {
                layout.style = `transform: translateY(0)`
                play_video.pause();
            }
            else {
            }
        })
        if (!play_video.paused) {
            for (let i = 0; i < main_films_video.length; i++) {
                main_films_video[i].pause();
            }
            play_video.play();
        }
        else {
        }
        if (!play_video.paused) {
            all_videos.forEach(el => el.pause())
            play_video.play();

        }
        videoPlayingCheck()
    })

}

for (let i = 0; i < series_play_icon.length; i++) {
    series_play_icon[i].addEventListener('click', () => {
        let parent = series_play_icon[i].closest('.series_item');
        let play_video = parent.querySelector('.series_video');
        let layout = parent.querySelector('.series_video_layout');

        if (series_play_icon[i].classList.contains('clicked')) {
            series_play_icon[i].classList.remove('clicked');
            layout.style = `transform: translateY(0)`
            play_video.pause();
        }
        else {
            series_play_icon[i].classList.add('clicked');
            let parent = series_play_icon[i].closest('.series_item');
            let play_video = parent.querySelector('.series_video');
            let layout = parent.querySelector('.series_video_layout');
            layout.style = `transform: translateY(-100%)`
            play_video.play();
        }
        series_video[i + 1].addEventListener('click', () => {
            if (series_play_icon[i].classList.contains('clicked')) {
                layout.style = `transform: translateY(0)`
                play_video.pause();
            }
            else {
            }
        })
        if (!play_video.paused) {
            for (let i = 0; i < main_films_video.length; i++) {
                main_films_video[i].pause();
            }
            play_video.play();
        }
        else {
        }
        if (!play_video.paused) {
            all_videos.forEach(el => el.pause())
            play_video.play();

        }
        videoPlayingCheck()
    })

}

function videoPlayingCheck() {
    for (let i = 0; i < main_films_video.length; i++) {
        let tempParent = main_films_video[i].closest('.main_films_item');
        let tempLayout = tempParent.querySelector('.main_films_layover');
        if (main_films_video[i].paused) {
            tempLayout.style = `transform: translateY(0)`
        }
    }
    for (let i = 0; i < collection_video.length; i++) {
        let tempParent = collection_video[i].closest('.collection_item');
        let tempLayout = tempParent.querySelector('.collection_video_layout');
        if (collection_video[i].paused) {
            tempLayout.style = `transform: translateY(0)`
        }
    }

    for (let i = 0; i < series_video.length; i++) {
        let tempParent = series_video[i].closest('.series_item');
        let tempLayout = tempParent.querySelector('.series_video_layout');
        if (series_video[i].paused) {
            tempLayout.style = `transform: translateY(0)`
        }
    }
}
var main_films_timer = document.querySelectorAll('.main_films_timer');

for (let i = 0; i < main_films_video.length; i++) {
    setTimeout(() => {
        if (main_films_video[i].readyState > 0) {
            var hours = Math.trunc(main_films_video[i].duration / 3600);
            var minutes = Math.trunc((main_films_video[i].duration % 3600) / 60);
            var seconds = Math.round(main_films_video[i].duration % 60);
            main_films_timer[i].innerHTML = `${hours}:${minutes}:${seconds}`;

        }
    }, 200);
}

/*================================= burger ======================================*/
var burger_icon = document.querySelector('.header_burger');
var header_list = document.querySelectorAll('.header_list li');
burger_icon.addEventListener('click', function () {
    if (!burger_icon.classList.contains('clicked')) {
        burger_icon.classList.add('clicked');
        header_nav.style.transition = '0.5s';
        header_nav.style.opacity = 1;
    }
    else {
        burger_icon.classList.remove('clicked');
        header_nav.style.opacity = 0.5;
    }

})

/*================================ /burger ======================================*/

/*================================= scroll ======================================*/


class Scroll {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el;
        }
        this.top = obj.top;
        this.unit = obj.unit;
        this.el.style.position = 'fixed';
        this.el.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll())
    }

    scroll() {
        this.el.style.transition = 'none';

        this.window = this.scrollNumber();
        if (this.window - window.pageYOffset > 0) {
            this.el.style.top = this.window - window.pageYOffset + 'px';
            this.el.style.opacity = 1;
        } else {
            this.el.style.top = 0;
            this.el.style.opacity = 0.5;
        }


    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top > 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefuned) {
            return this.top = calc(window.innerHeight, this.top) - this.el.clientHeight;
        }
    }
    calc(height, top) {
        return height / 100 * top;
    }

}
const element = new Scroll({
    el: header_nav,
    top: 80,
    unit: 'px'
});

/*================================ /scroll ======================================*/