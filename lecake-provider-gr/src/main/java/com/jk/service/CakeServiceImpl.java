package com.jk.service;

import com.jk.mapper.CakeMapper;
import com.jk.pojo.LecakeCake;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CakeServiceImpl implements CakeService {

    @Autowired
    private CakeMapper cakeMapper;
    @Override
    public void addCake(LecakeCake lecakeCake) {
        cakeMapper.addCake(lecakeCake);
    }
}
