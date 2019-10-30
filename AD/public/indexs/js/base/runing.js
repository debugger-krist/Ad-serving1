a$(function () {
    var $winH = $(window).height(); //获取窗口高度
    var $teal_top = $(".mod_animation");
    var $teal_topH = parseInt($teal_top.height() + 0); //位置显示
    var $teal_left = $(".product_centent>.product_teal_left");
    var $teal_leftH = parseInt($teal_left.height() / 2); //位置显示
    var $teal_right = $(".product_centent>.product_teal_right");
    var $teal_rightH = parseInt($teal_right.height() / 2); //位置显示
    runing(); //页面刚载入时判断要显示
    $(window).scroll(function () {
        runing(); //滚动刷新
    })

    function runing() {
        $teal_top.each(function (i) { //遍历img
            var $scroTop = $teal_top.eq(i).offset(); //获取位置
            $teal_top.eq(i).css({});
            if ($scroTop.top + $teal_topH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroTop.top + $teal_topH) { //判断窗口至上往下的位置
                $teal_top.eq(i).addClass("teal teal_top"); //元素属性交换
            } else {
                $teal_top.eq(i).addClass("teal"); //元素属性交换
            }
        })
        $teal_left.each(function (i) { //遍历img
            var $scroLeft = $teal_left.eq(i).offset(); //获取位置
            $teal_left.eq(i).css({
                position: "absolute",
                left: "-420px",
                top: "0px"
            });
            if ($scroLeft.top + $teal_leftH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroLeft.top + $teal_leftH) { //判断窗口至上往下的位置
                $teal_left.eq(i).addClass("teal teal_left"); //元素属性交换
            } else {
                $teal_left.eq(i).addClass("teal"); //元素属性交换
            }
        })
        $teal_right.each(function (i) { //遍历img
            var $scroRight = $teal_right.eq(i).offset(); //获取位置
            $teal_right.eq(i).css({
                position: "absolute",
                right: "-420px",
                top: "0px"
            });
            if ($scroRight.top + $teal_rightH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroRight.top + $teal_rightH) { //判断窗口至上往下的位置
                $teal_right.eq(i).addClass("teal teal_right"); //元素属性交换
            } else {
                $teal_right.eq(i).addClass("teal"); //元素属性交换
            }
        })
    }
})
