//遮罩层
var cover = {
    show: function (options) {
        var opt = $.extend({}, {css: {}}, options);
        $('<div class="global_cover" id="globalCover"></div>').appendTo($('body')).css(opt.css).click(function () {
            opt.clickHandler && opt.clickHandler();
        });
    },
    hide: function () {
        $('#globalCover').remove();
    }
};

//遮罩层
window.mask = {
    show: function (options) {
        var defaults = {
            className: '',
            container: $('body'),
            initFn: null,
            closeFn: null,
            hasColor: false
        };
        var opts = $.extend({}, defaults, options);
        if ($('.global_shade').length) {
            return;
        }
        $('<div class="global_shade ' + opts.className + (opts.hasColor ? ' has_cover' : '') + '"></div>').appendTo(opts.container);
        opts.initFn && opts.initFn();
        $('.global_shade').click(function () {
            opts.closeFn && opts.closeFn();
        });
    },
    hide: function () {
        $('.global_shade').remove();
    }
};
//正在加载
window.loading = {
    show: function (options) {
        var defaults = {
            className: '',
            container: $('body'),
            text: '正在请求中',
            isCover: true,
            maskColor: false,
            showText: true
        };
        var opts = $.extend({}, defaults, options);
        if ($('#globalLoading').length) {
            return;
        }
        $('<div id="globalLoading" class="global_loading ' + opts.className + '">' +
            '<div class="inner ' + (opts.showText ? '' : 'hide') + '"><p>' + opts.text + '</p></div>' +
            '</div>').appendTo(opts.container);
        if (opts.isCover) {
            mask.show({container: $('#globalLoading'), hasColor: opts.maskColor});
        }
    },
    hide: function () {
        $('#globalLoading').remove();
    }
};
//对话框
(function ($) {
    var Dialog = function (options) {
            this.options = options;
            this.uuid = utils.uuid();
        },
        DialogArr = [];
    var toast = {
        timers: [],
        duration: 0,
        node: null,
        countdown: function () {
            var that = this;
            var t = setTimeout(function () {
                that.close();
            }, this.duration);
            this.timers.push(t);
        },
        close: function () {
            var that = this;
            this.node.classList.remove('active');
            var t = setTimeout(function () {
                if (that.node) {
                    document.body.removeChild(that.node);
                }
                that.onClose && that.onClose();
                that.node = null;
            }, 500);
            this.timers.push(t);
        },
        show: function (content, duration, onClose, more) {
            more = more || {};
            duration = duration || 1500;
            var that = this;
            this.timers.forEach(function (timer) {
                window.clearTimeout(timer);
            });
            this.timers = [];
            this.duration = duration + 700;
            this.onClose = onClose;
            if (this.node) {
                this.node.innerHTML = content;
            } else {
                var div = document.createElement('div');
                div.className = 'global_toast ' + more.className;
                div.innerHTML = content;
                document.body.appendChild(div);
                this.node = div;
            }
            setTimeout(function () {
                that.node.classList.add('active');
                that.countdown();
            }, 0);
        }
    };
    Dialog.prototype = {
        show: function () {
            var self = this;
            var defaults = {
                wrap: null,
                className: '',
                container: $('body'),
                title: '提示信息',
                content: '',
                confirmText: '确定',
                cancelText: '取消',
                wrapCss: {},
                coverCss: {},
                innerCss: {},
                closeCss: {},
                headerCss: {},
                h3Css: {},
                footerCss: {},
                linkCss: {},
                showClose: true,
                autoClose: false,
                closeTime: 2000,
                initFn: function () {

                },
                cancelFn: function () {
                    self.hide();
                },
                confirmFn: function () {
                    self.hide();
                },
                closeFn: null
            };
            var opts = $.extend({}, defaults, self.options);
            if (!opts.closeFn) {
                opts.closeFn = opts.cancelFn;
            }
            var html = '<article class="global_modal"><div class="cover"></div><div class="inner ' + opts.className + '">';
            if (opts.showClose) {
                html += '<a href="javascript:void(0);" class="close_btn">关闭</a>';
            }
            if (!opts.hideHeader) {
                html += '<header><h3>' + opts.title + '</h3></header>';
            }
            html += '<div class="content">' + opts.content + '</div>';
            html += '<footer>';
            if (opts.showConfirm && opts.showCancel) {
                html += '<div class="btn_wrap both">' +
                    '<a class="btn cancel_btn" href="javascript:void(0)">' + opts.cancelText + '</a>' +
                    '<a class="btn confirm_btn" href="javascript:void(0)">' + opts.confirmText + '</a>' +
                    '</div>';
            } else {
                html += '<div class="btn_wrap single">' +
                    '<a class="btn confirm_btn">' + opts.confirmText + '</a>' +
                    '</div>';
            }
            html += '</footer></div></article>';
            self.wrap = $(html).appendTo(opts.container);
            if (utils.isType(opts.content, 'object')) {
                self.wrap.find('.content').html(opts.content);
            }
            opts.initFn();
            self.wrap.css(opts.wrapCss).find('.cover').css(opts.coverCss)
                .end().find('.inner').css(opts.coverCss)
                .end().find('header').css(opts.headerCss)
                .end().find('header h3').css(opts.h3Css)
                .end().find('footer').css(opts.footerCss)
                .end().find('footer a').css(opts.linkCss);
            self.wrap.find('.confirm_btn').click(function () {
                opts.confirmFn();
            }).end().find('.cancel_btn').click(function () {
                opts.cancelFn();
            }).end().find('.close_btn').click(function () {
                self.hide();
                opts.closeFn && opts.closeFn();
            });
            self.wrap.fadeIn(100);
            DialogArr.push({
                key: self.uuid,
                o: self
            });
            if (opts.autoClose) {
                setTimeout(function () {
                    self.hide();
                }, opts.closeTime);
            }
            return self;
        },
        hide: function () {
            var self = this,
                wrap = this.wrap;
            wrap.fadeOut(100, function () {
                wrap.remove();
                DialogArr = DialogArr.filter(function (item) {
                    return item.key !== self.uuid;
                });
            });
        }
    };
    $.extend({
        alert: function (content, more) {
            var dialog = new Dialog($.extend({}, {
                content: content,
                className: 'alert',
                confirmFn: function () {
                    dialog.hide();
                }
            }, more));
            return dialog.show();
        },
        confirm: function (content, confirmFn, more) {
            var dialog = new Dialog($.extend({}, {
                content: content,
                className: 'confirm',
                showConfirm: true,
                showCancel: true,
                confirmFn: confirmFn || function () {
                    dialog.hide();
                }
            }, more));
            return dialog.show();
        },
        removeDialog: function (uuid) {
            if (uuid) {
                DialogArr.forEach(function (item) {
                    if (item.key === uuid) {
                        item.o.hide();
                    }
                });
            } else {
                DialogArr.forEach(function (item) {
                    item.o.hide();
                });
            }
        },
        getDialogArr: function () {
            return DialogArr;
        },
        toast: function (content, duration, onClose, more) {
            toast.show(content, duration, onClose, more);
        }
    });
})(window.jQuery);
//评论商品图片显示
(function ($) {
    function ImageShow(items, opt) {
        this.items = items;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opt);
    }

    //返回图片尺寸
    function getSize(filename) {
        var pos = filename.lastIndexOf('.'),
            str = filename.substring(0, pos),
            arr = str.split('x');
        return {w: parseInt(arr[arr.length - 2], 10), h: parseInt(arr[arr.length - 1])};
    }

    ImageShow.prototype = {
        //处理图片大小
        load: function (item) {
            var img = item.find('.div_img img'),
                src = img.attr('src'),
                originSrc = img.attr('data-original'),
                w = img.parent().width(),
                h = img.parent().height(),
                size = getSize(src),
                cssObj;
            if (originSrc) {
                size = getSize(originSrc);
            }
            if (size.w > size.h) {
                cssObj = {
                    height: h + 'px',
                    marginLeft: '-' + (size.w / (size.h / h) - w) / 2 + 'px'
                }
            } else {
                cssObj = {
                    width: w + 'px',
                    marginTop: '-' + (size.h / (size.w / w) - w) / 2 + 'px'
                }
            }
            img.css(cssObj);
            if (!originSrc) {
                img.fadeIn();
            }
        },
        //查看大图
        showImg: function (parent, index) {
            var self = this,
                item = parent.find('.upload_item').eq(index),
                image_show = parent.find('.image_show'),
                len = parent.find('.upload_show').length;
            if (item.hasClass('active')) {
                return;
            }
            if (!image_show.length) {
                image_show = $('<div class="image_show clear_both">' +
                    '<img />' +
                    '<a href="javascript:void(0)" class="show_close">' +
                    '</a><a href="javascript:void(0)" class="show_prev"></a>' +
                    '<a href="javascript:void(0)" class="show_next"></a>' +
                    '</div>').appendTo(parent);
            }
            var src = item.find('.div_img img').attr('data-src');
            var size = getSize(src);
            item.addClass('active').siblings().removeClass('active');
            image_show.show();
            setTimeout(function () {
                image_show.stop().animate({
                    width: size.w + 'px',
                    height: size.h + 'px'
                }, 500).find('img').attr('src', src);
            }, 0);
            var closeBtn = image_show.find('.show_close'),
                prevBtn = image_show.find('.show_prev'),
                nextBtn = image_show.find('.show_next');
            closeBtn.off('click').click(function () {
                image_show.stop().animate({
                    width: 0,
                    height: 0
                }, 500, function () {
                    image_show.hide();
                });
                parent.find('.upload_item').removeClass('active');
            });

            prevBtn.show().off('click').click(function () {
                self.showImg(parent, index - 1);
            });
            nextBtn.show().off('click').click(function () {
                self.showImg(parent, index + 1);
            });
            if (index === 0) {
                prevBtn.hide();
            }
            if (len === index + 1) {
                nextBtn.hide();
            }
        },
        //延迟加载
        toggleLoad: function () {
            var self = this;
            self.lazyload();
            $(window).scroll(function () {
                self.lazyload();
            }).resize(function () {
                self.lazyload();
            });
        },
        lazyload: function () {
            var self = this;
            this.items.each(function () {
                var me = $(this),
                    img = me.find('.div_img img'),
                    originSrc = img.attr('data-original');
                if (!originSrc) {
                    return;
                }
                if (self.checkIsVisible(me)) {
                    img.attr('src', originSrc).fadeIn();
                    img.removeAttr('data-original');
                }
            });
        },
        //检查是否在视口内
        checkIsVisible: function (el) {
            if (!el.is(':visible')) {
                return false;
            }
            var rect = el[0].getBoundingClientRect();
            return (
                rect.top >= 0 && rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        init: function () {
            var self = this;
            self.items.each(function () {
                var me = $(this),
                    parent = me.parents('.upload_wrap');
                if (me.find('.upload_show').length) {
                    self.load(me);
                    me.find('.upload_show').click(function () {
                        var index = me.index();
                        self.showImg(parent, index);
                    });
                }
            });
            self.toggleLoad();
        }
    };
    $.fn.imageShow = function (options) {
        var obj = new ImageShow(this, options);
        obj.init();
    }
})(window.jQuery);
//选择城市
var citySelector = {
    wrap: null,
    dom: null,
    cityArr: globalSiteList,
    hide: function () {
        this.wrap.remove();
        cover.hide();
    },
    show: function () {
        var self = this,
            currentCity = cookie.get('CITY_ALIAS'),
            html = '<article class="city_selector" id="citySelector">' +
                '<header>' +
                '<h3>当前选择城市：<strong><i></i>' + self.dom.find('span').html() + '</strong>' +
                '</h3><a href="javascript:void(0);" class="close_btn">关闭</a>' +
                '</header>' +
                '<div class="main clear_fix">' +
                '<label class="f_left">全部城市：</label>' +
                '<div class="city_list clear_fix">';
        $.each(self.cityArr, function (i, v) {
            html += '<a href="javascript:void(0)" data-id="' + v.id + '" data-alias="' + v.alias + '" class="' + (v.alias === currentCity ? 'active' : '') + '">' + v.title + '</a>';
        });
        html += '</div>' +
            '</div>' +
            '</article>';
        $(html).appendTo($('body'));
        this.wrap = $('#citySelector');
        cover.show();
        this.bindHandler();
    },
    link: function (alias) {
        var href = window.location.href,
            exitsAlias = '',
            newHref = utils.createUrl({_site: alias});
        globalSiteList.forEach(function (item) {
            if (href.indexOf('/' + item.alias + '/') !== -1) {
                exitsAlias = item.alias;
            }
        });
        if (exitsAlias) {
            newHref = href.replace('/' + exitsAlias + '/', '/' + alias + '/');
        }
        window.location = newHref;
    },
    bindHandler: function () {
        var self = this,
            wrap = self.wrap;
        //关闭弹框
        wrap.find('.close_btn').click(function () {
            self.hide();
        });
        //切换选中商品
        wrap.find('.city_list a').click(function () {
            var me = $(this),
                alias = me.attr('data-alias');
            if (me.hasClass('active')) {
                self.hide();
                return false;
            }
            self.link(alias);
        });
    },
    init: function (dom) {
        var self = this;
        this.dom = $(dom);
        $(document).on('click', dom, function () {
            self.show();
        });
    }
};

(function ($) {
    function SelectItem(data, options) {
        data = data || [];
        if (!data.length) {
            return;
        }
        this.data = data;
        var defaults = {
            wrap: null,
            selectedItem: {},
            lineWidth: '70%',
            liHeight: 40,
            count: 13,
            currentItem: null,
            value: '',          //默认值
            //初始化后执行
            initFn: function () {
            },
            //选中新项时执行
            pickedFn: function () {
            }
        };
        var opts = $.extend(defaults, options),
            liHeight = opts.liHeight;
        this.opts = $.extend(opts, {liHeight: liHeight});
    }

    SelectItem.prototype = {
        init: function () {
            var self = this;
            this.createItem();
            this.createScrollBar();
            this.initStyle();
            setTimeout(function () {
                self.bindEvent();
            }, 0);
        },

        createItem: function () {
            this.wrap = $('<div class="select_item">' +
                '<ul class="select_list"></ul>' +
                '</div>');
            this.createContent();
        },

        createContent: function () {
            var li = '',
                value = this.opts.value;
            this.data.forEach(function (item, index) {
                li += '<li class="list_item no_wrap' + (item.val === value ? ' active' : '') + (item.isDisabled ? ' disabled' : '') + '" data-index="' + index + '" data-val="' + item.val + '">' + item.label + '</li>';
            });
            this.wrap.find('ul').html(li);
        },
        //创建滚动条
        createScrollBar: function () {
            this.wrap.append('<div class="scroll_bar"><div class="scroll_inner"></div></div>');
        },

        initStyle: function () {
            var opts = this.opts,
                liHeight = opts.liHeight,
                count = opts.count,
                dataLength = this.data.length;
            count = dataLength > count ? count : dataLength;
            this.wrap.css({height: liHeight * count}).find('li').css({
                height: liHeight + 'px',
                lineHeight: liHeight + 'px'
            });
            if (count >= dataLength) {
                this.wrap.find('.scroll_bar').remove();
            }
        },

        bindEvent: function () {
            var self = this,
                wrap = self.wrap;
            var outerHeight = wrap.outerHeight(),
                scrollContent = wrap.find('.select_list'),
                contentHeight = scrollContent.outerHeight(),
                scrollHeight = outerHeight / contentHeight * outerHeight,
                scrollOuter = wrap.find('.scroll_bar'),
                scrollInner = wrap.find('.scroll_inner');
            if (contentHeight > outerHeight) {
                this.mousehover(scrollInner);
                this.mousewheel(wrap, 10, scrollContent, scrollInner, outerHeight, contentHeight, scrollHeight);
                this.mousemoved(wrap, scrollContent, scrollOuter, scrollInner, outerHeight, contentHeight, scrollHeight);
            }
            wrap.find('.list_item').click(function () {
                var me = $(this),
                    index = me.attr('data-index'),
                    isDisabled = me.hasClass('disabled');
                if (isDisabled) {
                    return;
                }
                self.setCurrent(index);
            });
        },

        //鼠标移入
        mousehover: function (scrollInner) {
            scrollInner.hover(function () {
                $('body').css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    '-khtml-user-select': 'none',
                    'user-select': 'none'
                });
            }, function () {
                $('body').css({
                    '-moz-user-select': 'auto',
                    '-webkit-user-select': 'auto',
                    '-ms-user-select': 'auto',
                    '-khtml-user-select': 'auto',
                    'user-select': 'auto'
                });
            });
        },
        //鼠标滚动
        mousewheel: function (wrap, value, scrollContent, scrollInner, outerHeight, contentHeight, scrollHeight) {
            var scrollVal = value / (outerHeight - scrollHeight) * (contentHeight - outerHeight);
            scrollInner.css({height: scrollHeight});  //滚动条高度
            var isFireFox = /Firefox/i.test(navigator.userAgent),
                mousewheelEvent = isFireFox ? "DOMMouseScroll" : "mousewheel";
            wrap.on(mousewheelEvent, function (event) {  //绑定滚轮事件
                event.preventDefault();  //阻止浏览器默认为行

                var delta = event.originalEvent.wheelDelta || event.originalEvent.detail * -1;
                var scrollInnerTop = scrollInner.position().top;

                var scrollContentTop = scrollContent.position().top;

                if (delta > 0) {
                    if (scrollInnerTop - value < 0) {
                        scrollInner.css('top', 0);
                        scrollContent.css('top', 0);
                    } else {
                        scrollInner.css('top', scrollInnerTop - value);
                        scrollContent.css('top', scrollContentTop + scrollVal);
                    }
                } else {
                    if (scrollInnerTop + value > outerHeight - scrollHeight) {
                        scrollInner.css('top', outerHeight - scrollHeight);
                        scrollContent.css('top', outerHeight - contentHeight);
                    } else {
                        scrollInner.css('top', scrollInnerTop + value);
                        scrollContent.css('top', scrollContentTop - scrollVal);
                    }
                }
            });
        },
        //鼠标移动
        mousemoved: function (wrap, O, outer, inner, outerHeight, contentHeight, scrollHeight) {
            inner.on('mousedown', function (event) {   //绑定鼠标事件
                var clientY = event.clientY,
                    scrollInnerTop = inner.position().top,
                    scrollContentTop = O.position().top,

                    moveY = 0;

                $(document).on('mousemove', function (event) {
                    moveY = event.clientY - clientY;
                    var scrollContentMove = moveY / (outerHeight - scrollHeight) * (contentHeight - outerHeight);

                    if (scrollInnerTop + moveY < 0) {
                        inner.css('top', 0);
                        O.css('top', 0);
                    } else if (scrollInnerTop + moveY > outerHeight - scrollHeight) {
                        inner.css('top', outerHeight - scrollHeight);
                        O.css('top', outerHeight - contentHeight);
                    } else {
                        inner.css('top', scrollInnerTop + moveY);
                        O.css('top', scrollContentTop - scrollContentMove);
                    }
                });
                $(document).on('mouseup', function () {
                    $(document).off('mousemove');
                })
            });
        },

        setListTransform: function (translateY, type, time) {
            translateY = translateY || 0;
            time = time || 800;
            var ul = this.wrap.find('ul');
            var cssObj = {
                webkitTransition: '',
                webkitTransform: 'translateY(' + translateY + 'px)'
            };
            if (type === 'end') {
                cssObj.webkitTransition = 'transform ' + time + 'ms cubic-bezier(0.19, 1, 0.32, 1)';
            }
            ul.css(cssObj).attr('scroll', translateY);
        },

        setCurrent: function (index) {
            this.currentItem = this.data.filter(function (item, idx) {
                return idx === parseInt(index);
            })[0];
            this.opts.pickedFn && this.opts.pickedFn(this.currentItem);
        }
    };

    function IOSSelect(data, options) {
        data = data || [];
        if (!data.length) {
            return;
        }
        var self = this;
        this.data = data;
        var defaults = {
            wrap: null,
            className: '',
            container: $('body'),
            posDom: '',                      //控件出现的位置
            title: '选择列表项',
            confirmText: '确定',
            cancelText: '取消',
            hideTime: 300,
            //初始化后执行
            initFn: function () {
            },
            //点击取消
            cancelFn: function () {
                self.hide();
            },
            //点击确定
            confirmFn: function () {
                self.hide();
            },
            //点击关闭
            closeFn: function () {
                self.hide();
            }
        };
        this.items = {};
        this.opts = $.extend(defaults, options);
    }

    IOSSelect.prototype = {
        //创建容器
        createWrap: function () {
            var opts = this.opts,
                posDom = opts.posDom;
            this.wrap = $('<article class="ios_select ' + opts.className + '">' +
                '<div class="wrap" style="width: ' + posDom.width() + 'px;">' +
                '<div class="content ' + (this.data.length === 2 ? 'double' : '') + '"></div>' +
                '</div>' +
                '<div class="cover"></div>' +
                '</article>').appendTo(opts.container);
            this.cancelBtn = this.wrap.find('.cancel_btn');
            this.confirmBtn = this.wrap.find('.confirm_btn');
            this.content = this.wrap.find('.content');
            this.createContent();
            this.setStyle();
            this.bindEvent();
            opts.initFn();
        },
        //创建主体内容
        createContent: function () {
            var self = this;
            self.content.html('');
            self.data.forEach(function (item) {
                var selectItem = new SelectItem(item.data, $.extend({}, item.options));
                selectItem.init();
                self.content.append(selectItem.wrap);
                self.items[item.key] = selectItem;
                selectItem.opts.initFn && selectItem.opts.initFn(selectItem);
            });
        },
        //设置样式
        setStyle: function () {
            var opts = this.opts,
                posDom = opts.posDom,
                posData = posDom.offset();
            this.wrap.find('.wrap').css({
                top: (posData.top + posDom.height() - $(window).scrollTop()) + 'px',
                left: posData.left + 'px'
            });
        },
        //绑定事件
        bindEvent: function () {
            var self = this;
            $(window).scroll(function () {
                self.setStyle();
            });
            $(window).resize(function () {
                self.setStyle();
            });
            self.wrap.find('.cover').click(function () {
                self.hide();
            });
        },
        //更新
        update: function (data) {
            data = data || [];
            this.data = data;
            this.items = [];
            this.createContent();
        },
        //创建
        show: function () {
            var self = this;
            self.createWrap();
            setTimeout(function () {
                self.wrap.addClass('active');
            }, 0);
        },
        //销毁
        hide: function () {
            var self = this;
            this.wrap.removeClass('active');
            self.wrap.remove();
        }
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = IOSSelect;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return IOSSelect;
        });
    } else {
        window.IOSSelect = IOSSelect;
    }
})(jQuery);