document.addEventListener('DOMContentLoaded', function() {
    // テキストアニメーション
    const ta = new TweenTextAnimation('.animate-title');
    ta.animate();

    // スライドショー
    const hero = new HeroSlider();
    hero.start({delay: 3000});
})