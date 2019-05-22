package com.jk.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController {

    @RequestMapping("toLogin")
    public  String TOLogin(){
        System.out.println("555555555555555");
        return  "lecakeLogin";
    }

    @RequestMapping("todingdan")
    public  String todingdan(){
        System.out.println("66666666666666");
        return  "dingdan";
    }


    @RequestMapping("tolecakePersonal")
    public  String tolecakePersonal(){
        System.out.println("777777777777");
        return  "lecakePersonal";
    }

    @RequestMapping("toarea")
    public  String toarea(){
        System.out.println("8888888888888");
        return  "cakearea";
    }

    @RequestMapping("toaddpage")
    public  String  toaddpage(){
        System.out.println("99999999999999");
        return "cakeadd";
    }
}
