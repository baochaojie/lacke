package com.jk.controller;

import com.jk.pojo.LecakeCake;
import com.jk.pojo.Milk;
import com.jk.service.CakeService;
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
    @Autowired
    private CakeService cakeService;
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

    @Override
    public void addCake(@RequestBody LecakeCake lecakeCake) {
        cakeService.addCake(lecakeCake);
    }

    @Override
    public List<LecakeCake> queryCake() {

        return cakeService.queryCake();
    }

    @Override
    public List<LecakeCake> queryCakeById(@RequestBody Integer cakeId) {

        return cakeService.queryCakeById(cakeId);
    }

    @Override
    public List<LecakeCake> queryredisCake() {
        return cakeService.queryredisCake();
    }


}
