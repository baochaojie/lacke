package com.jk.pojo;

import lombok.Data;

@Data
public class Shop {

    private Integer sid;

    private Integer mid;    //牛奶

    private Integer cakeId; //蛋糕id

    private Integer msid;       //配送周期

    private Integer scount=1;     //购物车中商品数量
}
