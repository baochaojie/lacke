package com.jk.pojo;

import lombok.Data;

@Data
public class MilkSpecification {

    private Integer specId;

    private Integer specificationTime;      //配送周期

    private Integer specificationCount;     //每次配送瓶数
}
