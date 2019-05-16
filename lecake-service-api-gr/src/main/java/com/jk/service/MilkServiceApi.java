package com.jk.service;

import com.jk.pojo.Milk;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

public interface MilkServiceApi {

    @RequestMapping("queryTest")
    @ResponseBody
    List<Milk> queryTest();
}
