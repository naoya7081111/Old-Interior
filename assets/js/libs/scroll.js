class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            onece: true,
        }        
        this.options = Object.assign(defaultOptions, options);
        this.cb = cb;
        this.onece = this.options.onece;
        this._init();
    }
    _init() {
        const callBack = (entries, observer) => {
            entries.forEach(entry => { //observe対象
                if(entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.onece) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        }   
        this.io = new IntersectionObserver(callBack.bind(this), this.options);
        this.els.forEach(el => {
            this.io.observe(el)
        })
    }
}