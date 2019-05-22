package com.jk.model;

import java.io.Serializable;

public class GoodsBean implements Serializable {

    private static final long serialVersionUID = 7266504761446064994L;

      private   Integer  id;

      private   String   cakeimg;

      private   String   goodsname;

      private   String   size;

      private   Double   goodsprice;

      private   Integer  count;

      private   Integer   qiefen;

      private   Integer  userid;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCakeimg() {
        return cakeimg;
    }

    public void setCakeimg(String cakeimg) {
        this.cakeimg = cakeimg;
    }

    public String getGoodsname() {
        return goodsname;
    }

    public void setGoodsname(String goodsname) {
        this.goodsname = goodsname;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Double getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(Double goodsprice) {
        this.goodsprice = goodsprice;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getQiefen() {
        return qiefen;
    }

    public void setQiefen(Integer qiefen) {
        this.qiefen = qiefen;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }
}
