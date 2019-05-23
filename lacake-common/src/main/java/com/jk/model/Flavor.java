package com.jk.model;

public class Flavor {
     //口味Id
     private  Integer flavorId;
     //口味名称
     private  String  flavorName;

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
        return "Flavor{" +
                "flavorId=" + flavorId +
                ", flavorName='" + flavorName + '\'' +
                '}';
    }

}
