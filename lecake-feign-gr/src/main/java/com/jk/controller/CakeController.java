package com.jk.controller;

import com.jk.pojo.LecakeCake;
import com.jk.service.MilkServiceFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CakeController {

    @Autowired
    private MilkServiceFeign cakeServiceFeign;
    @RequestMapping("addCake")
    public void addCake(LecakeCake lecakeCake){

        cakeServiceFeign.addCake(lecakeCake);
    }
}
