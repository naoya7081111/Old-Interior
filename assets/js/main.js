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
    
    const cb2 = (el, isIntersecting) => {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        } 
    }
    
    const so = new ScrollObserver('.animate-title', cb2);
})