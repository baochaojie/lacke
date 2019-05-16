package com.jk.service;

import com.jk.mapper.MilkMapper;
import com.jk.pojo.Milk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
