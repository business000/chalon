/*======================
スライダー
======================*/
$('.slider').slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '30%',
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 519,
            settings: {
                centerPadding: '16px'
            }
        }
    ]
});

/*======================
下部の画像変更
======================*/
/*
画面をスクロールするたびに、以下を実行する。

もし、スクロールした量が、一定の距離(お菓子教室の所)より大きかったら、
.bgに.onを付加する
そうじゃなかったら、（お菓子教室の所より小さかったら）
.bgから、.onを取る
*/
/*
$(window).on('scroll', () => {
    const scroll_height = $(window).scrollTop();
    const lesson_pos = $('.lesson').offset().top;
    console.log(scroll_height);
    if (scroll_height > lesson_pos) {
        $('.bg').addClass('on');
    } else {
        $('.bg').removeClass('on');
    }
});
*/
/*
背景の画像が入るところ（#bg_placeholder）が表示されたら、
#bgに.onを付加する、
表示されていなかったら、
#bgから、.onを取る

observerの使い方

const 変数 = new IntersectionObserver(関数,[パラメーター]);
変数.obeserve(対象);

*/
const bg_ob_func = (entries) => {
    const bg = document.querySelector('#bg');
    if (entries[0].isIntersecting) {
        bg.classList.add('on');
    } else {
        bg.classList.remove('on');
    }
}

const bg_ob_params = {
    rootMargin: '300px'
};

const bg_ob = new IntersectionObserver(bg_ob_func, bg_ob_params);
bg_ob.observe(document.querySelector('#bg_placeholder'));

/*======================
各タイトル
======================*/
const title_ob_func = (entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.setAttribute('src', entries[0].target.dataset.src);
    }
}

const title_ob_params = {
    rootMargin: '-100px'
}

const title_ob = new IntersectionObserver(title_ob_func, title_ob_params);

const titles = document.querySelectorAll('.contents_title');

for (title of titles) {
    title.style.height = title.dataset.height + 'px';
    title_ob.observe(title);
}


/*======================
スクロールに応じて、動画が少し暗くなる
======================*/
const threshold_list = () => {
    let lists = [];

    for (let i = 0; i <= 20; i++) {
        lists.push(i / 20);
    }
    return lists;
}

const maxNum = (num, max) => {
    if (num < max) {
        return num;
    } else {
        return max;
    }
}

const ct_ob_func = (entries) => {
    const movies = document.querySelectorAll('.mv video');
    if (entries[0].isIntersecting) {
        for (movie of movies) {
            movie.style.opacity = 1 - maxNum(entries[0].intersectionRatio, 0.2);
        }
    }
}

const ct_ob_params = {
    threshold: threshold_list()
};

const ct_ob = new IntersectionObserver(ct_ob_func, ct_ob_params);
ct_ob.observe(document.querySelector('#concept_text'));
