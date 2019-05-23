package com.jk.mapper;

import com.jk.pojo.Milk;
import com.jk.pojo.MilkSpecification;
import com.jk.pojo.Shop;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MilkMapper {

    List<Milk> queryTest();

    void addMilk(@Param("milk") Milk milk, @Param("milkSpecification") MilkSpecification milkSpecification, @Param("shop") Shop shop);
}
