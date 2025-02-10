//ハンバーガーメニュー
$('.hum_menu').on('click', () => {
    $('header').toggleClass('on');
});

$(window).on('resize', () => {
    $('header').removeClass('on');
})
