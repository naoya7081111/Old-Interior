document.addEventListener('DOMContentLoaded', function() {
    // スライドショー
    const hero = new HeroSlider();
    hero.start({delay: 6000});

    const cb = (el, isIntersecting) => {
        if(isIntersecting) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
    
    const scroll = new ScrollObserver('.float-img', cb);
    const detail_scroll = new ScrollObserver('.detail', cb);
    const detailTitle_scroll = new ScrollObserver('.detail__title', cb, {onece: false});
    const appear_scroll = new ScrollObserver('.appear', cb);
    
    const cb2 = (el, isIntersecting) => {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        } 
    }
    
    const so = new ScrollObserver('.animate-title', cb2);
})