package com.jk.service;


import com.jk.model.GoodsBean;
import com.jk.model.OrderBean;
import com.jk.model.ShouhuoBean;
import com.jk.model.UserBean;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface OrderServiceqsj {

    @GetMapping("queryorder")
    @ResponseBody
    List<OrderBean> queryOrder(@RequestParam("userid") String userid);

    @RequestMapping("shouhuoinfo")
    @ResponseBody
    List<ShouhuoBean> shouhuoinfo(@RequestParam("userid") String userid);


    @RequestMapping("goodsinfo")
    @ResponseBody
    List<GoodsBean> goodsinfo(@RequestParam("userid") String userid);


    @RequestMapping("savearea")
    @ResponseBody
    void savearea(@RequestBody ShouhuoBean shouhuoBean);


    @RequestMapping("queryuserid")
    @ResponseBody
    UserBean queryuserid(@RequestParam("userid") String userid);
}
