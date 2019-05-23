package com.jk.controller;

import com.jk.pojo.LecakeCake;
import com.jk.service.MilkServiceFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class CakeController {

    @Autowired
    private MilkServiceFeign cakeServiceFeign;
    @RequestMapping("addCake")
    public void addCake(LecakeCake lecakeCake){

        cakeServiceFeign.addCake(lecakeCake);
    }

    @RequestMapping("queryCake")
    @ResponseBody
    public List<LecakeCake> queryCake(){
        return cakeServiceFeign.queryCake();
    }

    @RequestMapping("queryCakeById")
    @ResponseBody
    public List<LecakeCake> queryCakeById(Integer cakeId){
        return cakeServiceFeign.queryCakeById(cakeId);
    }

    @RequestMapping("queryredisCake")
    @ResponseBody
    public List<LecakeCake> queryredisCake(){
        return cakeServiceFeign.queryredisCake();
    }
}
