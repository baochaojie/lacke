$(function () {
    //按条件过滤商品列表
    $('.filter_wrap dd').click(function () {
        var me = $(this);
        if (me.parents('dl').hasClass('sort')) {
            me.addClass('active').siblings().removeClass('active');
        } else {
            if (me.hasClass('active')) {
                me.removeClass('active').siblings('.all').addClass('active');
            } else {
                me.addClass('active');
            }
            if (me.hasClass('active')) {
                me.siblings().removeClass('active');
            }
        }
        if (me.hasClass('price_flag')) {
            me.attr('data-id', me.attr('data-id') === 'price_desc' ? 'price_asc' : 'price_desc');
        }
        var series = [],        //系列
            taste = [],         //口味
            spec = [],          //规格
            classify = [],      //分类
            sort = [],          //排序
            params = {};
        $('.series dd.active').each(function () {
            series.push($(this).attr('data-id'));
        });
        $('.taste dd.active').each(function () {
            taste.push($(this).attr('data-id'));
        });
        $('.spec dd.active').each(function () {
            spec.push($(this).attr('data-id'));
        });
        $('.classify dd.active').each(function () {
            classify.push($(this).attr('data-id'));
        });
        $('.sort dd.active').each(function () {
            sort.push($(this).attr('data-id'));
        });
        if (series.length) {
            params.series = series.join(',');
        }
        if (taste.length) {
            params.taste = taste.join(',');
        }
        if (spec.length) {
            params.spec = spec.join(',');
        }
        if (classify.length) {
            params.classify = classify.join(',');
        }
        if (sort.length) {
            params.sort = sort.join(',');
        }
        var pathname = '';
        if ($('.search_main').length) {
            pathname = '/' + cookie.get('CITY_ALIAS') + '/category-0-1.html';
        }
        window.location = utils.createUrl(params, pathname);
    });
    //选择全部商品
    $('#selectAll').click(function () {
        window.location = utils.createUrl({series: [], taste: [], spec: [], classify: [], sort: []});
    });

    (function () {
        // 指定商品,鼠标悬浮换张图片
        var changePicArr = [
            ['106904', GlobalConfig.staticUrl + 'images/goods/special/4-1.jpg'],
            ['106907', GlobalConfig.staticUrl + 'images/goods/special/5-1.jpg'],
            ['106912', GlobalConfig.staticUrl + 'images/goods/special/8-1.jpg'],
            ['106913', GlobalConfig.staticUrl + 'images/goods/special/6-1.jpg'],
            ['107129', GlobalConfig.staticUrl + 'images/goods/special/8-1.jpg'],
            ['107418', GlobalConfig.staticUrl + 'images/goods/special/9-1.jpg?01']
        ];
        if (GlobalConfig.site_env === 'dev' || GlobalConfig.site_env === 'alpha') {
            changePicArr.push(['100801', GlobalConfig.staticUrl + 'images/goods/special/4-1.jpg']);
        }
        $('.p_item_new').each(function () {
            var self = $(this),
                goodsId = self.attr('data-id');
            changePicArr.forEach(function (item) {
                if (item[0] === goodsId) {
                    self.attr('data-change', '1');
                    self.find('.div_img').append(
                        '<img class="hide hide_change" src=' + item[1] + '>'
                    );
                }
            })
        });
        $('.p_item_new ').mouseenter(function () {
            var self = $(this),
                isChange = self.attr('data-change'),
                changeImg = self.find('.div_img .hide_change');
            if (changeImg.hasClass('hide') && (typeof isChange) === 'string' && isChange === '1') {
                changeImg.siblings().hide();
                changeImg.removeClass('hide');
            }
        }).mouseleave(function () {
            var self = $(this),
                changeImg = self.find('.div_img .hide_change');
            changeImg.addClass('hide').siblings().show();
        });

    })();

});