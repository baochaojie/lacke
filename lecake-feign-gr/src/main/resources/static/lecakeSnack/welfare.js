$(function () {
    //悦享与尊享列表点击兑换跳转到结算页
    $('.p_list_wrap .buy_btn').click(function () {
        if ($(this).hasClass('disabled')) {
            return;
        }
        var uid = $(this).parents('li').attr('data-id'),
            amount = 1;
        if ($('.main_snack').length > 0) {
            app_js.buyItem(uid, amount, false, {
                success: function () {
                    var dialog = $.alert('加入购物车成功', {
                        confirmText: '去结算',
                        confirmFn: function () {
                            dialog.hide();
                            window.location = '/cart/index.html';
                        },
                        autoClose: true
                    });
                }
            });
        } else {
            app_js.buyItem(uid, amount, true);
        }
    });

    // 悦享与尊享商品展示tab选择
    $(".tab_welfare.pleasant h1").click(function () {
        $(this).addClass('active').parent().siblings().children('h1').removeClass('active');
        $('.p_list_wrap.pleasant').css('display', 'block').siblings('.p_list_wrap').css('display', 'none');
    });
    $(".tab_welfare.honorable h1").click(function () {
        $(this).addClass('active').parent().siblings().children('h1').removeClass('active');
        $('.p_list_wrap.honorable').css('display', 'block').siblings('.p_list_wrap').css('display', 'none');
    });

    //配件商品滚动
    $('.fitting').slide({
        titCell: '.fitting ul',
        mainCell: '.bd ul',
        autoPage: true,
        effect: 'left',
        scroll: 4,
        vis: 4
    });
});
