$(function () {
    orderObj = new Vue({
        el: '#mainOrder',
        data: {
            isMoonCake: isMoonCake,
            orderInfo: orderInfo || {},                               //结算页总对象
            checkoutConfig: checkoutConfig || {},                  //结算页配置对象
            specialDinnerware: specialDinnerware || {},            //某些商品特殊餐具数量
            customerInfo: customerInfo || {},

            buyId: '',                            //每次请求都携带此参数
            activity: '',
            deliverType: 1,                     //1 LECAKE冷链配送; 2 第三方物流（不限当前城市）
            siteId: 0,                             //购物车所在站点id
            isHoney: false,                     //是否撒娇订单
            isVirtual: false,                            //是否虚拟订单

            addressList: addressList || [],                        //地址列表
            isShowAddressList: false,                                //是否显示地址列表
            allAddress: [],
            address: {                          //正在编辑的地址信息
                deliverID: '',
                provinceid: '',
                cityid: '',
                countyid: '',
                custName: '',
                mobile: '',
                phone: '',
                provinceName: '',
                cityName: '',
                townName: '',
                address: '',
                roomNo: '',
                postUseFlg: 0,
                isEdit: false                   //是否正在编辑
            },
            isShowAreaMap: false,                       //是否显示区域配送地图
            cityMapName: 'shanghai',                       //当前城市地图

            searchUrl: searchUrl,                                       //百度关联搜索地址
            searchList: [],                                              //搜索结果
            isSearching: false,                                          //正在搜索

            couponList: [],           //优惠券列表
            couponCode: '',                                     //输入的优惠券
            showCouponList: false,
            isShowAllCoupon: false,                              //是否显示所有的优惠券
            forceShowUpList: false,                      //是否强制显示升磅可选商品列表，否则仅在存在多个升磅商品且未选择升磅商品时显示列表

            bindGoldCardList: [],                           //已绑定到用户账户的蛋糕券列表
            goldCardNo: '',                           //蛋糕券后四位
            goldCardPw: '',                             //蛋糕券密码
            isAgreeGoldCardRule: true,                     //是否同意使用蛋糕券规则
            showGoldCardList: false,

            valueCardList: [],                           //储值卡、专享兑换券列表
            valueCardCode: '',                           //储值卡、专享兑换券卡号
            valueCardPw: '',                             //储值卡、专享兑换券密码
            showValueCardList: false,
            valueCardInfo: {                            //储值卡、专享兑换券绑卡验证
                mobile: '',
                showMobile: '',
                yzm: '',
                code: '',
                isCodeGetting: false,
                isFetching: false,
                time: 0
            },
            isShowValueCardCheck: false,                 //是否显示储值卡、专享兑换券手机验证

            isPassCardVirtualGoods: isPassCardVirtualGoods,     //是否存在购买心享卡权益的虚拟商品

            enjoyBalance: {                   //aha值
                isEdit: true,                    //正在编辑
                value: ''                        //正在编辑的值
            },
            isShowPassCardRule: false,              //是否显示aha值说明

            isShowDeliverRightDesc: false,                       //是否显示免运费权益说明

            isShowToastOneRule: false,                       //是搜显示吐司一元购活动规则

            defaultPayList: [],                     //支付方式列表
            payCategory: 6,                         //支付方式中typeID等于1时为货到付款，等于6时为在线支付
            isCredit: false,                     //是否是信用卡，对应支付方式中credit_cash等于1时为信用卡
            payVerify: [],                        //银行卡宾验证
            isShowMorePayType: false,               //是否显示更多支付方式

            deliveryDate: orderInfo.send_date,
            buyLimit: orderInfo.buyLimit || [],                               //不可配送日期配置
            startTime: orderInfo.send_start_time ? timeHandler.timeToNumber(orderInfo.send_start_time) : '',
            endTime: orderInfo.send_end_time ? timeHandler.timeToNumber(orderInfo.send_end_time) : '',
            editingTime: {
                isEdit: true,
                hasSet: false
            },

            isShowEditInvoice: false,            //是否显示发票弹窗
            invoiceError: '',
            invoiceContentList: [],
            lastInvoice: {},                      //用户最后一次提交订单使用的发票
            invoiceIsFetching: false,                //正在保存发票
            invoice: {
                invoiceTitle: 1,       //抬头类型 1个人2公司
                invoiceName: '',        //发票抬头
                getMsg: '',             //手机号
                invoiceContent: 0,    //蛋糕393
                taxNumber: ''           //纳税人识别号
            },

            isShowOverView: false,                       //是否显示订单概览

            isShowVipRule: false,                        //购买aha虚拟商品时是否显示规则

            isAhaOrder: false,                          //是否是aha订单

            isShowSnowUpgrade: false,                           //是否显示新雪域升级弹框
            snowUpgradeList: [],                                 //可升级雪域列表
            currentSnowUpdateIndex: 0,                               //当前选中的升级商品
            lastCardNoForSnowUpdate: '',                         //升级雪域时的蛋糕卡

            isShowAhaRight4List: false,                               //是否显示aha权益列表
            isShowAhaRight4Desc: false,                                //是否显示aha权益说明

            isSelectedMilkGoods: false,                  //是否选中牛奶

            /*************牛奶预售周周配*************/
            isShowCalendar: false,                      //是否显示日历
            /*************牛奶预售周周配*************/

            /*************牛奶加价购*************/
            preferentialMilkIdList: preferentialMilkIdList || [],                  //牛奶加价购id列表
            preferentialMilk: [],                           //可以购买牛奶加价购时显示的牛奶列表
            isShowMilkGoodsTips: false,                      //是否显示牛奶加价购提示
            /*************牛奶加价购*************/

            /*********拆单开始*********/
            groupBuy: {},                                 //拆单数据对象
            activityType: 0,                            //拆单活动id
            groupBuyList: [],
            isGroupBuyAddress: false,                    //是否是拆单地址
            groupBuyEditingTime: {
                isEdit: true,
                hasSet: false
            },
            groupBuyDeliveryDate: '',
            groupBuyStartTime: '',
            groupBuyEndTime: '',
            groupBuyDeliveryType: 2,                        //拆单商品配送方式
            toastViewType: 0                                //吐司是否显示配送计划 0： 正常的 1：显示配送计划
            /*********拆单结束*********/
        },
        created: function () {
            var orderInfo = this.orderInfo,
                checkoutConfig = this.checkoutConfig;
            this.buyId = orderInfo.buy_id;
            this.siteId = orderInfo.site_id || 2;
            this.isHoney = orderInfo.bill_source === 85;
            this.isVirtual = orderInfo.bill_type === 19;
            this.deliverType = orderInfo.deliver_type || 1;
            this.defaultPayList = checkoutConfig.payList || [];
            this.lastInvoice = checkoutConfig.getLastInvoice || {};

            //设置是否是aha订单
            this.isAhaOrder = checkoutConfig.isAhaGoods === 1;

            //检查日期
            this.checkTimeArea();
            //检查VISA折扣是否在指定日期
            if (!this.isVISARightInTime && this.isUseVISARight) {
                this.toggleVISARight();
            }
            if (orderInfo.total_balance_paid > 0) {
                this.enjoyBalance = {
                    isEdit: false,
                    value: orderInfo.total_balance_paid
                };
            }
            if (this.promoFlag.coupon) {
                this.getCouponList();
            }
            if (this.promoFlag.goldCard) {
                this.getGoldCardList();
            }
            if (this.promoFlag.valueCard) {
                this.getValueCardList();
            }
            if (!this.isVirtual) {
                if ($.inArray(this.deliveryDate, this.dateList) === -1) {
                    this.deliveryDate = '';
                }
            }

            //发票相关
            if (this.invoiceID) {
                var invoiceDetail = orderInfo.invoice;
                this.invoice = {
                    invoiceTitle: invoiceDetail.personal_flag ? 1 : 2,       //抬头类型 1个人2公司
                    invoiceName: invoiceDetail.company_name || '',        //发票抬头
                    getMsg: invoiceDetail.receive_mobile,             //手机号
                    invoiceContent: 0,    //蛋糕393
                    taxNumber: invoiceDetail.tax_number
                }
            }
            for (var key in invoiceContentList) {
                if (invoiceContentList.hasOwnProperty(key)) {
                    this.invoiceContentList.push({id: key, name: invoiceContentList[key]});
                }
            }
            /**
             * 设置默认发票内容
             * 如果已经保存了发票，结算页大对象中发票内容为name，用这个值过滤出发票内容id
             * 如果还未保存发票，默认发票内容为列表第一个
             */
            if (this.invoiceContentList.length) {
                var arr = this.invoiceContentList.filter(function (item) {
                    return item.name === orderInfo.invoice.content;
                });
                if (arr.length) {
                    this.invoice.invoiceContent = arr[0].id;
                }
                if (!this.invoice.invoiceContent) {
                    // this.invoice.invoiceContent = this.invoiceContentList[0].id;
                }
            }
            //是否显示优惠券
            if (this.selectedCouponCode) {
                this.showCouponList = true;
            }
            //是否显示蛋糕券
            if (this.selectedGoldCard.length) {
                this.showGoldCardList = true;
            }
            //仅针对卡券兑换页面
            if ((this.extendFlag.isHiddenCzCard && this.extendFlag.isHiddenCoupon && this.extendFlag.isHiddenAha) && !this.extendFlag.isHiddenDjCard) {
                this.showGoldCardList = true;
            }

            //是否显示储值卡、专享兑换券
            if (this.selectedValueCard.length) {
                this.showValueCardList = true;
            }
            //支付相关
            var currentPayItem = this.payList.filter(function (item) {
                return item.payTypeID === orderInfo.payment_id;
            });
            if (currentPayItem.length) {
                currentPayItem = currentPayItem[0];
                this.payCategory = currentPayItem.typeID;
                this.isCredit = currentPayItem.credit_cash === 1;
                this.isShowMorePayType = currentPayItem.typeID === 1;
            }
            this.payVerify = checkoutConfig.payVerify || [];
            //时间相关
            if (this.deliveryDate && this.startTime && this.endTime || this.isNeedDeliveryDate && !this.isNeedTimeArea && this.deliveryDate) {
                this.editingTime = $.extend(this.editingTime, {
                    isEdit: false,
                    hasSet: true
                });
            }
            //储值卡、专享兑换券变动提示
            if (this.orderInfo.notice_msg) {
                alert(this.orderInfo.notice_msg);
            }

            /*********拆单开始*********/
            if (window.groupBuy) {
                var groupBuy = window.groupBuy,
                    send_date = groupBuy.send_date,
                    send_start_time = groupBuy.send_start_time,
                    send_end_time = groupBuy.send_end_time;
                this.groupBuy = groupBuy;
                this.activity = groupBuy.activity;
                this.activityType = groupBuy.activity_type;
                this.groupBuyList = groupBuy.goods;
                this.groupBuyDeliveryType = groupBuy.deliver_type;

                this.groupBuyDeliveryDate = send_date || '';
                if (this.isNeedGroupBuyTimeArea) {
                    this.groupBuyStartTime = send_start_time ? timeHandler.timeToNumber(groupBuy.send_start_time) : '';
                    this.groupBuyEndTime = send_end_time ? timeHandler.timeToNumber(groupBuy.send_end_time) : '';
                }

                if (this.groupBuyDeliveryDate && (this.isNeedGroupBuyTimeArea ? this.groupBuyStartTime && this.groupBuyEndTime : true)) {
                    this.groupBuyEditingTime = $.extend(this.groupBuyEditingTime, {
                        isEdit: false,
                        hasSet: true
                    });
                }
                this.toastViewType = groupBuy.goods_view;
            }
            /*********拆单结束*********/

            this.isPassCardVirtualGoods = this.goodsList.some(function (item) {
                return item.sku_id === globalBuyVipGoods;
            });

            this.checkBargainChange();

            if (this.isUseAhaRight4List) {
                this.isShowAhaRight4List = true;
            }

            /*************牛奶预售周周配*************/
            if (this.isMilkWeeklyBuy || this.isMilkGroupBuy) {
                this.deliverType = groupBuy.deliver_type;
            }
            /*************牛奶预售周周配*************/

            /*************牛奶加价购*************/
            if (preferentialMilk.length) {
                this.preferentialMilk = preferentialMilk;
                this.isShowMilkGoodsTips = true;
            }
            /*************牛奶加价购*************/

            if (!this.isUseAnyPromotion && this.buyAha4Flag <= 0) {
                this.isShowAhaRight4List = true;
            }

            //地址相关
            if (this.deliverType === 1) {
                this.getSiteList();
            } else {
                this.getAllAddress();
            }
            if (this.deliverType === 1) {
                this.setCityMapName();
            }
        },
        mounted: function () {
            IEPolyfill();
            this.$nextTick(function () {
                if (this.isMilkGroupBuy) {
                    var top = $('.normal_area_wrap').offset().top,
                        dom = $('#weeklyJump');
                    $(window).scroll(function () {
                        if ($(window).scrollTop() > top) {
                            dom.addClass('active');
                        } else {
                            dom.removeClass('active');
                        }
                    });
                }
            });
        },
        methods: {
            //获取地址列表，地址列表强制转换id参数为int
            getAddressList: function () {
                var self = this;
                loading.show();
                $.ajax({
                    url: '/order/address.html',
                    data: {
                        params: {
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.addressList = res.data || [];
                    }
                }).always(function () {
                    loading.hide();
                });
            },
            //获取站点所在区域地址
            getSiteList: function () {
                var self = this;
                $.ajax({
                    url: '/order/sitelist.html',
                    data: {
                        params: {
                            deliverType: self.deliverType,
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.allAddress = res.data;
                    }
                });
            },
            //获取全国配送地址
            getAllAddress: function () {
                var self = this;
                $.ajax({
                    url: '/order/china-region.html',
                    data: {
                        params: {
                            deliverType: self.deliverType,
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.allAddress = addressHandler.createAddressArr(res.data);
                    }
                });
            },
            //保存地址
            saveAddress: function () {
                var self = this,
                    address = self.address;
                if (!address.custName) {
                    $.alert('请填写收货人');
                    return;
                }
                if (address.mobile && !utils.checkMobile(address.mobile)) {
                    $.alert('手机号格式不正确');
                    return;
                }
                if (address.phone && !utils.isTel(address.phone)) {
                    $.alert('电话号码格式不正确');
                    return;
                }
                if (!address.mobile && !address.phone) {
                    $.alert('手机和电话至少填写一项');
                    return;
                }
                if (!address.provinceid || !address.cityid || !address.countyid) {
                    $.alert('请选择省市区信息');
                    return;
                }
                if (!address.address) {
                    $.alert('请填写详细地址');
                    return;
                }
                if (!utils.checkAddress(address.address, 1, 50)) {
                    $.alert('收货地址格式不正确');
                    return;
                }
                if (address.roomNo.length && !utils.checkAddress(address.roomNo, 1, 30)) {
                    $.alert('门牌号格式不正确(可为空)');
                    return;
                }
                address.buyId = self.buyId;
                address.provinceName = self.provinceName;
                address.cityName = self.cityName;
                address.countyName = self.countyName;
                address.deliverType = self.deliverType;
                loading.show();
                $.ajax({
                    url: '/order/address.html',
                    data: {
                        params: address
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.resetAddressDetail();
                        self.getAddressList();
                        self.chooseAddress(res.data);
                    } else {
                        $.alert(res.msg);
                    }
                }).fail(function () {
                    $.alert('请求错误，请重试');
                }).always(function () {
                    loading.hide();
                });
            },
            //选中关联搜索地址
            setDetail: function (detail, countyName) {
                var self = this;
                self.searchList = [];
                if (self.countyName !== countyName) {
                    var dialog = $.confirm('该街道地址所在区与所选择的的区不同，是否切换？', function () {
                        dialog.hide();
                        self.address.address = detail;
                        self.zoneArr.forEach(function (item) {
                            if (item.name === countyName) {
                                self.address.countyid = item.id.toString();
                            }
                        });
                    });
                    return;
                }
                self.address.address = detail;
            },
            //搜索
            search: function (e) {
                if (this.isSearching) {
                    return;
                }
                var self = this,
                    keyword = e.target.value,
                    searchUrl = this.searchUrl,
                    cityName = this.cityName,
                    inArea = this.deliverType === 1 ? 'Y' : 'N',
                    region = cityName || '全国';
                if (keyword) {
                    self.isSearching = true;
                    $.ajax({
                        type: 'get',
                        url: searchUrl,
                        data: {keyword: keyword, region: region, in_area: inArea},
                        dataType: 'jsonp',
                        error: function () {
                            console.log('request error');
                        },
                        success: function (res) {
                            var list = [];
                            if (res && res.data && res.data.list) {
                                list = res.data.list;
                            }
                            self.searchList = list;
                        },
                        complete: function () {
                            self.isSearching = false;
                        }
                    });
                } else {
                    self.searchList = [];
                }
            },
            //选择地址
            chooseAddress: function (id, confirm_switch) {
                var self = this;
                loading.show();
                confirm_switch = confirm_switch || 0;
                var params = {
                    deliverID: id,
                    buyId: self.buyId,
                    confirm_switch: confirm_switch,
                    groupBuy: {}
                };
                //如果是拆单商品配送地址
                if (self.isGroupBuyAddress) {
                    params.groupBuy.deliverID = id;
                    params.deliverID = self.deliverID;
                    if (this.isMilkGroupBuy) {
                        if (!params.deliverID) {
                            params.deliverID = id;
                        }
                    }
                }
                $.ajax({
                    url: '/order/freight.html',
                    data: {
                        params: params
                    }
                }).done(function (res) {
                    var error = res.error,
                        needConfirm = res.needConfirm,
                        msg = res.msg;
                    if (error === 0) {
                        self.isShowAddressList = false;
                        if (needConfirm === 1) {
                            var confirm = $.confirm(res.msg, function () {
                                if (res.action === 'home') {
                                    //需要跳转蛋糕馆
                                    self.goGoodsList(res.site_id);
                                } else {
                                    self.chooseAddress(id, 1);
                                }
                                confirm.hide();
                            });
                        } else {
                            if (msg) {
                                $.alert(msg);
                            }
                            self.isGroupBuyAddress = false;
                            self.changeOrderInfo(res.data);
                        }
                    } else {
                        $.alert(res.msg);
                    }
                }).fail(function () {
                    $.alert('请求错误，请重试');
                }).always(function () {
                    loading.hide();
                });
            },
            //切换站点且跳转蛋糕馆
            goGoodsList: function (siteId) {
                siteId = parseInt(siteId);
                var alias = 'SH';
                globalSiteList.forEach(function (item) {
                    if (item.id === siteId) {
                        alias = item.alias;
                    }
                });
                window.location = '/' + alias + '/category-0-1.html';
            },
            //编辑地址
            editAddress: function (id) {
                this.resetAddressDetail();
                var addressDetail = this.addressList.filter(function (item) {
                    return item.deliverID === id;
                });
                var info = {
                    deliverID: id,
                    isEdit: true
                };
                if (addressDetail.length) {
                    addressDetail = addressDetail[0];
                    info = $.extend(
                        info,
                        {
                            provinceid: this.deliverType === 1 ? addressDetail.provinceid.toString() : addressDetail.provinceName,
                            cityid: this.deliverType === 1 ? addressDetail.cityid.toString() : addressDetail.cityName,
                            countyid: this.deliverType === 1 ? addressDetail.countyid.toString() : addressDetail.countyName,
                            custName: addressDetail.custName,
                            mobile: addressDetail.mobile,
                            phone: addressDetail.phone,
                            provinceName: addressDetail.provinceName,
                            cityName: addressDetail.cityName,
                            countyName: addressDetail.countyName,
                            address: addressDetail.address,
                            roomNo: addressDetail.roomNo,
                            postUseFlg: addressDetail.is_default ? 1 : 0
                        });
                }
                this.address = $.extend(this.address, info);
            },
            //重置正在编辑的地址信息
            resetAddressDetail: function () {
                this.address = {                          //正在编辑的地址信息
                    deliverID: '',
                    provinceid: 0,
                    cityid: 0,
                    countyid: 0,
                    custName: '',
                    mobile: '',
                    phone: '',
                    provinceName: '',
                    cityName: '',
                    townName: '',
                    address: '',
                    roomNo: '',
                    postUseFlg: 0
                };
            },
            //设置区域配送地图
            setCityMapName: function () {
                var cityAlias = cookie.get('CITY_ALIAS'),
                    name = 'shanghai';
                switch (cityAlias) {
                    case 'SH':
                        name = 'shanghai';
                        break;
                    case 'BJ':
                        name = 'beijing';
                        break;
                    case 'GZ':
                        name = 'guangzhou';
                        break;
                    case 'NJ':
                        name = 'nanjing';
                        break;
                    case 'CD':
                        name = 'chengdu';
                        break;
                    case 'CQ':
                        name = 'chongqing';
                        break;
                    case 'SN':
                        name = 'shenzhen';
                        break;
                    case 'HZ':
                        name = 'hangzhou';
                        break;
                    case 'SZ':
                        name = 'suzhou';
                        break;
                    case 'TJ':
                        name = 'tianjin';
                        break;
                    case 'NB':
                        name = 'ningbo';
                        break;
                    case 'WX':
                        name = 'wuxi';
                        break;
                    case 'SX':
                        name = 'shaoxing';
                        break;
                    case 'JX':
                        name = 'jiaxing';
                        break;
                }
                this.cityMapName = name;
            },

            //创建时间:
            createTimeList: function (isStart) {
                var arr = [],
                    time = '',
                    currentItem = this.currentDateInfo;
                var startTime = timeHandler.strToInt(currentItem.start_time),
                    endTime = timeHandler.strToInt(currentItem.end_time),
                    interval = parseInt(currentItem.interval);
                if (startTime && endTime) {
                    for (var j = startTime; j <= endTime; j += interval * 60 * 1000) {
                        if (!isStart && j === startTime) {
                            continue;
                        }
                        if (isStart && j === endTime) {
                            continue;
                        }
                        time = utils.formatDate(j, 'hh:mm');
                        arr.push({label: time, value: parseInt(time.split(':').join('')) * 100});
                    }
                }
                return arr;
            },


            //创建拆单牛奶时间,【10：00-16：00】；【16：00-22：00】
            createGroupBuyTimeList: function (isStart) {
                var arr = [],
                    time = '',
                    currentItem = {
                        default_time: "10:00",
                        end_time: "22:00",
                        interval: 360,
                        start_time: "10:00"
                    };
                var startTime = timeHandler.strToInt(currentItem.start_time),
                    endTime = timeHandler.strToInt(currentItem.end_time),
                    interval = parseInt(currentItem.interval);
                if (startTime && endTime) {
                    for (var j = startTime; j <= endTime; j += interval * 60 * 1000) {
                        if (!isStart && j === startTime) {
                            continue;
                        }
                        if (isStart && j === endTime) {
                            continue;
                        }
                        time = utils.formatDate(j, 'hh:mm');
                        arr.push({label: time, value: parseInt(time.split(':').join('')) * 100});
                    }
                }
                return arr;
            },

            //时间修改后提交修改
            changeTime: function (isGroupBuyTime, confirm_lost_bargain, clean_all_use_bargain, confirm_lost_milk) {
                var self = this,
                    send_date = this.deliveryDate,
                    send_start_time = this.startTime,
                    send_end_time = this.endTime,
                    groupBuyDeliveryDate = this.groupBuyDeliveryDate,
                    groupBuyStartTime = this.groupBuyStartTime,
                    groupBuyEndTime = this.groupBuyEndTime,
                    editingTimeKey = isGroupBuyTime ? 'groupBuyEditingTime' : 'editingTime',
                    params = {};
                if (isGroupBuyTime) {
                    if (!groupBuyDeliveryDate) {
                        $.alert('请先选择配送日期');
                        return;
                    }
                    if (this.isNeedGroupBuyTimeArea && !(groupBuyStartTime && groupBuyEndTime)) {
                        $.alert('请先选择配送时间段');
                        return;
                    }
                    params = {
                        groupBuy: {
                            send_date: groupBuyDeliveryDate,
                            send_start_time: timeHandler.intToStr(groupBuyStartTime),
                            send_end_time: timeHandler.intToStr(groupBuyEndTime)
                        }
                    };
                } else {
                    if (this.isNeedDeliveryDate && !send_date) {
                        $.alert('请先选择配送日期');
                        return;
                    }
                    params.send_date = send_date;
                    if (this.isNeedTimeArea && !(send_start_time && send_end_time)) {
                        $.alert('请先选择配送时间段');
                        return;
                    }
                    if (this.isNeedTimeArea) {
                        params.send_start_time = timeHandler.intToStr(send_start_time);
                        params.send_end_time = timeHandler.intToStr(send_end_time);
                    }
                }
                if (confirm_lost_bargain) {
                    params.confirm_lost_bargain = confirm_lost_bargain;
                }
                if (clean_all_use_bargain) {
                    params.clean_all_use_bargain = clean_all_use_bargain;
                }

                if (confirm_lost_milk) {
                    params.confirm_lost_milk = confirm_lost_milk;
                }
                this.editOrder(params, {
                    success: function () {
                        self[editingTimeKey] = $.extend(self[editingTimeKey], {
                            isEdit: false,
                            hasSet: true
                        });
                    },
                    fail: function (e) {
                        var error = e.error;
                        if (error === 32111) {
                            $.alert(e.msg, {
                                    confirmText: '我知道了',
                                    confirmFn: function () {
                                        self.preferentialMilk = [];
                                        $.removeDialog();
                                        self.changeTime(isGroupBuyTime, null, null, true);
                                    }
                                }
                            );
                        } else if (error === 32233 || error === 32234) {
                            $.confirm($('<h2>' + e.msg + '</h2>' +
                                '<h3>请选择是否继续购物？</h3>'), null, {
                                className: 'square_type reverse_footer_btn',
                                hideHeader: true,
                                showClose: true,
                                confirmText: '否，重新填写收货信息购买',
                                cancelText: '是，直接购买',
                                confirmFn: function () {
                                    $.removeDialog();
                                },
                                cancelFn: function () {
                                    $.removeDialog();
                                    self.changeTime(isGroupBuyTime, 'YES', 'YES');
                                },
                                closeFn: function () {
                                    $.removeDialog();
                                }
                            });
                        } else {
                            $.alert(e.msg);
                        }
                    }
                });
            },

            //配送日期
            chooseDeliveryDate: function (isGroupBuy) {
                var self = this,
                    dateArray = orderObj.dateList || [],
                    key = 'deliveryDate',
                    dateList = [];
                if (isGroupBuy) {
                    dateArray = orderObj.groupBuyDateList || [];
                    key = 'groupBuyDeliveryDate';
                    if (!self.groupBuyDeliverID) {
                        $.toast('请先选择收货地址');
                        return;
                    }
                }
                if (!dateArray.length) {
                    $.alert('当前没有可配送日期，请切换地址重试');
                    return;
                }
                dateArray.forEach(function (item) {
                    dateList.push({
                        val: item,
                        label: item + '（' + utils.getDay(timeHandler.dateToInt(item)) + '）'
                    });
                });
                var dateSelect = new IOSSelect([{
                        data: dateList,
                        key: key,
                        options: {
                            value: this[key],
                            pickedFn: function () {
                                var item = dateSelect.items[key].currentItem || {};
                                self[key] = item.val;
                                dateSelect.hide();
                            }
                        }
                    }],
                    {
                        title: '',
                        posDom: isGroupBuy ? $('#groupBuyDeliveryDate') : $('#deliveryDate')
                    });
                dateSelect.show();
            },

            //配送时间段
            chooseDeliveryTime: function (isStart, isGroupBuyTime) {
                var self = this,
                    timeArr = [],
                    key = isStart ? 'startTime' : 'endTime',
                    arr = isStart ? this.startTimeArr : this.endTimeArr;
                if (isGroupBuyTime) {
                    key = isStart ? 'groupBuyStartTime' : 'groupBuyEndTime';
                    arr = isStart ? this.groupBuyStartTimeArr : this.groupBuyEndTimeArr;
                }
                arr.forEach(function (item) {
                    timeArr.push({val: item.value, label: item.label});
                });

                var timeSelect = new IOSSelect(
                    [
                        {
                            data: timeArr,
                            key: key,
                            options: {
                                value: self[key],
                                pickedFn: function () {
                                    var item = timeSelect.items[key].currentItem || {};
                                    self[key] = item.val;
                                    timeSelect.hide();
                                }
                            }
                        }
                    ],
                    {
                        title: '配送时间段',
                        posDom: $('#' + key)
                    }
                );

                timeSelect.show();
            },

            //切换时间段后做开始时间结束时间大小check
            changeTimeAreaHook: function (newVal, oldVal, isStart, isGroupBuyTime) {
                var startTimeKey = isGroupBuyTime ? 'groupBuyStartTime' : 'startTime',
                    endTimeKey = isGroupBuyTime ? 'groupBuyEndTime' : 'endTime',
                    editingTimeKey = isGroupBuyTime ? 'groupBuyEditingTime' : 'editingTime',

                    startTime = this[startTimeKey] || 0,
                    endTime = this[endTimeKey] || 0,
                    interval = isGroupBuyTime ? 360 * 60 * 1000 : this.currentDateInfo.interval * 60 * 1000;

                if (isStart && startTime && startTime >= endTime) {
                    var _endTime = this._createTime(startTime, interval, isStart);
                    if (!endTime && interval === 1800000) {
                        _endTime = this._createTime(startTime, interval * 2, isStart);
                        var _isExists = this.endTimeArr.some(function (item) {
                            return item.value === _endTime;
                        });
                        if (!_isExists) {
                            _endTime = this._createTime(startTime, interval, isStart);
                        }
                    }
                    this[endTimeKey] = _endTime;
                }
                if (!isStart && endTime && endTime <= startTime) {
                    this[startTimeKey] = this._createTime(endTime, interval, isStart);
                }
                if (!newVal) {
                    this[editingTimeKey] = $.extend(this.editingTime, {
                        isEdit: true,
                        hasSet: false
                    });
                }
            },
            //生成时间段
            _createTime: function (time, interval, isStart) {
                var _t1 = timeHandler.strToInt(timeHandler.intToStr(time, true)),
                    _time = isStart ? _t1 + interval : _t1 - interval;
                _time = utils.formatDate(_time, 'hh:mm');
                return parseInt(_time.split(':').join('')) * 100;
            },
            //日期更改时检查配送日期和配送时间段的有效性
            checkTimeArea: function () {
                var self = this,
                    dateList = self.dateList,
                    startTimeArr = self.startTimeArr,
                    endTimeArr = self.endTimeArr,
                    deliveryDate = self.deliveryDate,
                    startTime = self.startTime,
                    endTime = self.endTime,
                    isExits;
                if (deliveryDate) {
                    isExits = dateList.some(function (item) {
                        return item === deliveryDate;
                    });
                    if (!isExits) {
                        self.deliveryDate = '';
                    }
                }
                if (startTime) {
                    isExits = startTimeArr.some(function (item) {
                        return item.value === startTime;
                    });
                    if (!isExits) {
                        self.startTime = '';
                    }
                }
                if (endTime) {
                    isExits = endTimeArr.some(function (item) {
                        return item.value === endTime;
                    });
                    if (!isExits) {
                        self.endTime = '';
                    }
                }
            },

            //组合购切换地址时检查配送日期的有效性
            checkGroupBuyDate: function () {
                var self = this,
                    dateList = self.groupBuyDateList,
                    deliveryDate = self.groupBuyDeliveryDate,
                    isExits;
                if (deliveryDate) {
                    isExits = dateList.some(function (item) {
                        return item === deliveryDate;
                    });
                    if (!isExits) {
                        self.groupBuyDeliveryDate = '';
                    }
                }
            },

            /*************牛奶加价购*************/
            //获取指定id的商品
            getItemInfo: function (sku_id) {
                var currentItem,
                    amount = 0,
                    attributes = {},
                    goodsName = '',
                    checked = 1,
                    use_bargain_id = 0;
                this.goodsList.forEach(function (item) {
                    if (item.sku_id === sku_id) {
                        currentItem = item;
                    }
                });
                if (currentItem) {
                    amount = currentItem.amount || 0;
                    attributes = $.extend({}, currentItem.attributes);
                    goodsName = currentItem.goods_name;
                    checked = currentItem.checked;
                    use_bargain_id = currentItem.use_bargain_id;
                }
                return {
                    amount: amount,
                    attributes: attributes,
                    goodsName: goodsName,
                    checked: checked,
                    use_bargain_id: use_bargain_id
                };
            },
            //编辑牛奶加价购
            editMilkGoodsNum: function (sku_id, flag, goodsNum) {
                sku_id = parseInt(sku_id);
                var self = this, amount;
                if (goodsNum) {
                    amount = goodsNum;
                } else {
                    var itemInfo = this.getItemInfo(sku_id);
                    amount = itemInfo.amount || 0;
                    amount += flag;
                    if (amount < 0) {
                        $.alert('购买数量不能小于0');
                        return;
                    }
                }

                loading.show();
                $.ajax({
                    url: '/order/milk-jia-change.html',
                    data: {
                        sku_id: sku_id,
                        num: amount,
                        buyId: self.buyId
                    }
                }).done(function (res) {
                    self.editOrderCb(res);
                }).fail(function () {
                    $.alert('请求失败');
                }).always(function () {
                    loading.hide();
                });
            },
            //牛奶保质期
            milkExpire: function (expireDate, isGroupBuy) {
                var day = 0,
                    deliveryDate = this.deliveryDate;
                if (isGroupBuy) {
                    deliveryDate = this.groupBuyDeliveryDate;
                    this.groupBuy.realStock.forEach(function (item) {
                        if (item.send_date === deliveryDate) {
                            expireDate = item.expire_date;
                        }
                    });
                }
                if (deliveryDate) {
                    var startDate = timeHandler.dateToInt(deliveryDate),
                        endDate = timeHandler.dateToInt(expireDate);
                    for (var i = startDate; i <= endDate; i += 3600 * 24 * 1000) {
                        day++;
                    }
                }
                return day;
            },
            /*************牛奶加价购*************/

            //判断是否待升级的老雪域商品
            checkSnowUpgrade: function (useCard, cb) {
                cb = cb || {};
                var self = this;
                loading.show();
                $.ajax({
                    url: '/order/snow-cake-up.html',
                    data: {
                        buyId: self.buyId,
                        useCard: useCard
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        var list = res.data && res.data.goods || [];
                        self.lastCardNoForSnowUpdate = useCard;
                        if (list.length) {
                            self.snowUpgradeList = list.map(function (item, idx) {
                                return $.extend(item, {isChecked: idx === 0, upgradedGoods: {}});
                            });
                            cb.success && cb.success();
                        } else {
                            cb.fail && cb.fail();
                        }
                    } else if (res.error === 106) {
                        $.alert(res.msg, {confirmText: '我知道了'});
                    } else {
                        cb.fail && cb.fail();
                    }
                }).fail(function () {
                    cb.fail && cb.fail();
                }).always(function () {
                    loading.hide();
                });
            },
            //点击要升级的老雪域商品
            clickOldSnow: function (idx) {
                var snowUpgradeList = this.snowUpgradeList;
                snowUpgradeList.forEach(function (item, index) {
                    if (idx === index) {
                        item.isChecked = !item.isChecked;
                        item.upgradedGoods = item.isChecked ? item.upgradedGoods : {};
                    }
                });
                if (this.lastCardNoForSnowUpdate && snowUpgradeList[idx].isChecked) {
                    snowUpgradeList.forEach(function (item, index) {
                        if (idx !== index) {
                            item.isChecked = false;
                            item.upgradedGoods = {};
                        }
                    });
                }
            },
            //点击要升级到的新雪域商品
            clickNewSnow: function (idx, sku_id) {
                this.snowUpgradeList.forEach(function (item, index) {
                    if (idx === index) {
                        if (!item.isChecked) {
                            $.toast('请先选择被升级的商品');
                            return;
                        }
                        var upgradedGoods = item.upgradedGoods;
                        item.after.forEach(function (goods) {
                            if (goods.sku_id === sku_id) {
                                item.upgradedGoods = (upgradedGoods.sku_id === goods.sku_id ? {} : goods);
                            }
                        });
                    }
                });
            },
            //升级新雪域
            updateSnowCake: function () {
                var self = this,
                    upgradeList = [];
                self.snowUpgradeList.forEach(function (item) {
                    if (item.isChecked && item.upgradedGoods.sku_id) {
                        upgradeList.push([item.before.sku_id, item.upgradedGoods.sku_id]);
                    }
                });
                if (!upgradeList.length) {
                    $.toast('请选择您想要的升级蛋糕');
                    return;
                }
                var newSnowList = upgradeList.map(function (arr) {
                    return arr[1];
                }), isRepeat = false;
                if (newSnowList.length > 1) {
                    newSnowList = newSnowList.sort();
                    console.log(newSnowList);
                    for (var i = 0; i < newSnowList.length; i++) {
                        if (newSnowList[i] === newSnowList[i + 1]) {
                            isRepeat = true;
                        }
                    }
                    if (isRepeat) {
                        $.toast('请选择不同的新雪域商品升级');
                        return;
                    }
                }

                loading.show();
                $.ajax({
                    url: '/order/snow-cake-checkout.html',
                    type: 'post',
                    data: {
                        goods: upgradeList,
                        useCard: self.lastCardNoForSnowUpdate,
                        buyId: self.buyId
                    }
                }).done(function (res) {
                    self.editOrderCb(res, {
                        success: function () {
                            $.toast('升级成功');
                            self.isShowSnowUpgrade = false;
                        }
                    });
                }).fail(function () {
                    $.alert('请求失败');
                }).always(function () {
                    loading.hide();
                });
            },

            //点击结算按钮
            clickSubmitOrder: function () {
                var self = this;
                self.checkSnowUpgrade('', {
                    success: function () {
                        self.isShowSnowUpgrade = true;
                    },
                    fail: function () {
                        self.submitOrder();
                    }
                });
            },

            //获取优惠券列表
            getCouponList: function () {
                var self = this,
                    selectedCouponCode = self.selectedCouponCode;
                $.ajax({
                    url: '/order/coupon-list.html',
                    data: {
                        params: {
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.couponList = res.data || [];
                        self.couponList.forEach(function (item, index) {
                            if (item.coupon_code === selectedCouponCode && index > 6) {
                                self.isShowAllCoupon = true;
                            }
                        });
                    }
                });
            },
            //点击优惠券下拉按钮
            clickShowCouponList: function () {
                if (this.extendFlag.isReadOnlyCards) {
                    return;
                }
                if (!this.checkPromotionUse('selectedCouponCode')) {
                    return;
                }
                this.showCouponList = true;
            },
            //使用优惠券
            useCoupon: function (code, isNew) {
                if (!code) {
                    $.alert('优惠券码不能为空');
                    return;
                }
                if (isNew) {
                    var isExits = this.couponList.some(function (item) {
                        return item.coupon_code === code;
                    });
                    if (isExits) {
                        $.alert('请勿重复添加优惠券');
                        return;
                    }
                }
                var self = this,
                    selectedCouponCode = self.selectedCouponCode,
                    couponAction = 'use';
                if (code === selectedCouponCode) {
                    couponAction = 'remove';
                }
                self.editOrder({couponCode: code, couponAction: couponAction}, {
                    success: function () {
                        if (isNew) {
                            self.getCouponList();
                        }
                    },
                    fail: function (res) {
                        if (res.error === 32151) {
                            var tip = $.alert(res.msg, {
                                confirmFn: function () {
                                    tip.hide();
                                    self.removeCoupon(function () {
                                        self.getCouponList();
                                    }, true);
                                }
                            });
                        } else {
                            $.alert(res.msg);
                        }
                    },
                    always: function () {
                        self.couponCode = '';
                    }
                });
            },
            //不使用优惠券
            removeCoupon: function (success, isForce) {
                success = utils.isType(success, 'function') ? success : null;
                var self = this,
                    selectedCouponCode = self.selectedCouponCode,
                    couponAction = 'remove';
                if (isForce) {
                    selectedCouponCode = '88888888';
                } else {
                    if (!selectedCouponCode) {
                        return;
                    }
                }
                self.editOrder({couponCode: selectedCouponCode, couponAction: couponAction}, {
                    success: success,
                    always: function () {
                        self.couponCode = '';
                    }
                });
            },

            //获取蛋糕券列表
            getGoldCardList: function () {
                var self = this;
                $.ajax({
                    url: '/order/gold-card-list.html',
                    data: {
                        params: {
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.bindGoldCardList = res.data || [];
                    }
                });
            },
            //点击蛋糕券下拉按钮
            clickShowGoldCardList: function () {
                if (this.extendFlag.isReadOnlyCards) {
                    return;
                }
                if (!this.checkPromotionUse('selectedGoldCard')) {
                    return;
                }
                if (!this.checkValueUse('selectedGoldCard')) {
                    return;
                }
                this.showGoldCardList = true;
            },
            //使用蛋糕券
            useGoldCard: function (no, pw, isNew) {
                if (isNew && !this.isAgreeGoldCardRule) {
                    $.alert('请先确认蛋糕券使用规则');
                    return;
                }
                if (!this.checkValueUse('selectedGoldCard')) {
                    return;
                }
                if (!no) {
                    $.alert('请输入蛋糕券号后4位');
                    return;
                }
                if (isNew) {
                    if (!pw) {
                        $.alert('请输入蛋糕券密码');
                        return;
                    }
                    var isExits = this.goldCardList.some(function (item) {
                        return item.card_no === no;
                    });
                    if (isExits) {
                        $.alert('请勿重复添加蛋糕券');
                        return;
                    }
                }
                var self = this,
                    action = 'use';
                if (this.goldCardIsSelected(no)) {
                    action = 'remove';
                }
                self.editOrder({djcardNo: no, djcardPw: pw, djcardAction: action}, {
                    success: function () {
                        self.goldCardNo = '';
                        self.goldCardPw = '';
                    },
                    fail: function (res) {
                        if (res.error === 32152) {
                            var tip = $.alert(res.msg, {
                                confirmFn: function () {
                                    tip.hide();
                                    self.removeGoldCard(function () {
                                        self.getGoldCardList();
                                    }, true);
                                }
                            });
                        } else if (res.error === 90000) {
                            $('#activeStoreCardPop').removeClass('hide');
                        } else {
                            $.alert(res.msg);
                        }
                    }
                });
            },
            //不使用蛋糕券
            removeGoldCard: function (success, isForce) {
                success = utils.isType(success, 'function') ? success : null;
                var selectedGoldCard = this.selectedGoldCard,
                    action = 'remove',
                    cards;
                if (isForce) {
                    cards = '88888888';
                } else {
                    if (!selectedGoldCard.length) {
                        return;
                    }
                    cards = selectedGoldCard.map(function (item) {
                        return item.card_no;
                    });
                }
                this.editOrder({djcardNo: cards, djcardAction: action}, {success: success});
            },
            //判断蛋糕券是否选中
            goldCardIsSelected: function (no) {
                return this.selectedGoldCard.some(function (item) {
                    return item.card_no === no;
                });
            },

            //点击储值卡、专享兑换券下拉按钮
            clickShowValueCardList: function () {
                if (!this.checkPromotionUse('selectedValueCard')) {
                    return;
                }
                if (!this.checkValueUse('selectedValueCard')) {
                    return;
                }
                this.showValueCardList = true;
            },
            //获取储值卡、专享兑换券列表
            getValueCardList: function () {
                var self = this;
                $.ajax({
                    url: '/order/czcard-list.html'
                }).done(function (res) {
                    if (res.error === 0) {
                        var data = res.data || [];
                        self.valueCardList = data.map(function (item) {
                            return $.extend(item, {
                                card_no: item.card_no.toString(),
                                end_time: item.end_time.split(' ')[0]
                            });
                        });
                    }
                });
            },
            //获取图形验证码
            getCaptcha: function () {
                var img = $('#captchaImg'),
                    url = img.attr('data-src');
                if (!img.length) {
                    return;
                }
                var pos = url.indexOf('&v=');
                url = pos === -1 ? url : url.substring(0, pos);
                $.get(url + '&refresh=true', function () {
                    img.attr('src', url + '&v=' + Math.random());
                });
            },
            //获取短信验证码
            valueCardSendSMS: function () {
                var self = this,
                    valueCardInfo = this.valueCardInfo,
                    mobile = valueCardInfo.mobile,
                    yzm = valueCardInfo.yzm;
                if (!self.checkMobile(mobile)) {
                    return;
                }
                if (!yzm) {
                    $.alert('请输入图形验证码');
                    return;
                }
                valueCardInfo.isCodeGetting = true;
                $.ajax({
                    url: '/customer/get-code-other.html',
                    data: {
                        mobile: mobile,
                        yzm: yzm,
                        sms_type: '结算页储值卡、专享兑换券'
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.valueCardTimeDown();
                    } else {
                        self.getCaptcha();
                        $.alert(res.msg);
                    }
                }).fail(function () {
                    $.alert('请求失败,请重试');
                }).always(function () {
                    valueCardInfo.isCodeGetting = false;
                });
            },
            //短信验证码倒计时
            valueCardTimeDown: function () {
                var self = this;
                var timeout = 60;
                self.valueCardInfo.time = timeout;
                var t = setInterval(function () {
                    if (timeout-- === 0) {
                        clearInterval(t);
                    } else {
                        self.valueCardInfo.time = timeout;
                    }
                }, 1000);
            },
            //验证手机号
            checkMobile: function (mobile) {
                if (mobile.length === 0) {
                    $.alert('手机号不能为空');
                    return false;
                }
                if (!utils.checkMobile(mobile)) {
                    $.alert('手机号码格式不正确');
                    return false;
                }
                return true;
            },
            //验证短信验证码
            checkCode: function (code) {
                if (code.length === 0) {
                    $.alert('验证码不能为空');
                    return false;
                }
                return true;
            },
            //用手机号和验证码查询储值卡、专享兑换券
            valueCardQuery: function () {
                var self = this,
                    valueCardInfo = this.valueCardInfo,
                    mobile = valueCardInfo.mobile,
                    code = valueCardInfo.code;
                if (!self.checkMobile(mobile)) {
                    return;
                }
                if (!self.checkCode(code)) {
                    return;
                }
                valueCardInfo.isFetching = true;
                self.bindValueCard(true, true);
            },
            //绑定储值卡、专享兑换券
            bindValueCard: function (isNew, hasBind) {
                if (!this.checkValueUse('selectedValueCard')) {
                    return;
                }
                var self = this,
                    valueCardCode = this.valueCardCode,
                    valueCardPw = this.valueCardPw,
                    valueCardInfo = this.valueCardInfo,
                    mobile = valueCardInfo.mobile,
                    code = valueCardInfo.code;
                if (!valueCardCode) {
                    $.alert('请输入储值卡、专享兑换券卡号');
                    return;
                }
                if (isNew) {
                    if (!valueCardPw) {
                        $.alert('请输入储值卡、专享兑换券密码');
                        return;
                    }
                    var isExits = this.valueCardList.some(function (item) {
                        return item.card_no === valueCardCode;
                    });
                    if (isExits) {
                        $.alert('请勿重复添加储值卡、专享兑换券');
                        return;
                    }
                }
                var data = {
                    czcardNo: valueCardCode,
                    czcardPw: valueCardPw
                };
                if (hasBind) {
                    $.extend(data, {
                        mobile: mobile,
                        code: code
                    });
                }
                loading.show();
                $.ajax({
                    url: '/customer/bindczcard.html',
                    type: 'post',
                    data: data
                }).done(function (res) {
                    if (res.error === 0) {
                        self.isShowValueCardCheck = false;
                        self.getValueCardList();
                        self.useValueCard(valueCardCode);
                    } else if (res.error === 2) {
                        self.isShowValueCardCheck = true;
                        self.valueCardInfo.mobile = res.data;
                        self.valueCardInfo.showMobile = res.data.substring(0, 3) + '****' + res.data.substring(7, 11);
                    } else {
                        $.alert(res.msg);
                    }
                }).always(function () {
                    loading.hide();
                    if (hasBind) {
                        valueCardInfo.isFetching = false;
                    }
                });
            },
            //使用储值卡、专享兑换券
            useValueCard: function (no) {
                if (!this.checkValueUse('selectedValueCard')) {
                    return;
                }
                var self = this,
                    action = 'use',
                    totalPay = this.orderInfo.total_cash_pay;
                if (this.valueCardIsSelected(no)) {
                    action = 'remove';
                } else {
                    if (totalPay <= 0) {
                        $.alert('储值卡、专享兑换券金额不能大于订单金额');
                        return;
                    }
                }
                self.editOrder({czcardNo: no, czcardAction: action});
            },
            //判断储值卡、专享兑换券是否选中
            valueCardIsSelected: function (no) {
                return this.selectedValueCard.some(function (item) {
                    return item.card_no === no;
                });
            },
            //返回单个储值卡、专享兑换券信心
            getSelectedValueCardItem: function (no) {
                var itemInfo = {
                    balance: 0,
                    card_no: no,
                    used_amount: 0
                };
                if (this.valueCardIsSelected(no)) {
                    var info = this.selectedValueCard.filter(function (item) {
                        return item.card_no === no;
                    })[0];
                    itemInfo = $.extend(itemInfo, {
                        balance: parseFloat(info.balance),
                        used_amount: parseFloat(info.used_amount)
                    });
                }
                itemInfo.canUsed = itemInfo.balance + itemInfo.used_amount > 0;
                return itemInfo;
            },

            //选择升磅商品
            selectUpItem: function (itemId) {
                var self = this;
                self.editOrder({upgrade_sku_id: itemId}, {
                    success: function () {
                        self.forceShowUpList = false;
                    }
                });
            },
            //隐藏升磅商品列表,如果已经有升磅商品，直接隐藏，否则提示
            clickShowUpList: function () {
                if (!this.upItemId) {
                    $.alert('请先选择商品升磅');
                    return;
                }
                this.forceShowUpList = false;
            },

            //切换使用心享卡权益
            togglePassCardRight: function (success) {
                if (!this.checkPromotionUse('isUsePassCardRight')) {
                    return;
                }
                this.editOrder({use_pass_card_switch: this.isUsePassCardRight ? 'NO' : 'YES'}, {success: success});
            },

            //切换使用尊享团88折
            toggleDiscount: function (success) {
                if (!this.checkPromotionUse('isUseDiscount')) {
                    return;
                }
                this.editOrder({use_discount88_switch: this.isUseDiscount ? 'NO' : 'YES'}, {success: success});
            },

            //切换是否使用aha值,needTry是否需要在清空aha值后显示编辑
            toggleUseEnjoyBalance: function (needTry) {
                var self = this;
                this.editOrder({use_cash_back_switch: 'NO', use_cash_back_money: 0}, {
                    success: function () {
                        //如果需要重新填写并且此单可用aha值大于0
                        if (needTry) {
                            self.enjoyBalance = $.extend(self.enjoyBalance, {isEdit: true, value: ''});
                        } else {
                            self.enjoyBalance = $.extend(self.enjoyBalance, {
                                isEdit: false,
                                value: ''
                            });
                        }
                    }
                });
            },
            //使用aha值
            useEnjoyBalance: function () {
                var self = this,
                    val = this.enjoyBalance.value,
                    maxValue = self.orderInfo.max_pay_cashback;
                if (!this.checkValueUse('enjoyBalance')) {
                    return;
                }
                if (!val) {
                    $.alert('请输入aha值');
                    return;
                }
                if (val > maxValue) {
                    $.alert('aha值最大可用金额为' + maxValue);
                    return;
                }
                this.editOrder({use_cash_back_switch: 'YES', use_cash_back_money: val}, {
                    success: function () {
                        self.enjoyBalance.isEdit = false;
                    }
                });
            },

            //切换使用VISA折扣
            toggleVISARight: function (success) {
                var isUseVISARight = this.isUseVISARight;
                if (!isUseVISARight && !this.isVISARightInTime) {
                    $.alert('仅2018年1月1日-12月31日配送的订单可享受VISA83折');
                    return;
                }
                if (!this.checkPromotionUse('isUseVISARight')) {
                    return;
                }
                this.editOrder({use_visa83_switch: isUseVISARight ? 'NO' : 'YES'}, {success: success});
            },

            //切换使用免运费权益
            toggleDeliverRight: function () {
                var isUseDeliverRight = this.isUseDeliverRight;
                this.editOrder({use_deliver_coupon: isUseDeliverRight ? 'NO' : 'YES'});
            },

            //获取支付列表
            getPayList: function () {
                var self = this;
                loading.show();
                $.ajax({
                    url: '/order/pay-list.html',
                    data: {
                        params: {
                            buyId: self.buyId
                        }
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.defaultPayList = res.data || [];
                        self.$nextTick(function () {
                            self.bankCheckSetValue();
                        });
                    }
                }).always(function () {
                    loading.hide();
                });
            },
            //选择支付方式
            choosePayType: function (payType) {
                var self = this;
                if (self.payCategory === 1 && self.isHasUpgradePriceGoods) {
                    $.alert('加价升级优惠活动只限在线支付方式购买哦！');
                    return;
                }
                this.editOrder({payment_id: payType}, {
                    success: function () {
                        self.$nextTick(function () {
                            self.bankCheckSetValue();
                        });
                    }
                });
            },
            //切换是否显示货到付款
            toggleIsShowMorePayType: function (flag) {
                this.isShowMorePayType = flag;
                //当隐藏货到付款时，设置payCategory为6，信用卡支付为false
                if (!flag) {
                    this.payCategory = 6;
                    this.isCredit = false;
                }
            },
            //判断是否显示某个支付方式的具体信息
            isShowPayTypeDetail: function (payId) {
                var payCategory = this.payCategory,
                    isCredit = this.isCredit,
                    currentInfo = this.defaultPayList.filter(function (item) {
                        return item.payTypeID === payId;
                    })[0];
                return this.orderInfo.payment_id === payId &&
                    payCategory === currentInfo.typeID &&
                    currentInfo.payVerify === 1 &&
                    (payCategory === 1 ? (isCredit ? currentInfo.credit_cash === 1 : currentInfo.credit_cash !== 1) : true);
            },
            //判断已选支付方式是否可用
            isPayTypeCanUse: function () {
                if (this.isHidePayment) {
                    return true;
                }
                var payId = this.orderInfo.payment_id,
                    flag = true;
                if (payId) {
                    flag = this.payList.some(function (item) {
                        return item.payTypeID === payId;
                    });
                }
                return flag;
            },
            //银行卡宾验证参数获取
            bankCheckConfirm: function (e) {
                var self = this,
                    payId = this.orderInfo.payment_id,
                    button = $(e.target),
                    strs = [],
                    mobile = '';
                //上海银行信用卡
                if (payId === 94) {
                    var val1 = $.trim(button.siblings('.val1').val()),
                        val2 = $.trim(button.siblings('.val2').val());
                    mobile = $.trim(button.siblings('.mobile').val());
                    if (!val1 || val1.length !== 6) {
                        $.alert('请输入上海银行信用卡前6位');
                        return;
                    }
                    strs.push(val1);
                    if (!val2 || val2.length !== 6) {
                        $.alert('请输入上海银行信用卡后6位');
                        return;
                    }
                    if (!utils.checkMobile(mobile)) {
                        $.alert('请输入正确的手机号码');
                        return;
                    }
                    strs.push(val2);
                    this.bankCheck(strs, mobile, 'use', {
                        success: function () {
                            self.payVerify.push({
                                payment_id: payId,
                                mobile: mobile,
                                strs: strs
                            });
                            self.$nextTick(function () {
                                self.bankCheckSetValue();
                            });
                        }
                    });
                }
            },
            //取消使用银行卡宾
            bankCheckCancel: function (payId) {
                var self = this;
                this.bankCheck([], '', 'remove', {
                    success: function () {
                        self.payVerify = self.payVerify.filter(function (item) {
                            return item.payment_id !== payId;
                        });
                        self.$nextTick(function () {
                            self.bankCheckSetValue();
                        });
                    }
                });
            },
            //银行卡宾验证
            bankCheck: function (strs, mobile, action, fn) {
                var self = this;
                var params = {
                    action: action,
                    buyId: self.buyId
                };
                if (strs) {
                    params.strs = strs;
                }
                if (mobile) {
                    params.mobile = mobile;
                }
                loading.show();
                $.ajax({
                    url: '/order/pay-verify.html',
                    data: {
                        params: params
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.changeOrderInfo(res.data);
                        utils.isType(fn.success, 'function') && fn.success(res.data);
                    } else {
                        $.alert(res.msg);
                    }
                }).fail(function () {
                    $.alert('请求失败，请重试');
                }).always(function (res) {
                    loading.hide();
                    utils.isType(fn.always, 'function') && fn.always(res);
                });
            },
            //设置银行卡宾验证默认值
            bankCheckSetValue: function () {
                var payVerify = this.payVerify;
                if (payVerify.length) {
                    $('.pay_type .edit_area').each(function () {
                        var me = $(this),
                            id = parseInt(me.attr('data-id')),
                            isExists = payVerify.filter(function (item) {
                                return item.payment_id === id;
                            });
                        if (isExists.length) {
                            var currentItem = isExists[0],
                                mobile = currentItem.mobile,
                                strs = currentItem.strs;
                            me.find('.val').each(function (index) {
                                $(this).val(strs[index]);
                            }).end().find('.mobile').val(mobile);
                            me.find('input').prop('disabled', true).end().find('.confirm_btn').addClass('hide').end().find('.cancel_btn').removeClass('hide');
                        }
                    });
                } else {
                    $('.pay_type .edit_area').each(function () {
                        var me = $(this);
                        me.find('input').prop('disabled', false).end().find('.confirm_btn').removeClass('hide').end().find('.cancel_btn').addClass('hide');
                    });
                }
            },

            //切换是否使用发票
            toggleUseInvoice: function () {
                if (!this.isVirtual && !this.deliverID) {
                    $.alert('保存发票前，必须先确认收货地址');
                    return;
                }
                if (this.invoiceID) {
                    this.deleteInvoice();
                } else {
                    var lastInvoice = this.lastInvoice,
                        invoiceID = this.invoiceID,
                        invoiceType = this.invoiceType;
                    //当前没有发票 发票类型和已保存的类型一致
                    if (!invoiceID && invoiceType === parseInt(lastInvoice.invoiceType)) {
                        this.saveInvoice(lastInvoice);
                    } else {
                        this.isShowEditInvoice = !this.invoiceID;
                    }
                }
            },
            //保存发票
            saveInvoice: function (o) {
                var self = this,
                    invoiceContentList = this.invoiceContentList,
                    invoice = $.extend({}, self.invoice, {
                        invoiceType: self.invoiceType,
                        invoiceID: self.invoiceID,
                        buyId: self.buyId
                    });
                if (o !== 0) {
                    invoice = $.extend(invoice, {
                        invoiceID: o.invoiceID,
                        invoiceTitle: parseInt(o.invoiceTitle),
                        invoiceName: o.invoiceName,
                        getMsg: o.getMsg,
                        invoiceContent: o.invoiceContent,
                        taxNumber: o.taxNumber
                    });
                }
                if (invoice.invoiceTitle === 2) {
                    if (!invoice.invoiceName) {
                        self.invoiceError = '请填写单位名称';
                        return;
                    }
                    if (invoice.taxNumber && !/^[0-9a-zA-Z]{15,20}$/g.test(invoice.taxNumber)) {
                        self.invoiceError = '纳税人识别号格式不正确';
                        return;
                    }
                } else {
                    invoice.taxNumber = '';
                    invoice.invoiceName = '';
                }
                if (invoice.invoiceType === 2 && !utils.checkMobile(invoice.getMsg)) {
                    self.invoiceError = '请填写正确的手机号码';
                    return;
                }
                if (invoice.invoiceType === 1) {
                    invoice.getMsg = '';
                }

                //判断发票内容
                var isExistsInvoiceContent = invoiceContentList.some(function (item) {
                    return item.id === invoice.invoiceContent;
                });
                if (!isExistsInvoiceContent) {
                    if (o === 0) {
                        $.alert('请选择发票内容');
                    } else {
                        this.isShowEditInvoice = true;
                    }
                    return;
                }
                self.invoiceError = '';
                loading.show();
                self.invoiceIsFetching = true;
                $.ajax({
                    url: '/order/invoice.html',
                    data: {
                        params: invoice
                    }
                }).done(function (res) {
                    if (res.error === 0) {
                        self.changeOrderInfo(res.data);
                        self.isShowEditInvoice = false;
                        self.lastInvoice = $.extend({}, invoice);
                        self.invoice = $.extend({}, invoice);
                    } else {
                        $.alert(res.msg);
                        self.isShowEditInvoice = true;
                    }
                }).fail(function () {
                    $.alert('请求失败，请重试');
                }).always(function () {
                    loading.hide();
                    self.invoiceIsFetching = false;
                });
            },
            //删除发票
            deleteInvoice: function () {
                var self = this;
                if (self.invoiceID) {
                    loading.show();
                    $.ajax({
                        url: '/order/invoice.html',
                        data: {
                            params: {
                                invoiceAction: 'remove',
                                buyId: self.buyId,
                                invoiceID: self.invoiceID
                            }
                        }
                    }).done(function (res) {
                        if (res.error === 0) {
                            self.changeOrderInfo(res.data);
                        } else {
                            $.alert(res.msg);
                        }
                    }).fail(function () {
                        $.alert('请求失败，请重试');
                    }).always(function () {
                        loading.hide();
                    });
                }
            },

            //切换勾选升级aha4.0会员
            toggleAhaRight4: function () {
                this.editOrder({buy_aha4_switch: this.isCanUseAhaRight4 ? 'NO' : 'YES'});
            },
            //点击aha会员权益按钮
            clickShowAhaRight4List: function () {
                if (!this.checkPromotionUse('isUseAhaRight4List')) {
                    return;
                }
                this.isShowAhaRight4List = true;
            },
            //使用aha4.0权益
            useAhaRight4: function (sku_id, bargain_id) {
                if (!this.isCanUseAhaRight4) {
                    $.toast('请先升级aha会员');
                    return;
                }
                this.editOrder({use_sku_id: sku_id, sku_use_bargain_id: bargain_id});
            },

            //切换使用吐司一元加价购
            toggleToastOne: function () {
                this.editOrder({use_bargain_id_x: this.isUseToastOne ? 0 : this.toastOneInfo.bargain_id});
            },

            //修改订单
            editOrder: function (options, fn) {
                fn = fn || {};
                var self = this,
                    params = $.extend({buyId: self.buyId}, options);
                loading.show();
                $.ajax({
                    url: '/order/change.html',
                    data: {
                        params: params
                    }
                }).done(function (res) {
                    self.editOrderCb(res, fn);
                }).fail(function () {
                    $.alert('请求失败，请重试');
                }).always(function (res) {
                    utils.isType(fn.always, 'function') && fn.always(res);
                    loading.hide();
                });
            },
            //提交订单
            submitOrder: function () {
                var isVirtual = this.isVirtual,
                    deliverID = this.deliverID,
                    deliveryDate = this.deliveryDate,
                    startTime = this.startTime,
                    isNeedDeliveryDate = this.isNeedDeliveryDate,
                    isNeedTimeArea = this.isNeedTimeArea,
                    endTime = this.endTime;
                if (this.payCategory === 1 && this.buyAha4Flag > 20) {
                    $.alert('购买aha会员仅支持在线支付。');
                    return;
                }
                if (!isVirtual) {
                    if (!deliverID) {
                        $.alert('请先选择地址信息');
                        return;
                    }
                    if (isNeedDeliveryDate && !deliveryDate) {
                        $.alert('请先选择配送时间信息');
                        return;
                    }
                    if (isNeedTimeArea) {
                        if (!startTime || !endTime) {
                            $.alert('请先选择配送时间信息');
                            return;
                        }
                        if (startTime >= endTime) {
                            $.alert('开始配送时间不能晚于结束配送时间');
                            return;
                        }
                    }
                    if ((isNeedTimeArea || isNeedDeliveryDate) && this.editingTime.isEdit) {
                        $.alert('请先确定配送时间信息');
                        return;
                    }

                    /*********拆单开始*********/
                    if (this.isGroupBuy) {
                        var groupBuyDeliverID = this.groupBuyDeliverID,
                            groupBuyDeliveryDate = this.groupBuyDeliveryDate,
                            groupBuyStartTime = this.groupBuyStartTime,
                            groupBuyEndTime = this.groupBuyEndTime,
                            groupBuyDeliveryType = this.groupBuyDeliveryType,
                            groupBuyEditingTime = this.groupBuyEditingTime;
                        if (!groupBuyDeliverID) {
                            $.alert('请先选择牛奶地址信息');
                            return;
                        }
                        if (!groupBuyDeliveryDate) {
                            $.alert('请先选择牛奶配送时间信息');
                            return;
                        }
                        if (this.isNeedGroupBuyTimeArea && groupBuyDeliveryType === 1) {
                            if (!groupBuyStartTime || !groupBuyEndTime) {
                                $.alert('请先选择牛奶配送时间信息');
                                return;
                            }
                            if (groupBuyStartTime >= groupBuyEndTime) {
                                $.alert('牛奶开始配送时间不能晚于结束配送时间');
                                return;
                            }
                        }
                        if (groupBuyEditingTime.isEdit) {
                            $.alert('请先确定牛奶配送时间信息');
                            return;
                        }
                    }
                    /*********拆单结束*********/

                }
                if (!this.isCanUseInvoice && this.invoiceID) {
                    $.alert('您的订单商品不可开发票，请修改');
                    return;
                }
                this.isShowOverView = true;
            },
            //提交订单
            createOrder: function () {
                var self = this,
                    isVirtual = this.isVirtual,
                    deliverID = this.deliverID,
                    deliveryDate = this.deliveryDate,
                    startTime = this.startTime,
                    endTime = this.endTime,
                    isNeedDeliveryDate = this.isNeedDeliveryDate,
                    isNeedTimeArea = this.isNeedTimeArea,
                    params = {
                        buyId: this.buyId,
                        invoice_id: this.invoiceID,
                        total_cash_pay: this.orderInfo.total_cash_pay,
                        selectedCouponCode: this.selectedCouponCode,
                        groupBuy: {}
                    };
                if (!isVirtual) {
                    if (!deliverID) {
                        $.alert('请先选择地址信息');
                        return;
                    }
                    params.deliverID = deliverID;
                    if (isNeedDeliveryDate) {
                        if (!deliveryDate) {
                            $.alert('请先选择配送时间信息');
                            return;
                        }
                        params.send_date = deliveryDate;
                    }
                    if (isNeedTimeArea) {
                        if (!startTime || !endTime) {
                            $.alert('请先选择配送时间信息');
                            return;
                        }
                        if (startTime >= endTime) {
                            $.alert('开始配送时间不能晚于结束配送时间');
                            return;
                        }
                        params.send_start_time = timeHandler.intToStr(startTime);
                        params.send_end_time = timeHandler.intToStr(endTime);
                    }
                    if ((isNeedTimeArea || isNeedDeliveryDate) && this.editingTime.isEdit) {
                        $.alert('请先确定配送时间信息');
                        return;
                    }


                    /*********拆单开始*********/
                    if (this.isGroupBuy) {
                        var groupBuyDeliverID = this.groupBuyDeliverID,
                            groupBuyDeliveryDate = this.groupBuyDeliveryDate,
                            groupBuyStartTime = this.groupBuyStartTime,
                            groupBuyEndTime = this.groupBuyEndTime,
                            groupBuyDeliveryType = this.groupBuyDeliveryType;
                        if (!groupBuyDeliverID) {
                            $.alert('请先选择牛奶地址信息');
                            return;
                        }
                        params.groupBuy.deliverID = groupBuyDeliverID;
                        if (!groupBuyDeliveryDate) {
                            $.alert('请先选择牛奶配送时间信息');
                            return;
                        }
                        params.groupBuy.send_date = groupBuyDeliveryDate;
                        if (this.isNeedGroupBuyTimeArea && groupBuyDeliveryType === 1) {
                            if (!groupBuyStartTime || !groupBuyEndTime) {
                                $.alert('请先选择牛奶配送时间信息');
                                return;
                            }
                            if (groupBuyStartTime >= groupBuyEndTime) {
                                $.alert('牛奶开始配送时间不能晚于结束配送时间');
                                return;
                            }
                        }
                        params.groupBuy.send_start_time = timeHandler.intToStr(groupBuyStartTime);
                        params.groupBuy.send_end_time = timeHandler.intToStr(groupBuyEndTime);
                    }
                    /*********拆单结束*********/

                }
                if (!this.isCanUseInvoice && params.invoice_id) {
                    $.alert('您的订单商品不可开发票，请修改');
                    return;
                }
                loading.show();
                $.ajax({
                    url: '/order/save.html',
                    data: {
                        params: params
                    }
                }).done(function (res) {
                    var tip = null;
                    if (res.error === 0) {
                        //百度统计订单上报
                        if (GlobalConfig.site_env === 'prod') {
                            try {
                                var _orderInfo = {
                                    orderId: mixOrderNo(res.data.bill_no),
                                    orderTotal: self.orderInfo.total_sale_price || 0,
                                    item: []
                                };
                                self.goodsList.forEach(function (item) {
                                    _orderInfo.item.push({
                                        skuId: item.sku_id,
                                        skuName: item.goods_name,
                                        category: getGoodsType(item.goods_type),
                                        Price: item.sale_price,
                                        Quantity: item.amount
                                    });
                                });
                                _hmt.push(['_trackOrder', _orderInfo]);
                            } catch (e) {
                                console.error(e);
                            }
                        }

                        var cashPay = res.data.cash_pay || {},
                            orderNo = res.data.bill_no;
                        window.location = '/shop/payment.php?bill_no=' + orderNo + '&payType=' + cashPay.pay_id;
                    } else if (res.error === 32151) {
                        //优惠券不可用
                        tip = $.alert(res.msg, {
                            confirmFn: function () {
                                tip.hide();
                                self.removeCoupon(function () {
                                    self.getCouponList();
                                }, true);
                            }
                        });
                    } else if (res.error === 32152) {
                        //蛋糕券不可用
                        tip = $.alert(res.msg, {
                            confirmFn: function () {
                                tip.hide();
                                self.removeGoldCard(function () {
                                    self.getGoldCardList();
                                }, true);
                            }
                        });
                    } else {
                        $.alert(res.msg);
                    }
                }).fail(function () {
                    $.alert('订单提交失败，请重试');
                }).always(function () {
                    loading.hide();
                });
            },

            //修改结算页信息回调
            editOrderCb: function (res, fn) {
                fn = fn || {};
                var self = this;
                if (res.error === 0) {
                    if (res.data.promo_error_message) {
                        $.alert(res.data.promo_error_message, {autoClose: true});
                    }
                    self.changeOrderInfo(res.data);
                    //当已使用的aha值大于此单可用aha值时提示用户重新输入
                    if (self.orderInfo.max_pay_cashback < self.orderInfo.pay_balance_cashback) {
                        var alert = $.alert('可使用的aha值范围变更，请重新选择', {
                            confirmFn: function () {
                                alert.hide();
                                self.toggleUseEnjoyBalance(true);
                            }
                        });
                    }

                    utils.isType(fn.success, 'function') && fn.success(res.data);
                } else if (res.error === 1204) {
                    $.alert(res.msg, {
                        showClose: false,
                        confirmFn: function () {
                            history.back();
                        }
                    });
                } else {
                    if (utils.isType(fn.fail, 'function')) {
                        fn.fail(res);
                    } else {
                        $.alert(res.msg);
                    }
                }
            },

            //促销变更后用户点击提示确认键
            checkBargainChange: function () {
                var self = this,
                    bargain_change_tips = this.orderInfo.bargain_change_tips || '';
                if (bargain_change_tips) {
                    var dialog = $.alert(bargain_change_tips, {
                        confirmText: '知道了',
                        confirmFn: function () {
                            $.removeDialog(dialog.uuid);
                            self.editOrder({confirm_bargain_change: 'CONFIRM_AUTO'});
                        }
                    });
                }
            },

            //检查优惠互斥
            checkPromotionUse: function (key) {
                var self = this,
                    arr = [
                        {
                            key: 'isUsePassCardRight',
                            type: 1,
                            canRemove: true,
                            desc: '心享卡优惠'
                        },
                        {
                            key: 'selectedCouponCode',
                            type: 1,
                            canRemove: false,
                            desc: '优惠券'
                        },
                        {
                            key: 'selectedGoldCard',
                            type: 2,
                            canRemove: false,
                            desc: '蛋糕券'
                        },
                        {
                            key: 'selectedValueCard',
                            type: 2,
                            canRemove: false,
                            desc: '储值卡、专享兑换券'
                        },
                        {
                            key: 'isUseDiscount',
                            type: 1,
                            canRemove: true,
                            desc: '尊享团'
                        },
                        {
                            key: 'isUseVISARight',
                            type: 1,
                            canRemove: true,
                            desc: 'VISA贵宾专享8.3折'
                        },
                        {
                            key: 'isUseAhaRight4List',
                            type: 1,
                            canRemove: false,
                            desc: 'aha会员专享权益'
                        }
                    ],
                    condition = ['isUsePassCardRight', 'selectedCouponCode', 'selectedGoldCard', 'selectedValueCard', 'isUseDiscount', 'isUseVISARight', 'isUseAhaRight4List'],
                    flag = true,
                    selectedItem = '';
                var currentItem = arr.filter(function (item) {
                    return key === item.key
                })[0];
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    if (item.key !== key && $.inArray(item.key, condition) !== -1) {
                        var isUsed = item.type === 1 ? this[item.key] : this[item.key].length;
                        if (isUsed) {
                            flag = false;
                            selectedItem = item;
                            break;
                        }
                    }
                }
                if (!flag) {
                    if (selectedItem.canRemove) {
                        $.confirm(selectedItem.desc + '和' + currentItem.desc + '不可同享，切换后将取消现在所选择的优惠，是否确定切换？', function () {
                            $.removeDialog();
                            self.removePromotion(key);
                        });
                    } else {
                        $.alert(selectedItem.desc + '和' + currentItem.desc + '不可同享，请取消后使用');
                    }
                } else {
                    this.showCouponList = false;
                    this.showGoldCardList = false;
                    this.showValueCardList = false;
                    this.isShowAhaRight4List = false;
                }
                return flag;
            },
            //aha值和蛋糕券/储值卡、专享兑换券不能同时使用
            checkValueUse: function (key) {
                var arr = [
                        {
                            key: 'selectedGoldCard',
                            type: 2,
                            desc: '蛋糕券'
                        },
                        {
                            key: 'selectedValueCard',
                            type: 2,
                            desc: '储值卡、专享兑换券'
                        },
                        {
                            key: 'enjoyBalance',
                            type: 1,
                            desc: 'aha值'
                        }
                    ],
                    condition = ['selectedGoldCard', 'selectedValueCard', 'enjoyBalance'],
                    flag = true;
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    if (item.key !== key && $.inArray(item.key, condition) !== -1) {
                        var isUsed = item.key === 'enjoyBalance' ? this.orderInfo.total_balance_paid > 0 : this[item.key].length;
                        if (isUsed) {
                            flag = false;
                            break;
                        }
                    }
                }
                if (!flag) {
                    $.alert('aha值和蛋糕券/储值卡、专享兑换券不能同时使用');
                }
                return flag;
            },
            //修改订单后更新结算对象
            changeOrderInfo: function (data) {
                this.orderInfo = data;
                this.checkBargainChange();
                //储值卡、专享兑换券变动提示
                if (this.orderInfo.notice_msg) {
                    alert(this.orderInfo.notice_msg);
                }
            },
            //清除已选择的优惠
            removePromotion: function (key) {
                var self = this,
                    success;
                switch (key) {
                    case 'isUsePassCardRight':
                        success = function () {
                            self.togglePassCardRight();
                        };
                        break;
                    case 'selectedCouponCode':
                        success = function () {
                            self.showCouponList = true;
                        };
                        break;
                    case 'selectedGoldCard':
                        success = function () {
                            self.showGoldCardList = true;
                        };
                        break;
                    case 'selectedValueCard':
                        success = function () {
                            self.showValueCardList = true;
                        };
                        break;
                    case 'isUseDiscount':
                        success = function () {
                            self.toggleDiscount();
                        };
                        break;
                    case 'isUseVISARight':
                        success = function () {
                            self.toggleVISARight();
                        };
                        break;
                    default:
                        success = null;
                }
                if (this.isUsePassCardRight) {
                    this.togglePassCardRight(success);
                }
                if (this.isUseDiscount) {
                    this.toggleDiscount(success);
                }
                if (this.isUseVISARight) {
                    this.toggleVISARight(success);
                }
            },

            //切换是否无餐具
            toggleEnvironmentalProtection: function () {
                var self = this;
                this.editOrder({attr_S101010: this.isEnvironmentalProtection ? 'NEED' : 'NOT_NEED'}, {
                    success: function () {
                        self.$nextTick(function () {
                            if (self.isEnvironmentalProtection) {
                                $.toast('感谢您助力绿色环保行动');
                            }
                        });
                    }
                });
            },

            //跳转到周周配
            jumpToWeeklyArea: function () {
                $('html,body').animate({scrollTop: $('.group_buy_warp').offset().top});
            },

            //跳转到吐司一元购
            jumpToToastOne: function () {
                $('html,body').animate({scrollTop: $('.toast_one').offset().top - 60});
            }
        },
        computed: {
            //是否支持各种优惠
            promoFlag: function () {
                var promoFlag = this.orderInfo.promo_flag || 0,
                    copyPromoFlag = promoFlag;
                if (this.upgradePromo.flag > 1) {
                    // promoFlag = 0;
                }
                var flag = {
                    coupon: (promoFlag & 0x01) === 0x01
                };
                //撒娇订单仅支持优惠券
                if (!this.isHoney) {
                    flag = $.extend({}, flag, {
                        goldCard: (promoFlag & 0x02) === 0x02,
                        valueCard: (promoFlag & 0x04) === 0x04,
                        discount: (promoFlag & 0x08) === 0x08,
                        passCardGoods: (copyPromoFlag & 0x10) === 0x10,
                        visaGoods: (promoFlag & 0x20) === 0x20,
                        canCashOnDelivery: (copyPromoFlag & 0x00010000) === 0x00010000 //是否支持货到付款
                    });
                }
                return flag;
            },

            /** 是否只读模式显示卡券
             public static final int READONLY_CARDS = 0x0010;
             是否隐藏支付方式
             public static final int HIDDEN_PAYMENT = 0x0100;
             是否隐藏发票信息
             public static final int HIDDEN_INVOICE = 0x0200;
             **/
            extendFlag: function () {
                var flag = this.orderInfo.extend_flag || 0;
                return {
                    isReadOnlyCards: (flag & 0x0010) === 0x0010,
                    isHiddenPayment: (flag & 0x0100) === 0x0100,
                    isHiddenInvoice: (flag & 0x0200) === 0x0200,
                    isHiddenCoupon: (flag & 0x1000) === 0x1000,         //是否隐藏优惠券
                    isHiddenDjCard: (flag & 0x2000) === 0x2000,         //是否隐藏代金卡
                    isHiddenCzCard: (flag & 0x4000) === 0x4000,         //是否隐藏储值卡
                    isHiddenAha: (flag & 0x8000) === 0x8000             //是否隐藏aha值
                };
            },

            //是否使用了 心享卡优惠/优惠券/蛋糕券/储值卡、专享兑换券/尊享团/VISA贵宾专享8.3折/aha会员专享权益
            isUseAnyPromotion: function () {
                var self = this,
                    arr = [
                        {
                            key: 'isUsePassCardRight',
                            type: 1,
                            canRemove: true,
                            desc: '心享卡优惠'
                        },
                        {
                            key: 'selectedCouponCode',
                            type: 1,
                            canRemove: false,
                            desc: '优惠券'
                        },
                        {
                            key: 'selectedGoldCard',
                            type: 2,
                            canRemove: false,
                            desc: '蛋糕券'
                        },
                        {
                            key: 'selectedValueCard',
                            type: 2,
                            canRemove: false,
                            desc: '储值卡、专享兑换券'
                        },
                        {
                            key: 'isUseDiscount',
                            type: 1,
                            canRemove: true,
                            desc: '尊享团'
                        },
                        {
                            key: 'isUseVISARight',
                            type: 1,
                            canRemove: true,
                            desc: 'VISA贵宾专享8.3折'
                        },
                        {
                            key: 'isUseAhaRight4List',
                            type: 1,
                            canRemove: false,
                            desc: 'aha会员专享权益'
                        }
                    ];
                return arr.some(function (item) {
                    return item.type === 1 ? self[item.key] : self[item.key].length;
                });
            },

            //加价升级信息对象：flag: 1 未选择加价加价升级，但具有可选择项;  2 已选择加价加价升级,plus_price: 加价升级所需要支付的总金额
            upgradePromo: function () {
                return this.orderInfo.upgrade_promo || {};
            },
            //是否有可享受加价升级的商品
            isHasUpgradePriceGoods: function () {
                var flag = false;
                this.goodsList.forEach(function (item) {
                    if (item.use_bargain_id > 0) {
                        flag = true;
                    }
                });
                return flag;
            },

            //是否需要显示优惠价格提示 当页面需要配送日期和地址后显示，当确定配送日期和地址后隐藏
            isShowPromotionPriceTips: function () {
                var flag = true;
                if (this.isGroupBuy || this.isVirtual) {
                    flag = false;
                } else {
                    flag = false;
                    if (this.isNeedDeliveryDate) {
                        if (!(this.deliverID && this.deliveryDate)) {
                            flag = true;
                        }
                        if (this.isNeedTimeArea) {
                            if (!(this.startTime && this.endTime)) {
                                flag = true;
                            }
                        }
                        if (!this.editingTime.hasSet) {
                            flag = true;
                        }
                    }
                }
                return flag;
            },

            //是否已购买心享卡权益
            isPassCard: function () {
                return (this.orderInfo.user.privilege & 0x02) === 0x02;
            },
            //是否已经使用了心享卡权益
            isUsePassCardRight: function () {
                return this.orderInfo.promo_use_type === 5;
            },

            //是否使用了aha特权价格
            isUseVipPriceRights: function () {
                return (this.orderInfo.promo_use_type & 0x4000) !== 0;
            },

            //选中地址id
            deliverID: function () {
                var id = 0;
                if (this.orderInfo.user_address) {
                    id = this.orderInfo.user_address.deliver_id;
                }
                return id;
            },
            //当前地址
            selectedDeliver: function () {
                return this.orderInfo.user_address;
            },
            //省列表
            provinceArr: function () {
                return addressHandler.getAreaArr(this, this.allAddress, null, 'provinceid');
            },
            //城市列表
            cityArr: function () {
                return addressHandler.getAreaArr(this, this.provinceArr, this.address.provinceid, 'cityid');
            },
            //县区列表
            zoneArr: function () {
                return addressHandler.getAreaArr(this, this.cityArr, this.address.cityid, 'countyid');
            },
            //省名称
            provinceName: function () {
                return addressHandler.getAreaName(this, 'provinceid', this.provinceArr);
            },
            //城市名称
            cityName: function () {
                return addressHandler.getAreaName(this, 'cityid', this.cityArr);
            },
            //区县名称
            countyName: function () {
                return addressHandler.getAreaName(this, 'countyid', this.zoneArr);
            },

            //支付方式列表
            payList: function () {
                var isDev = GlobalConfig.site_env === 'dev';
                return this.defaultPayList.map(function (item) {
                    return $.extend(item, {
                        bg: isDev ? 'white' : 'url(' + GlobalConfig.imageRoot + '/' + item.berfor_image + ')',
                        payTypeName: isDev ? item.payTypeName : '',
                        payTypeID: parseInt(item.payTypeID),        //支付id
                        typeID: parseInt(item.typeID),              // 1货到付款 6在线支付
                        credit_cash: parseInt(item.credit_cash)     //  1信用卡支付 2现金或非信用卡
                    });
                });
            },
            //当前选中的支付类型列表
            currentPayList: function () {
                var payCategory = this.payCategory,
                    isCredit = this.isCredit;
                return this.payList.filter(function (item) {
                    return item.typeID === payCategory && (payCategory === 1 ? (isCredit ? item.credit_cash === 1 : item.credit_cash !== 1) : true);
                });
            },
            //是否显示隐藏货到付款按钮
            isShowCancelIsShowMorePayTypeBtn: function () {
                var payId = this.orderInfo.payment_id,
                    flag = false;
                if (payId) {
                    var currentInfo = this.defaultPayList.filter(function (item) {
                        return item.payTypeID === payId;
                    })[0];
                    flag = currentInfo.typeID === 6;
                }
                return flag;
            },
            //是否隐藏支付列表
            isHidePayment: function () {
                return this.checkoutConfig.hidePayment && this.orderInfo.deliver_fee <= 0 || this.extendFlag.isHiddenPayment;
            },

            //是否显示升磅弹框
            showUpList: function () {
                return this.upList.length && !this.upItemId;
            },
            //升磅商品
            upItemId: function () {
                return parseInt(this.orderInfo.promo_use_result && this.orderInfo.promo_use_result.upgrade_sku_id || '');
            },
            //可升磅商品列表
            upList: function () {
                var orderInfo = this.orderInfo,
                    upItem = orderInfo.promo_use_result && orderInfo.promo_use_result.upgrade_optional || {},
                    arr = [];
                for (var key in upItem) {
                    if (upItem.hasOwnProperty(key)) {
                        arr.push($.extend(upItem[key], {originId: parseInt(key)}));
                    }
                }
                return arr;
            },
            //商品列表
            //过滤原始列表，涉及到升磅商品
            goodsList: function () {
                var self = this,
                    orderInfo = this.orderInfo,
                    skuList = orderInfo.sku_list || [],
                    upItemId = this.upItemId,
                    upItem = {},
                    arr = [],
                    specialDinnerware = this.specialDinnerware,
                    preferentialMilk = this.preferentialMilk;
                if (upItemId && this.upList.length) {
                    upItem = this.upList.filter(function (item) {
                        return item.originId === upItemId;
                    })[0];
                }
                skuList.forEach(function (item) {
                    item.thirdPartyDelivery = item.goods_attrs && item.goods_attrs['101002'] && parseInt(item.goods_attrs['101002']) === 1 ? 1 : 0;
                    if (item.upgrade_flag === 1) {
                        item = $.extend({}, item, {
                            isUp: true,
                            display_spec: upItem.display_spec,
                            goodscut_num: (item.attributes && item.attributes.goods_cut > 0 || item.goodscut_flag === 2) ? upItem.goods_cut : item.goodscut_num,
                            standard_fitting: {
                                cp: upItem.dinnerware           //仅修改餐具数量
                            }
                        });
                    }
                    for (var key in specialDinnerware) {
                        if (specialDinnerware.hasOwnProperty(key)) {
                            if (parseInt(key) === item.sku_id) {
                                item.specialDinnerware = specialDinnerware[key];
                            }
                        }
                    }

                    //判断是否拆单商品
                    item.isGroupBuyGoods = false;
                    if (!self.isMilkWeeklyBuy && $.inArray(item.sku_id, self.groupBuyList) !== -1 || $.inArray(item.sku_id, milkGoods) !== -1) {
                        item = $.extend({}, item, {
                            isGroupBuyGoods: true
                        });
                    }

                    //商品优惠信息区分普通优惠和升磅优惠
                    var enjoy_bargains = item.enjoy_bargains || [],
                        orderEnjoyBargains = [],
                        upgradePriceInfo = {};
                    enjoy_bargains.forEach(function (promotionItem) {
                        if (!(promotionItem.hide_flag >= 3)) {
                            if (promotionItem.type !== 8) {
                                orderEnjoyBargains.push(promotionItem);
                            } else {
                                upgradePriceInfo = promotionItem;
                            }
                        }
                    });
                    item.orderEnjoyBargains = orderEnjoyBargains;
                    item.upgradePriceInfo = upgradePriceInfo;

                    arr.push(item);
                });

                var ids = arr.map(function (item) {
                    return item.sku_id;
                });
                preferentialMilk.forEach(function (item) {
                    if ($.inArray(item.sku_id, ids) === -1) {
                        arr.push($.extend(item, {upgradePriceInfo: {}}));
                    }
                });

                arr.forEach(function (item) {
                    item.isMilk = item.real_stock_flag === 1;
                    if (!item.isMilk && !(skuList.length > 1)) {
                        item.isMilk = self.isMilkWeeklyBuy;
                    }
                    item.isMilkUp = $.inArray(item.sku_id, self.preferentialMilkIdList) !== -1;
                });

                return arr;
            },

            //促销过滤掉吐司一元购促销
            enjoyBargains: function () {
                var self = this,
                    bargains = this.orderInfo.enjoy_bargains || [];
                return bargains.filter(function (item) {
                    return item.bargain_id !== self.toastOneInfo.bargain_id;
                });
            },

            //选中的优惠券code
            selectedCouponCode: function () {
                return this.orderInfo.promo_use_result && this.orderInfo.promo_use_result.coupon_code || '';
            },
            //选中的优惠券name
            selectedCouponName: function () {
                var name = '',
                    selectedCouponCode = this.selectedCouponCode;
                this.couponList.forEach(function (item) {
                    if (item.coupon_code === selectedCouponCode) {
                        name = item.coupon_name;
                    }
                });
                return name;
            },
            //aha专享优惠券使用金额
            vipCouponValue: function () {
                var val = 0;
                if (this.selectedCouponCode && parseInt(this.orderInfo.promo_use_result.vip_only_flag) === 1) {
                    val = this.orderInfo.promo_use_result.use_money;
                }
                return val;
            },

            //已选中的蛋糕券列表
            selectedGoldCard: function () {
                return this.orderInfo.promo_use_result && this.orderInfo.promo_use_result.cards || [];
            },
            //蛋糕券列表，包含用户已绑定券和未绑定但已经验证过的蛋糕券
            goldCardList: function () {
                var arr = [],
                    selectedGoldCard = this.selectedGoldCard,
                    bindGoldCardList = $.extend([], this.bindGoldCardList);
                var selectedGoldCardIds = selectedGoldCard.map(function (item) {
                        return item.card_no;
                    }),
                    bindGoldCardListIds = bindGoldCardList.map(function (item) {
                        return item.card_no;
                    });
                selectedGoldCard.forEach(function (item) {
                    if ($.inArray(item.card_no, bindGoldCardListIds) === -1) {
                        bindGoldCardList.unshift($.extend({}, item, {money: parseFloat(item.card_amount)}));
                    }
                });
                bindGoldCardList.forEach(function (item) {
                    item.isSelected = $.inArray(item.card_no, selectedGoldCardIds) !== -1;
                    arr.push(item);
                });
                return arr;
            },

            //已选中的储值卡、专享兑换券列表
            selectedValueCard: function () {
                var arr = [];
                var res = this.orderInfo.promo_use_result && this.orderInfo.promo_use_result.card_list || {};
                for (var i in res) {
                    if (res.hasOwnProperty(i)) {
                        arr.push(res[i]);
                    }
                }
                return arr;
            },
            //储值卡、专享兑换券列表
            valueCardArray: function () {
                var self = this,
                    arr = [],
                    selectedValueCard = this.selectedValueCard;
                this.valueCardList.forEach(function (item) {
                    var no = item.card_no;
                    item.used_amount = 0;
                    if (self.valueCardIsSelected(no)) {
                        var info = selectedValueCard.filter(function (item) {
                            return item.card_no === no;
                        })[0];
                        item = $.extend({}, item, {
                            balance: parseFloat(info.balance),
                            used_amount: parseFloat(info.used_amount),
                            isUsed: true
                        });
                    }
                    arr.push(item);
                });
                return arr;
            },

            //是否可以享受VISA折扣权益
            isHasVISARight: function () {
                return (this.orderInfo.user.privilege & 0x04) === 0x04;
            },
            //是否已经使用了VISA折扣
            isUseVISARight: function () {
                return this.orderInfo.promo_use_type === 6;
            },
            //VISA权益有效期：2018年1月1日-12月31日之内配送的订单可享受83折
            isVISARightInTime: function () {
                var deliveryDate = this.deliveryDate;
                return timeHandler.dateToInt(deliveryDate) >= timeHandler.dateToInt('2018-01-01') && timeHandler.dateToInt(deliveryDate) <= timeHandler.dateToInt('2018-12-31');
            },

            //是否可以使用尊享团88折权益
            isHasDiscountRight: function () {
                return (this.orderInfo.user.privilege & 0x01) === 0x01;
            },
            //是否已经使用了尊享团
            isUseDiscount: function () {
                return this.orderInfo.promo_use_type === 4;
            },

            //是否可以享受免运费权益
            isHasDeliverRight: function () {
                return this.orderInfo.deliver_coupon_flag > 0;
            },
            //是否已经使用了享受免运费权益
            isUseDeliverRight: function () {
                return this.orderInfo.deliver_coupon_flag === 2;
            },
            //享受免运费权益有效期：2018年12月31日
            isDeliverRightInTime: function () {
                var deliveryDate = this.deliveryDate;
                return timeHandler.dateToInt(deliveryDate) <= timeHandler.dateToInt('2019-01-01');
            },

            //判断是否可开发票
            isCanUseInvoice: function () {
                return this.orderInfo.max_invoice_amount > 0 && !this.extendFlag.isHiddenInvoice;
            },
            //发票类型
            invoiceType: function () {
                return this.orderInfo.invoice.electronic_flag === 0 ? 1 : 2;
            },
            //发票id
            invoiceID: function () {
                return this.orderInfo.invoice.invoice_id || 0;
            },

            //吐司一元加价购信息
            toastOneInfo: function () {
                return this.orderInfo.one_yuan_buy || {};
            },
            //是否已经使用了吐司一元加价购
            isUseToastOne: function () {
                return this.toastOneInfo.checked === 1;
            },

            //配送日期
            dateList: function () {
                var timeConfig = this.orderInfo.time_config,
                    arr = [],
                    date,
                    disabledDates = this.buyLimit || [];
                var startDate = timeHandler.dateToInt(timeConfig.start_date),
                    endDate = timeHandler.dateToInt(timeConfig.end_date);
                for (var i = startDate; i <= endDate; i += 3600 * 24 * 1000) {
                    date = utils.formatDate(i, 'yyyy-MM-dd');
                    if ($.inArray(date, disabledDates) === -1) {
                        arr.push(utils.formatDate(i, 'yyyy-MM-dd'));
                    }
                }
                return arr;
            },
            //配送起始时间
            startTimeArr: function () {
                return this.createTimeList(1);
            },
            //配送结束时间
            endTimeArr: function () {
                return this.createTimeList();
            },
            //当前选中日期信息
            currentDateInfo: function () {
                var timeConfig = this.orderInfo.time_config,
                    deliveryDate = timeHandler.dateToInt(this.deliveryDate),
                    currentItem = {
                        default_time: '10:00',
                        end_time: '22:00',
                        interval: 30,
                        start_time: '10:00'
                    };
                for (var i = 0; i < timeConfig.details.length; i++) {
                    var item = timeConfig.details[i];
                    if (deliveryDate >= timeHandler.dateToInt(item.start_date) && deliveryDate <= timeHandler.dateToInt(item.end_date)) {
                        currentItem = item;
                        break;
                    }
                }
                if (this.isMilkWeeklyBuy || this.isOnlyMilkOrder || this.isMilkAndGiftOrder) {
                    currentItem = {
                        default_time: '10:00',
                        end_time: '22:00',
                        interval: 360,
                        start_time: '10:00'
                    };
                }
                return currentItem;
            },
            //配送日期显示文字
            deliveryDateStr: function () {
                if (this.deliveryDate) {
                    return this.deliveryDate + '<span class="orange">（' + utils.getDay(timeHandler.dateToInt(this.deliveryDate)) + '）</span>';
                }
                return '请选择配送日期';
            },
            //是否可选配送日期
            isNeedDeliveryDate: function () {
                return (this.orderInfo.promo_flag & 0x00100000) !== 0;
            },
            //是否可选配送时间起止时间段
            isNeedTimeArea: function () {
                return (this.orderInfo.promo_flag & 0x00200000) !== 0;
            },

            //是否包含第三方配送商品
            isHasThirdPartyDeliveryGoods: function () {
                return this.goodsList.some(function (item) {
                    return item.thirdPartyDelivery === 1;
                });
            },

            //是否可选是否选择餐具
            isCanChooseEnvironmentalProtection: function () {
                return this.goodsList.some(function (item) {
                    var fitting = item.standard_fitting || {};
                    return fitting.cp > 0 || fitting.dc > 0 || fitting.lz > 0;
                });
            },
            //是否不要免费餐具
            isEnvironmentalProtection: function () {
                return this.orderInfo.bill_attributes && this.orderInfo.bill_attributes[101010];
            },

            //购买aha4.0权益标识      <=0表示不支持；11 99元可选，12 49元可选，21 99元已选，22 49元已选
            buyAha4Flag: function () {
                return this.orderInfo.buy_aha4_flag;
            },
            //是否可以选择aha4.0权益，aha4.0会员或者已勾选aha4.0会员可用
            isCanUseAhaRight4: function () {
                return this.buyAha4Flag <= 0 || this.buyAha4Flag > 20;
            },
            //aha会员权益
            ahaRight4List: function () {
                var list = [],
                    exists = [];
                this.goodsList.forEach(function (goods) {
                    var bargain_options = goods.bargain_options || [],
                        selectedBargainId = goods.enjoy_bargains && goods.enjoy_bargains.length && goods.enjoy_bargains[0].bargain_id;
                    bargain_options.forEach(function (bargain) {
                        if (bargain.promo_code && bargain.promo_code.indexOf('AHA4-UPGRADE') !== -1 && $.inArray(bargain.promo_code, exists) === -1) {
                            exists.push(bargain.promo_code);
                            list.push({
                                bargain_id: bargain.bargain_id,
                                promo_code: bargain.promo_code,
                                brief: bargain.brief,
                                sku_id: goods.sku_id,
                                promo_value: bargain.promo_value,
                                isSelected: bargain.bargain_id === selectedBargainId
                            });
                        }
                    });
                });

                var selectedDeliver = this.selectedDeliver || {};
                return list.map(function (item) {
                    var title, desc, warning;
                    if (item.promo_code === 'AHA4-UPGRADE-A') {
                        title = '生日嗨皮';
                        desc = ['「浓4.9」雪域系列蛋糕立减80元', '+Happy Birthday蜡烛1套'];
                    } else if (item.promo_code === 'AHA4-UPGRADE-B') {
                        title = '合家欢乐';
                        desc = ['赠喵叽叽曲奇（280g）'];
                        if (selectedDeliver.province === '北京' || selectedDeliver.province === '上海') {
                            desc = ['立减40元', '赠澄金牧场4.9全脂鲜牛奶2瓶'];
                            if (item.brief === 'aha4.0权益合家欢乐牛奶兑换券') {
                                warning = '*「澄金牧场4.9全脂鲜牛奶」缺货，订单完成后将补发兑换券以便另行兑换';
                            }
                        }
                    } else {
                        title = '下午茶畅享';
                        desc = ['环游世界蛋糕免费加大', '2-4人食升级为5-8人食'];
                    }
                    return $.extend({}, item, {
                        title: title,
                        desc: desc,
                        warning: warning
                    });
                });
            },
            //是否使用了aha会员权益
            isUseAhaRight4List: function () {
                return this.orderInfo.promo_use_type === 0x8000;
            },
            //aha4.0最大可抵扣金额
            maxAhaRights4Value: function () {
                var max = 0;
                this.ahaRight4List.forEach(function (item) {
                    if (item.promo_value > max) {
                        max = item.promo_value;
                    }
                });
                return max;
            },

            //是否是单独的牛奶订单，并且不是牛奶周周配订单
            isOnlyMilkOrder: function () {
                return this.goodsList.every(function (item) {
                    return item.isMilk;
                });
            },

            //是否是单瓶牛奶加非冷链类商品合买且不去呀拆单
            isMilkAndGiftOrder: function () {
                return !groupBuy && this.goodsList.some(function (item) {
                    return item.isMilk;
                }) && !this.goodsList.some(function (item) {
                    return item.goods_type === 1;
                });
            },

            /*************牛奶预售周周配*************/
            //是否是牛奶周周配
            isMilkWeeklyBuy: function () {
                return window.groupBuy && window.groupBuy.activity_type === 10;
            },
            //牛奶周周配商品信息，返回拆单商品信息和配送间隔天数
            milkWeeklyGoodsInfo: function () {
                var arr = [],
                    cycle = 0;
                if (groupBuy) {
                    var goodsList = groupBuy.goodsList,
                        goodsId = groupBuy.goods && groupBuy.goods.length && groupBuy.goods[0].toString();
                    for (var key in goodsList) {
                        if (goodsList.hasOwnProperty(key) && key.toString() === goodsId) {
                            arr = goodsList[key] || [];
                            cycle = parseInt(arr[0] && arr[0].cycle);
                        }
                    }
                }
                return {
                    goodsList: arr,
                    cycle: parseInt(arr[0] && arr[0].cycle)
                };
            },
            //周周配牛奶剩余保质期
            milkLastQualityTime: function () {
                var idx = 0,
                    deliveryDate = this.deliveryDate;
                if (deliveryDate) {
                    this.dateList.forEach(function (item, index) {
                        if (item === deliveryDate) {
                            idx = index;
                        }
                    });
                }
                return groupBuy.quality - idx;
            },
            //牛奶周周配配送次数是否大于1，大于1次时需要做拆单处理，需要显示牛奶日历弹窗和配送次数文案
            isMilkWeeklyMoreThanOnce: function () {
                return this.milkWeeklyGoodsInfo.goodsList.length > 1;
            },
            //牛奶周周配选定配送日期后的提示文案
            milkDeliveryStr: function () {
                var str = '',
                    deliveryDate = this.deliveryDate;
                if (this.isMilkGroupBuy) {
                    deliveryDate = this.groupBuyDeliveryDate;
                }
                if (deliveryDate) {
                    str = '配送时间选定为每' + utils.getDay(timeHandler.dateToInt(deliveryDate)) + '，共配送' + this.milkWeeklyGoodsInfo.goodsList.length + '次';
                }
                if (this.isMilkWeeklyBuyAndToastWeeklyBuy) {
                    str = '吐司商品跟随牛奶前4周一起配送';
                }
                return str;
            },
            //是否是牛奶周周配和吐司周周配共同购买
            isMilkWeeklyBuyAndToastWeeklyBuy: function () {
                var arr = [],
                    flag = false;
                if (groupBuy) {
                    var goodsList = groupBuy.goodsList;
                    for (var key in goodsList) {
                        if (goodsList.hasOwnProperty(key)) {
                            arr = goodsList[key] || [];
                            arr.forEach(function (item) {
                                if (parseInt(item.groupType) === 1) {
                                    flag = true;
                                }
                            });
                        }
                    }
                }
                return flag;
            },
            /*************牛奶预售周周配*************/

            /*************牛奶加价购*************/
            //是否显示牛奶购买弹窗
            isCanShowMilkGoodsTips: function () {
                var flag = false;
                if (this.isShowMilkGoodsTips && this.preferentialMilk.length) {
                    var key = 'pc_milk_190412' + encodeURIComponent(this.buyId);
                    if (!sessionStorage.getItem(key)) {
                        flag = true;
                        sessionStorage.setItem(key, 'isSet');
                        setTimeout(function () {
                            var targetDom = $('.milk_goods');
                            $('html,body').animate({scrollTop: targetDom.offset().top - ($(window).height()) / 2}, 300);
                        }, 0);
                    }
                }
                return flag;
            },
            /*************牛奶加价购*************/

            /*********拆单开始*********/
            //是否是拆分单
            isGroupBuy: function () {
                return this.groupBuyList.length && this.activityType !== 10;
            },

            //是否是套餐牛奶拆分单
            isMilkGroupBuy: function () {
                return this.isGroupBuy && this.activityType === 20;
            },

            //和牛奶一块拆单时，甜品取冷链地址，但不可选配送日期，返回原始配送类型
            groupBuyOriginDeliverType: function () {
                return this.orderInfo.deliver_type;
            },

            //是否需要在页面滚动时弹出配送信息提示
            isNeedShowWeeklyJump: function () {
                return this.isMilkGroupBuy;
            },

            //拆单是否需要时间段
            isNeedGroupBuyTimeArea: function () {
                return true;
            },

            //拆单地址
            groupBuyAddress: function () {
                var address = {},
                    orderInfo = this.orderInfo,
                    groupBuy = this.groupBuy;
                if (this.isGroupBuy) {
                    address = orderInfo.groupBuy && orderInfo.groupBuy.user_address || {};
                    if (!address.deliver_id) {
                        address = groupBuy.user_address || {};
                    }
                }
                return address;
            },
            //拆单商品地址id
            groupBuyDeliverID: function () {
                return this.groupBuyAddress.deliver_id || 0;
            },

            //拆单商品配送日期列表
            groupBuyDateList: function () {
                var arr = [],
                    date,
                    groupBuy = this.orderInfo.groupBuy || this.groupBuy;
                //如果是周周配拆单，取服务端返回的日期列表
                if (this.isMilkGroupBuy) {
                    var _arr = [];
                    if (groupBuy.realStock.length) {
                        _arr = groupBuy.realStock.map(function (item) {
                            return item.send_date;
                        });
                    }
                    return _arr;
                }
                var startDate = timeHandler.dateToInt(groupBuy.send_start_date),
                    endDate = timeHandler.dateToInt(groupBuy.send_end_date);
                for (var i = startDate; i <= endDate; i += 3600 * 24 * 1000) {
                    date = utils.formatDate(i, 'yyyy-MM-dd');
                    arr.push(utils.formatDate(i, 'yyyy-MM-dd'));
                }
                return arr;
            },
            //拆单商品配送开始时间段
            groupBuyStartTimeArr: function () {
                return this.createGroupBuyTimeList(true);
            },
            //拆单商品配送结束时间段
            groupBuyEndTimeArr: function () {
                return this.createGroupBuyTimeList();
            },

            //拆单商品配送日期描述
            groupBuyDeliveryDateStr: function () {
                if (this.groupBuyDeliveryDate) {
                    return this.groupBuyDeliveryDate + '<span class="orange">（' + utils.getDay(timeHandler.dateToInt(this.groupBuyDeliveryDate)) + '）</span>';
                }
                return '请选择配送日期';
            },
            //是否显示第三方配送描述
            isGroupBuyDeliveryTogether: function () {
                return this.deliveryDate === this.groupBuyDeliveryDate && this.deliverID === this.groupBuyDeliverID;
            },

            //拆单商品是否可以更改商品数量
            disableEditAmount: function () {
                return groupBuy && this.activityType === 4;
            },

            //周周配子商品
            childGoods: function () {
                var date = this.groupBuyDeliveryDate,
                    groupBuy = this.orderInfo.groupBuy || window.groupBuy || {},
                    list = [];
                if (date && groupBuy.goodsList) {
                    var goodsList = groupBuy.goodsList || [];
                    var time = timeHandler.dateToInt(date);
                    for (var i = 0; i < goodsList.length; i++) {
                        var targetTime = time + 60 * 60 * 24 * 1000 * 7 * i;
                        list.push({
                            time: utils.formatDate(targetTime, 'MM-dd') + ' ' + utils.getDay(targetTime),
                            title: goodsList[i].title
                        });
                    }
                }
                return list;
            }
            /*********拆单结束*********/
        },
        watch: {
            //日期更改时检查配送时间段的有效性
            deliveryDate: function (newDate, oldDate) {
                var self = this;
                self.checkTimeArea();
                self.$nextTick(function () {
                    if (!self.isVISARightInTime && self.isUseVISARight) {
                        $.alert('仅2018年1月1日-12月31日配送的订单可享受VISA83折，如要使用当前日期，请先取消VISA83折优惠', {
                            confirmFn: function () {
                                $.removeDialog();
                                self.deliveryDate = oldDate;
                            }
                        });
                    }
                });
                if (!newDate) {
                    this.editingTime = $.extend(this.editingTime, {
                        isEdit: true,
                        hasSet: false
                    });
                }
            },
            //如果开始时间比结束时间大，结束时间改为开始时间+时间间隔
            startTime: function (newVal, oldVal) {
                this.changeTimeAreaHook(newVal, oldVal, true);
            },
            //如果结束时间比开始时间小，开始时间改为结束时间-时间间隔
            endTime: function (newVal, oldVal) {
                this.changeTimeAreaHook(newVal, oldVal);
            },
            //地址更换后更新支付方式，并且检查已选择的时间段，有可能出现配送日期更改的情况，需要重新生成日期插件
            deliverID: function () {
                if (this.activityType !== 5) {
                    this.getPayList();
                }
                this.checkTimeArea();
            },
            //支付列表变更时判断已选支付是否可用
            payList: function () {
                if (!this.isPayTypeCanUse()) {
                    $.alert('当前地址不支持已选择的支付方式，请重新选择支付方式');
                }
                this.bankCheckSetValue();
            },
            //储值卡、专享兑换券显示验证手机弹窗时更新图形验证码
            isShowValueCardCheck: function (val) {
                if (val) {
                    this.getCaptcha();
                }
            },
            //编辑地址时隐藏地址列表弹窗
            'address.isEdit': function (val) {
                if (val) {
                    this.isShowAddressList = false;
                }
            },
            //大对象改变时判断是否需要更新不可配送日期
            orderInfo: function (val) {
                if (utils.isType(val.buyLimit, 'array')) {
                    this.buyLimit = val.buyLimit;
                }
            },

            //组合购日期为空时更改编辑状态
            groupBuyDeliveryDate: function (val) {
                if (!val) {
                    this.groupBuyEditingTime = $.extend(this.groupBuyEditingTime, {
                        isEdit: true,
                        hasSet: false
                    });
                }
            },
            //如果开始时间比结束时间大，结束时间改为开始时间+时间间隔
            groupBuyStartTime: function (newVal, oldVal) {
                this.changeTimeAreaHook(newVal, oldVal, true, true);
            },
            //如果结束时间比开始时间小，开始时间改为结束时间-时间间隔
            groupBuyEndTime: function (newVal, oldVal) {
                this.changeTimeAreaHook(newVal, oldVal, false, true);
            },

            //拆单切换地址时检查日期
            groupBuyDeliverID: function () {
                this.checkGroupBuyDate();
            },

            //使用蛋糕券后检查是否可升级成新雪域
            selectedGoldCard: function (newVal, oldVal) {
                var self = this;
                if (newVal.length > oldVal.length) {
                    self.checkSnowUpgrade(newVal[newVal.length - 1].card_no, {
                        success: function () {
                            self.isShowSnowUpgrade = true;
                        }
                    });
                }
            },
            //关闭升级弹窗时清空已选择的蛋糕卡
            isShowSnowUpgrade: function (val) {
                if (!val) {
                    this.lastCardNoForSnowUpdate = '';
                    this.currentSnowUpdateIndex = 0;
                }
            },
            //切换要升级的雪域时1)当前商品若未激活则激活2)除当前商品外，若已激活且未选中升级的新雪域则取消激活
            currentSnowUpdateIndex: function (newVal) {
                var self = this;
                this.snowUpgradeList.forEach(function (item, idx) {
                    if (newVal === idx) {
                        item.isChecked = true;
                    } else {
                        if (!item.upgradedGoods.sku_id) {
                            item.isChecked = false;
                        }
                        if (self.lastCardNoForSnowUpdate) {
                            item.isChecked = false;
                            item.upgradedGoods = {};
                        }
                    }
                });
            },

            //显示日历弹框
            isShowCalendar: function (val) {
                if (val) {
                    var deliveryDate = this.deliveryDate,
                        markList = {},
                        arr = this.milkWeeklyGoodsInfo.goodsList,
                        cycle = this.milkWeeklyGoodsInfo.cycle;
                    if (this.isMilkGroupBuy) {
                        deliveryDate = this.groupBuyDeliveryDate;
                    }
                    var startTime = timeHandler.dateToInt(deliveryDate);

                    for (var i = 0; i < arr.length; i++) {
                        var date = utils.formatDate(startTime + i * cycle * 3600 * 24 * 1000, 'yyyy-MM-dd');
                        markList[date] = '第' + (i + 1) + '周';
                    }
                    this.$nextTick(function () {
                        laydate.render({
                            value: deliveryDate,
                            elem: '#calendarTrigger',
                            position: 'static',
                            showBottom: false,
                            theme: 'grid',
                            mark: markList,
                            //初始化时调用
                            ready: function () {
                                checkDateIsUnnecessary();
                            },
                            //切换年、月时调用
                            change: function () {
                                checkDateIsUnnecessary();
                            },
                            //选择日期时调用
                            done: function () {
                                checkDateIsUnnecessary();
                            }
                        });
                    });
                }
            },

            //切换加价购牛奶tips
            isShowMilkGoodsTips: function (val) {
                if (val) {
                    this.$nextTick(function () {
                        setMilkGoodsTips();
                    });
                }
            }
        },
        filters: {
            //拼接商品主图
            mainPic: function (img) {
                return GlobalConfig.imageRoot + '/goods/' + img;
            },
            //价格
            salePrice: function (price) {
                price = price > 0 ? price : 0;
                return parseFloat(utils.currency(price));
            },
            //处理时间段
            parseTime: function (time) {
                if (!time) {
                    return '请选择';
                }
                return timeHandler.intToStr(time, true);
            },
            //配送日期显示加星期
            parseDeliveryDate: function (date) {
                if (!date) {
                    return '';
                }
                return date + '（' + utils.getDay(timeHandler.dateToInt(date)) + '）';
            }
        }
    });

    (function () {
        //购买牛奶提示
        $(window).scroll(function () {
            setMilkGoodsTips();
        }).resize(function () {
            setMilkGoodsTips();
        });
    })();
});

function setMilkGoodsTips() {
    var originDom = $('.milk_goods'),
        tips = $('#milkGoodsTips');
    if (!originDom.length || !tips.length) {
        return;
    }
    var goods_wrap = tips.find('.goods_wrap');
    if (!tips.length) {
        return;
    }
    var posData = originDom.offset(),
        left = posData.left,
        top = posData.top,
        scrollTop = $(window).scrollTop();
    goods_wrap.css({
        top: (top - scrollTop),
        left: left
    });
    tips.removeClass('hide');
}

//日期选择插件
function createDateList(isGroupBuy) {
    var dateList = orderObj.dateList || [],
        key = 'deliveryDate';
    if (isGroupBuy) {
        dateList = orderObj.groupBuyDateList || [];
        key = 'groupBuyDeliveryDate';
    }
    var dom = $('#' + key),
        parentDom = dom.parents('.delivery_date');
    dom.remove();
    $('<input type="text" id="' + key + '" readonly>').appendTo(parentDom);
    if (!dateList.length) {
        return;
    }
    laydate.render({
        elem: '#' + key,
        value: orderObj[key] || dateList[0],
        min: dateList[0],
        max: dateList[dateList.length - 1],
        showBottom: false,
        //初始化时调用
        ready: function () {
            checkDateIsDisabled(dateList);
        },
        //切换年、月时调用
        change: function () {
            checkDateIsDisabled(dateList);
        },
        //选择日期时调用
        done: function (val) {
            orderObj[key] = val;
        }
    });
}

//过滤不可配送日期
function checkDateIsDisabled(dateList) {
    $('[lay-ymd]').each(function () {
        var me = $(this),
            arr = me.attr('lay-ymd').split('-'),
            date = arr.map(function (item, index) {
                if (index !== 0) {
                    item = utils.subTime(item);
                }
                return item;
            }).join('-');
        if ($.inArray(date, dateList) === -1) {
            me.addClass('laydate-disabled');
        }
    });
}

//检查时间插件是否有多余行
function checkDateIsUnnecessary() {
    var trList = $('#calendar_pop tr');
    trList.each(function () {
        var me = $(this),
            tdList = me.find('td');
        me.removeClass('hide');
        if (tdList.length === tdList.filter(function (idx, td) {
            return $(td).hasClass('laydate-day-next') || $(td).hasClass('laydate-day-prev');
        }).length) {
            me.addClass('hide');
        }
    });
}

//ie9不支持flex布局、不支持placeholder，特殊处理
function IEPolyfill() {
    if (utils.getIEVersion() === 9) {
        $('.flex').each(function () {
            var wrap = $(this),
                len = wrap.find('.flex_item').length;
            wrap.addClass('clear_fix').find('.flex_item').css({
                float: 'left',
                width: parseFloat(100 / len) + '%'
            });
        });
    }
}

//todo 因为某些情况，如时间、地址等变动引起用户已输入储值卡、专享兑换券的变动，暂用原生alert提示给用户 notice_msg