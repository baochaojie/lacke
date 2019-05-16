package com.jk.controller;

import com.jk.pojo.Milk;
import com.jk.service.MilkServiceFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
