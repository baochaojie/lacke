package com.jk.service;

import com.jk.pojo.Milk;
import com.jk.pojo.MilkSpecification;
import com.jk.pojo.Shop;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;

public interface MilkService {
    List<Milk> queryTest();

    void addMilk(HashMap<String,Object> map);
}
