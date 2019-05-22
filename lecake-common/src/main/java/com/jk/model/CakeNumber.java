package com.jk.model;

public class CakeNumber {
     //Id
     private  Integer  numberId;
     //ID
     private  Integer  flavorId;

     //名称
     private  String  numberName;
     //餐具
     private  String  tableware;
     //体积
     private  String  bulk;
     //重量
     private  Integer weight;
     //甜度
     private   Integer sweetness;

    public Integer getNumberId() {
        return numberId;
    }

    public void setNumberId(Integer numberId) {
        this.numberId = numberId;
    }

    public String getNumberName() {
        return numberName;
    }

    public void setNumberName(String numberName) {
        this.numberName = numberName;
    }

    public String getTableware() {
        return tableware;
    }

    public void setTableware(String tableware) {
        this.tableware = tableware;
    }

    public String getBulk() {
        return bulk;
    }

    public void setBulk(String bulk) {
        this.bulk = bulk;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getSweetness() {
        return sweetness;
    }

    public void setSweetness(Integer sweetness) {
        this.sweetness = sweetness;
    }

    public Integer getFlavorId() {
        return flavorId;
    }

    public void setFlavorId(Integer flavorId) {
        this.flavorId = flavorId;
    }

    @Override
    public String toString() {
        return "CakeNumber{" +
                "numberId=" + numberId +
                ", flavorId=" + flavorId +
                ", numberName='" + numberName + '\'' +
                ", tableware='" + tableware + '\'' +
                ", bulk='" + bulk + '\'' +
                ", weight=" + weight +
                ", sweetness=" + sweetness +
                '}';
    }
}
