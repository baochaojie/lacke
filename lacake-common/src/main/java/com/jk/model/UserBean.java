package com.jk.model;

import java.io.Serializable;

public class UserBean implements Serializable {

    private static final long serialVersionUID = -4985090860625871022L;

        private   Integer  id;//用户d

        private   String   phone; //手机号

        private   Integer  status;//0 普通用户 1 会员

        private   Integer  discountcouponid;//优惠券id

        private    Integer  aha;//aha值

       private    Integer   order;

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public Integer getDiscountcouponid() {
        return discountcouponid;
    }

    public void setDiscountcouponid(Integer discountcouponid) {
        this.discountcouponid = discountcouponid;
    }

    public Integer getAha() {
        return aha;
    }

    public void setAha(Integer aha) {
        this.aha = aha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
