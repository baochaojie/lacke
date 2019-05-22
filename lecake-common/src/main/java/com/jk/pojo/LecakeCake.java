package com.jk.pojo;

public class LecakeCake {
      //Id
      private  Integer   cakeId;
      //图片
      private  String    cakeImg;
      //价格
      private  Integer   price;
      //蛋糕名称
      private  String    cakeName;
      //促销Id
      private  Integer   promotionId;

      //口味Id
      private  Integer   flavorId;
      //口味名称
      private  String    flavorName;
      //重量
      private  Integer   weight;
      //
      private  String    bulk;
      //甜度
      private  String  sweetness;

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getBulk() {
        return bulk;
    }

    public void setBulk(String bulk) {
        this.bulk = bulk;
    }

    public String getSweetness() {
        return sweetness;
    }

    public void setSweetness(String sweetness) {
        this.sweetness = sweetness;
    }

    public Integer getCakeId() {
        return cakeId;
    }

    public void setCakeId(Integer cakeId) {
        this.cakeId = cakeId;
    }

    public String getCakeImg() {
        return cakeImg;
    }

    public void setCakeImg(String cakeImg) {
        this.cakeImg = cakeImg;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getCakeName() {
        return cakeName;
    }

    public void setCakeName(String cakeName) {
        this.cakeName = cakeName;
    }

    public Integer getPromotionId() {
        return promotionId;
    }

    public void setPromotionId(Integer promotionId) {
        this.promotionId = promotionId;
    }

    public Integer getFlavorId() {
        return flavorId;
    }

    public void setFlavorId(Integer flavorId) {
        this.flavorId = flavorId;
    }

    public String getFlavorName() {
        return flavorName;
    }

    public void setFlavorName(String flavorName) {
        this.flavorName = flavorName;
    }


    @Override
    public String toString() {
        return "LecakeCake{" +
                "cakeId=" + cakeId +
                ", cakeImg='" + cakeImg + '\'' +
                ", price=" + price +
                ", cakeName='" + cakeName + '\'' +
                ", promotionId=" + promotionId +
                ", flavorId=" + flavorId +
                ", flavorName='" + flavorName + '\'' +
                ", weight=" + weight +
                ", bulk='" + bulk + '\'' +
                ", sweetness='" + sweetness + '\'' +
                '}';
    }
}
