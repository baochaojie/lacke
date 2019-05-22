package com.jk.controller;


import com.jk.model.GoodsBean;
import com.jk.model.OrderBean;
import com.jk.model.ShouhuoBean;
import com.jk.model.UserBean;
import com.jk.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private RedisTemplate redisTemplate;


    /**
     * 订单详细信息查询
     */
    @GetMapping("queryorder")
    @ResponseBody
    public List<OrderBean> queryorder(HttpServletRequest request) {
        HttpSession session = request.getSession();
        String id = session.getId();

        Object userid = redisTemplate.opsForValue().get(id);
        return orderService.queryOrder(userid.toString());

    }

    /**
     * 收货详细信息查询
     */
    @RequestMapping("shouhuoinfo")
    @ResponseBody
    public  List<ShouhuoBean>  shouhuoinfo(HttpServletRequest request){
        HttpSession session = request.getSession();
        String id = session.getId();

        Object userid = redisTemplate.opsForValue().get(id);
        return orderService.shouhuoinfo(userid.toString());

    }


    /**
     * 商品详细信息查询
     */
    @RequestMapping("goodsinfo")
    @ResponseBody
    public  List<GoodsBean>  goodsinfo(HttpServletRequest request){
        HttpSession session = request.getSession();
        String id = session.getId();

        Object userid = redisTemplate.opsForValue().get(id);
        return orderService.goodsinfo(userid.toString());

    }

    /**
     * 新增地区
     *
     */
    @RequestMapping("savearea")
    @ResponseBody
    public  Boolean  savearea(ShouhuoBean shouhuoBean){

        try {

             orderService.savearea(shouhuoBean);
               return  true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }


    }


    @RequestMapping("queryuserid")
    @ResponseBody
    public UserBean queryuserid(HttpServletRequest request){
        HttpSession session = request.getSession();
        String id = session.getId();

        Object userid = redisTemplate.opsForValue().get(id);
        return orderService.queryuserid(userid.toString());

    }



}