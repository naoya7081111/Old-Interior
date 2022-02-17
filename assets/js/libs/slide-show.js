class HeroSlider {
    constructor() {
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },

            speed: 1000,
            grabCursor: true,
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableInteraction: false
        }, options);
        this.swiper.params.autoplay = options //paramsはスワイパークラスの2個目の引数
        this.swiper.autoplay.start(); //スワイパークラスのautoplayに元からあるメソッドの呼び出し
    }

    stop() {
        this.swiper.autoplay.stop();
    }

}
