package com.jk.model;

import java.io.Serializable;

public class OrderBean implements Serializable {

    private static final long serialVersionUID = 7574173546803972091L;
    private  Integer  id;

    private  String   orderid;//订单号

    private  String   orderdate;//订单日期

    private  Double   orderprice;//订单价格

    private  String   jifenprice;//积分价格

    private   double  commodity;//商品金额

    private   double  yunfei;//运费

    private   Integer  kehuojifen;//可获积分

    private    String  delivergoods;//配送方式

    private    String  message;//留言

    private   Integer  orderstatus;//状态  0:已完成 1已取消

    private   Integer  userid;

    private   Integer  paymentinfo;

    private   Integer  shouhuoinfoid;

    private  String   phone;//收货手机号

    private  String   area;//收货地址

    private  String   shouhuodate;//收货日期

    private  String   name;//收货人名称

    private  String   youbian;//邮编

    private   Integer  cakeId;

    private   String   cakeimg;

    private   String   goodsname;

    private   String   size;

    private   Double   goodsprice;

    private   Integer  count;

    private   Integer   qiefen;


    public Integer getShouhuoinfoid() {
        return shouhuoinfoid;
    }

    public void setShouhuoinfoid(Integer shouhuoinfoid) {
        this.shouhuoinfoid = shouhuoinfoid;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getShouhuodate() {
        return shouhuodate;
    }

    public void setShouhuodate(String shouhuodate) {
        this.shouhuodate = shouhuodate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYoubian() {
        return youbian;
    }

    public void setYoubian(String youbian) {
        this.youbian = youbian;
    }

    public Integer getCakeId() {
        return cakeId;
    }

    public void setCakeId(Integer cakeId) {
        this.cakeId = cakeId;
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

    public Integer getPaymentinfo() {
        return paymentinfo;
    }

    public void setPaymentinfo(Integer paymentinfo) {
        this.paymentinfo = paymentinfo;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getOrderstatus() {
        return orderstatus;
    }

    public void setOrderstatus(Integer orderstatus) {
        this.orderstatus = orderstatus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    public String getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(String orderdate) {
        this.orderdate = orderdate;
    }

    public Double getOrderprice() {
        return orderprice;
    }

    public void setOrderprice(Double orderprice) {
        this.orderprice = orderprice;
    }

    public String getJifenprice() {
        return jifenprice;
    }

    public void setJifenprice(String jifenprice) {
        this.jifenprice = jifenprice;
    }

    public double getCommodity() {
        return commodity;
    }

    public void setCommodity(double commodity) {
        this.commodity = commodity;
    }

    public double getYunfei() {
        return yunfei;
    }

    public void setYunfei(double yunfei) {
        this.yunfei = yunfei;
    }

    public Integer getKehuojifen() {
        return kehuojifen;
    }

    public void setKehuojifen(Integer kehuojifen) {
        this.kehuojifen = kehuojifen;
    }

    public String getDelivergoods() {
        return delivergoods;
    }

    public void setDelivergoods(String delivergoods) {
        this.delivergoods = delivergoods;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
