document.addEventListener('DOMContentLoaded', function() {
    // スライドショー
    const hero = new HeroSlider();
    hero.start({delay: 6000});

    const inviewAnimationCallBack = (el, isIntersecting) => {
        if(isIntersecting) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
    const hiddenHeaderCallBack = (el, isIntersecting) => {
        const header = document.querySelector('header');
        if(isIntersecting) {
            header.classList.remove('outview');
        } else {
            header.classList.add('outview');
        }
    }
    const TweenTextAnimationCallback = (el, isIntersecting) => {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        } 
    }
    
    const scroll = new ScrollObserver('.float-img', inviewAnimationCallBack);
    const detail_scroll = new ScrollObserver('.detail', inviewAnimationCallBack);
    const detailTitle_scroll = new ScrollObserver('.detail__title', inviewAnimationCallBack, {onece: false});
    const appear_scroll = new ScrollObserver('.appear', inviewAnimationCallBack);
    const outviewHeader_scroll = new ScrollObserver('.header__observer', hiddenHeaderCallBack, {onece: false});
    const so = new ScrollObserver('.animate-title', TweenTextAnimationCallback);
})