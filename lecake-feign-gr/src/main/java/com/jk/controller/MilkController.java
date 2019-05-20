package com.jk.controller;

import com.jk.pojo.Milk;
import com.jk.pojo.MilkSpecification;
import com.jk.pojo.Shop;
import com.jk.service.MilkServiceFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

@Controller
public class MilkController {

    @Autowired
    private MilkServiceFeign milkServiceFeign;
    @RequestMapping("queryTest")
    @ResponseBody
    public List<Milk> queryTest(){
        List<Milk> milks=milkServiceFeign.queryTest();
        return milks;
    }

    //将选购牛奶加入购物车
    @PostMapping("addMilk")
    @ResponseBody
    public void addMilk(Milk milk, MilkSpecification milkSpecification, Shop shop){

        HashMap<String,Object> map=new HashMap<>();
        map.put("milk",milk);
        map.put("milkSpecification",milkSpecification);
        map.put("shop",shop);
        milkServiceFeign.addMilk(map);
    }
}
