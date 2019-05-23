$(function () {
    //支付倒计时
    $('.countdown_wrap a').each(function () {
        var me = $(this),
            dom = me.find('time'),
            orderCreateTime = parseInt(me.attr('data-order-time'));
        new PaymentCountdown({
            dom: dom,
            orderCreateTime: orderCreateTime,
            callback: function () {
                me.remove();
            }
        });
    });
    //点击支付
    $('.countdown_wrap a').click(function () {
        var me = $(this),
            orderNo = me.attr('data-orderNo'),
            payTypeID = me.attr('data-payTypeID');
        globalPayment.pay(payTypeID, orderNo);
    });
});