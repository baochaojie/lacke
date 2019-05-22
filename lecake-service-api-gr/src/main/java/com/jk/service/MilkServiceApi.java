package com.jk.service;

import com.jk.pojo.LecakeCake;
import com.jk.pojo.Milk;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.HashMap;
import java.util.List;

public interface MilkServiceApi {

    @RequestMapping("queryTest")
    @ResponseBody
    List<Milk> queryTest();

    @PostMapping("addMilk")
    @ResponseBody
    void addMilk(@RequestBody HashMap<String,Object> map);

    @RequestMapping("addCake")
    void addCake(@RequestBody LecakeCake lecakeCake);
}
