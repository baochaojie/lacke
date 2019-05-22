package com.jk.model;

import java.io.Serializable;

public class ShouhuoBean implements Serializable {
    private static final long serialVersionUID = 4972118624151222385L;

    private  Integer  shouhuoid;

    private  String   phonee;//收货手机号

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

    public Integer getShouhuoid() {
        return shouhuoid;
    }

    public void setShouhuoid(Integer shouhuoid) {
        this.shouhuoid = shouhuoid;
    }

    public String getPhonee() {
        return phonee;
    }

    public void setPhonee(String phonee) {
        this.phonee = phonee;
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
