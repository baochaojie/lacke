package com.jk.pojo;

public class HeartBean {

    private  Integer refreshmentsid;
    private String refreshmentsname;
    private String refreshmentsflavour;
    private Integer refreshmentsprice;
    private Integer refreshmentsspecification;
    private String refreshmentslength;
    private Integer refreshmentssweetness;
    private String refreshmentsimg;

    public Integer getRefreshmentsid() {
        return refreshmentsid;
    }

    public void setRefreshmentsid(Integer refreshmentsid) {
        this.refreshmentsid = refreshmentsid;
    }

    public String getRefreshmentsname() {
        return refreshmentsname;
    }

    public void setRefreshmentsname(String refreshmentsname) {
        this.refreshmentsname = refreshmentsname;
    }

    public String getRefreshmentsflavour() {
        return refreshmentsflavour;
    }

    public void setRefreshmentsflavour(String refreshmentsflavour) {
        this.refreshmentsflavour = refreshmentsflavour;
    }

    public Integer getRefreshmentsprice() {
        return refreshmentsprice;
    }

    public void setRefreshmentsprice(Integer refreshmentsprice) {
        this.refreshmentsprice = refreshmentsprice;
    }

    public Integer getRefreshmentsspecification() {
        return refreshmentsspecification;
    }

    public void setRefreshmentsspecification(Integer refreshmentsspecification) {
        this.refreshmentsspecification = refreshmentsspecification;
    }

    public String getRefreshmentslength() {
        return refreshmentslength;
    }

    public void setRefreshmentslength(String refreshmentslength) {
        this.refreshmentslength = refreshmentslength;
    }

    public Integer getRefreshmentssweetness() {
        return refreshmentssweetness;
    }

    public void setRefreshmentssweetness(Integer refreshmentssweetness) {
        this.refreshmentssweetness = refreshmentssweetness;
    }

    public String getRefreshmentsimg() {
        return refreshmentsimg;
    }

    public void setRefreshmentsimg(String refreshmentsimg) {
        this.refreshmentsimg = refreshmentsimg;
    }

    @Override
    public String toString() {
        return "HeartBean{" +
                "refreshmentsid=" + refreshmentsid +
                ", refreshmentsname='" + refreshmentsname + '\'' +
                ", refreshmentsflavour='" + refreshmentsflavour + '\'' +
                ", refreshmentsprice=" + refreshmentsprice +
                ", refreshmentsspecification=" + refreshmentsspecification +
                ", refreshmentslength='" + refreshmentslength + '\'' +
                ", refreshmentssweetness=" + refreshmentssweetness +
                ", refreshmentsimg='" + refreshmentsimg + '\'' +
                '}';
    }
}
