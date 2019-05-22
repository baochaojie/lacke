package com.jk.model;

import java.io.Serializable;

public class ShouhuoBean implements Serializable {
    private static final long serialVersionUID = 4972118624151222385L;

    private  Integer  id;

    private  String   phone;//收货手机号

    private  String   area;//收货地址

    private  String   shouhuodate;//收货日期

    private  String   name;//收货人名称

    private  String   youbian;//邮编

    private  Integer  userid;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
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
}
