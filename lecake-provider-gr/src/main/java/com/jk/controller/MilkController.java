package com.jk.controller;

import com.jk.pojo.Milk;
import com.jk.pojo.MilkSpecification;
import com.jk.pojo.Shop;
import com.jk.service.MilkService;
import com.jk.service.MilkServiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class MilkController implements MilkServiceApi {

    @Autowired
    private MilkService milkService;
    @Override
    public List<Milk> queryTest() {
        List<Milk> milks=milkService.queryTest();
        return milks;
    }

    @Override
    @PostMapping
    public void addMilk(@RequestBody HashMap<String,Object> map) {
        milkService.addMilk(map);
    }
}
