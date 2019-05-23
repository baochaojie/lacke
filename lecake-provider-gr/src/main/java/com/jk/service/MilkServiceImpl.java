package com.jk.service;

import com.jk.mapper.MilkMapper;
import com.jk.pojo.Milk;
import com.jk.pojo.MilkSpecification;
import com.jk.pojo.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;

@Service
public class MilkServiceImpl implements MilkService {

    @Autowired
    private MilkMapper milkMapper;
    @Override
    public List<Milk> queryTest() {
        List<Milk> milks=milkMapper.queryTest();
        return milks;
    }

    @Override
    @PostMapping
    public void addMilk(HashMap<String,Object> map) {
        Milk milk= (Milk) map.get("milk");
        MilkSpecification milkSpecification= (MilkSpecification) map.get("milkSpecification");
        Shop shop= (Shop) map.get("shop");
        milkMapper.addMilk(milk,milkSpecification,shop);
    }
}
