package com.jk.service;

import com.jk.pojo.LecakeCake;

import java.util.List;

public interface CakeService {
    void addCake(LecakeCake lecakeCake);

    List<LecakeCake> queryCake();

    List<LecakeCake> queryCakeById(Integer cakeId);

    List<LecakeCake> queryredisCake();
}
