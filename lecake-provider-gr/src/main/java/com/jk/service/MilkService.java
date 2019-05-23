package com.jk.service;

import com.jk.pojo.Milk;

import java.util.HashMap;
import java.util.List;

public interface MilkService {
    List<Milk> queryTest();

    void addMilk(HashMap<String,Object> map);
}
