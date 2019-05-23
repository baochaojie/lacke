//点击弹出购买框
var buyPop = {
    wrap: null,
    hide: function () {
        this.wrap.remove();
        cover.hide();
    },
    show: function (dom) {
        var items,
            itemsStr = dom.attr('data-items'),
            isNumCake = dom.hasClass('num_cake'),
            taste = dom.attr('data-goodstastetxt'),
            sweet = dom.attr('data-goodssweet'),
            currentId = dom.attr('data-id'),
            title = dom.find('.p_name').text(),
            title_en = dom.find('.p_name_en').text(),
            headerText = isNumCake ? '&nbsp;&nbsp;&nbsp;&nbsp;请选择数字' : '',
            html = '<article class="buy_pop hide" id="buyPop">' +
                '<header>' +
                '<h3>加入购物车' + headerText + '</h3>' +
                '<a href="javascript:void(0);" class="close_btn">关闭</a>' +
                '</header>' +
                '<div class="main"><section class="top clear_fix ' + (isNumCake ? 'num_cake' : '') + '">';
        if (isNumCake) {
            itemsStr = dom.attr('data-numGoodsList');
        }

        if (!itemsStr) {
            return;
        }

        items = itemsStr.split(':');
        $.each(items, function (index, item) {
            var arr = item.split('|'),
                active = '';
            if (currentId === arr[0]) {
                active = ' active';
            }
            html += '<a href="javascript:void(0)" class="pop_item ' + active + '" ' +
                'data-id="' + arr[0] + '" ' +
                'data-title="' + (isNumCake ? arr[8] : title) + '" ' +
                'data-title_en="' + title_en + '" ' +
                'data-salePrice="' + arr[2] + '" ' +
                'data-passCardPrice="' + arr[7] + '" ' +
                'data-taste="' + taste + '" ' +
                'data-sweet="' + sweet + '" ' +
                'data-width="' + arr[3] + '" ' +
                'data-height="' + arr[4] + '" ' +
                'data-tableware="' + arr[5] + '" ' +
                'data-weight="' + arr[6] + '">' + arr[1] + '</a>';
        });
        html += '</section><div class="detail"></div>';
        html += '</div>' +
            '<footer class="buy_wrap">' +
            '<a href="javascript:void(0)" class="add_cart" id="addCart">加入购物车</a>' +
            '</footer>' +
            '</article>';
        $(html).appendTo($('body'));
        this.wrap = $('#buyPop');
        this.createDetail();
        this.wrap.removeClass('hide');
        cover.show();
        this.bindHandler();
    },
    //检查商品餐具是否要特殊处理
    checkTableware: function (uid) {
        globalSpecialDinnerware = globalSpecialDinnerware || {};
        var str = '';
        for (var key in globalSpecialDinnerware) {
            if (parseInt(key) === uid) {
                str = globalSpecialDinnerware[key];
            }
        }
        return str;
    },
    createDetail: function () {
        var item = this.wrap.find('.pop_item.active'),
            detail = this.wrap.find('.detail'),
            title = item.attr('data-title'),
            title_en = item.attr('data-title_en'),
            salePrice = parseFloat(item.attr('data-salePrice')),
            passCardPrice = parseFloat(item.attr('data-passCardPrice')),
            sweet = parseFloat(item.attr('data-sweet')),
            taste = item.attr('data-taste'),
            width = parseFloat(item.attr('data-width')),
            height = parseFloat(item.attr('data-height')),
            tableware = parseFloat(item.attr('data-tableware')),
            weight = parseFloat(item.attr('data-weight')),
            uid = parseInt(item.attr('data-id')),
            str = '<section class="middle clear_fix">' +
                '<div class="f_left title">' +
                '<h2 class="no_wrap">' + title + '</h2>' +
                '<h3>' + title_en + '</h3>' +
                '</div>' +
                '<div class="f_right price_wrap text_right">' +
                '<p class="new_price"><small>¥ </small>' + salePrice + '</p>' +
                (passCardPrice ? '<p class="pass_card_price"><small>¥ </small>' + passCardPrice + '</p>' : '') +
                '</div>' +
                '</section>';
        var specPrefixText = uid === 106041 ? '各' : '';
        if (sweet || taste || (width && height) || tableware || weight) {
            var tablewareHtml = tableware ? '<p class="tableware has_icon no_wrap"><i></i>含' + tableware + '套餐具</p>' : '',
                specialDinnerware = this.checkTableware(uid);
            if (specialDinnerware) {
                tablewareHtml = '<p class="tableware has_icon no_wrap"><i></i>' + specialDinnerware + '</p>';
            }
            str += '<section class="bottom clear_fix">' +
                (sweet ? '<p class="taste no_wrap">口味：' + taste + '</p>' : '') +
                (width && height ? '<p class="size has_icon no_wrap">' + specPrefixText + '约<i></i>' + width + 'x' + height + 'cm</p>' : '') +
                tablewareHtml +
                (sweet ? '<p class="sweet">甜度：<i class="level_' + sweet + '"></i></p>' : '') +
                (weight ? '<p class="weight has_icon">' + specPrefixText + '约<i></i>' + weight + 'g</p>' : '') +
                '</section>';
        }
        detail.html(str);
    },
    bindHandler: function () {
        var self = this,
            wrap = self.wrap;
        //关闭弹框
        wrap.find('.close_btn').click(function () {
            self.hide();
        });
        //切换选中商品
        $('.pop_item').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            self.createDetail();
        });
        //加入购物车
        $('#addCart').click(function () {
            var uid = wrap.find('.pop_item.active').attr('data-id'),
                amount = 1;
            loading.show();
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
                },
                always: function () {
                    loading.hide();
                    self.hide();
                }
            });
        });
    }
};
/**
 * 商品列表操作
 * 当鼠标enter时显示购买按钮，点击弹出选择商品框
 * 首页/商品列表页/详情页
 */
var itemHandler = function () {
    //商品鼠标移动时切换购买按钮
    $('.p_item').hover(function () {
        if ($(this).hasClass('normal')) {
            return;
        }
        $(this).find('.p_detail').stop().animate({top: '-40px'}, 200);
    }, function () {
        if ($(this).hasClass('normal')) {
            return;
        }
        $(this).find('.p_detail').stop().animate({top: 0}, 200);
    });
    //点击购买弹出购买框
    $(document).on('click', '.buy_btn', function () {
        var me = $(this);
        if (me.hasClass('normal') || me.hasClass('disabled')) {
            return;
        }
        buyPop.show(me.parents('.p_item'));
    });
};
$(function () {
    //订单列表页处理
    itemHandler();
    //商品列表图片懒加载
    $('.lazy').lazyload({
        threshold: 200,
        effect: 'fadeIn'
    });
});