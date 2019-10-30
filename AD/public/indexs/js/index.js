/* 滚动的参数 */
$('#mod_dimensional').on('slid.bs.carousel', function () {
    // 执行一些动作...
    if ($('.item').eq(1).hasClass('active')) {
        setTimeout(function () {
            $(".kuai1").animate({
                'bottom': '0px'
            }, 800, 'easeOutCubic');
            $(".kuaiTitle").animate({
                'top': '50px',
                'opacity': '1'
            }, 1000);
        }, 0);
        setTimeout(function () {
            $(".kuai2").animate({
                'bottom': '0px'
            }, 800, 'easeOutCubic');
        }, 500);
        setTimeout(function () {
            $(".kuai3").animate({
                'bottom': '0px'
            }, 800, 'easeOutCubic');
        }, 1000);
        setTimeout(function () {
            $(".kuaiData").animate({
                'top': '300',
                'opacity': '1'
            }, 1000);
        }, 1500);
    }
});
$(function () {
    //进入画面（第一屏）动画
    $('.section1_in').stop().animate({
        'opacity': '1'
    }, 3000), 'swing';
    setTimeout(function () {
        $('.section1_jinzita').stop().animate({
            'opacity': '1',
            'height': 'auto'
        }, 1000), 'easeInOutQuad';
    }, 0);
    setTimeout(function () {
        $('.a1_6').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 300);
    setTimeout(function () {
        $('.a1_7').stop().animate({
            'opacity': '1',
            'height': '218px'
        }, 1000), 'easeInOutQuad';
    }, 600);
    setTimeout(function () {
        $('.a1_8').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 900);
    setTimeout(function () {
        $('.a1_9').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 1200);
    setTimeout(function () {
        $('.a1_10').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 1500);
    setTimeout(function () {
        $('.a1_11').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 1800);
    setTimeout(function () {
        $('.a1_12').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 2100);
    setTimeout(function () {
        $('.a1_13').stop().animate({
            'opacity': '1',
            'height': '340px'
        }, 1000), 'easeInOutQuad';
    }, 2400);
    setTimeout(function () {
        $('.a1_14').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 2700);
    setTimeout(function () {
        $('.a1_15').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 3000);
    setTimeout(function () {
        $('.a1_16').stop().animate({
            'opacity': '1',
            'height': '172px'
        }, 1000), 'easeInOutQuad';
    }, 3300);
    setTimeout(function () {
        $('.a1_17').stop().animate({
            'opacity': '1',
            'height': '248px'
        }, 1000), 'easeInOutQuad';
    }, 3600);
    setTimeout(function () {
        $('.a1_18').stop().animate({
            'opacity': '1',
            'height': '94px',
            'bottom': '-275px'
        }, 1000), 'easeInOutQuad';
    }, 5000);

    setTimeout(function () {
        $('.top_wechat').stop().animate({
            'opacity': '1',
            'bottom': '189px'
        }, 1000), 'easeInOutQuad';
    }, 2400);

    setTimeout(function () {
        $(".rightTab").click();

    }, 6000);
});
