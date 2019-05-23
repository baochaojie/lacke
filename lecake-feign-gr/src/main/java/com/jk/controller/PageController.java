package com.jk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("toIndex")
    public String toIndex(){
        return "index";
    }
    //牛奶订购页面
    @RequestMapping("toLecakeSnack")
    public String toLecakeSnack(){
        return "lecakeSnack";
    }
    //蛋糕券页面
    @RequestMapping("toLecakeRoll")
    public String toLecakeRoll(){
        return "lecakeRoll";
    }

    //购物车页面
    @RequestMapping("toGouwuche")
    public String toGouwuche(){

        return "gouwuche";
    }
}
