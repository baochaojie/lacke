package com.jk.controller;


import com.jk.dao.OrderDao;
import com.jk.model.GoodsBean;
import com.jk.model.OrderBean;
import com.jk.model.ShouhuoBean;
import com.jk.model.UserBean;
import com.jk.service.OrderServiceqsj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class OrderController implements OrderServiceqsj {

    @Autowired
    private OrderDao orderDao;

    /**
     *
     * 订单详细信息查询
     */
    @GetMapping("queryorder")
    @ResponseBody
    @Override
    public List<OrderBean> queryOrder(@RequestParam("userid") String userid) {

        UserBean queryid = orderDao.queryid(userid);
        Integer id = queryid.getId();
        return orderDao.queryorder(id);

    }

    /**
     * 收货详细信息查询
     */
    @RequestMapping("shouhuoinfo")
    @ResponseBody
    @Override
    public List<ShouhuoBean> shouhuoinfo(String userid) {

        UserBean queryid = orderDao.queryid(userid);
        Integer id = queryid.getId();
        return orderDao.shouhuoinfo(id);
    }

    /**
     * 商品详细信息查询
     */
    @RequestMapping("goodsinfo")
    @ResponseBody
    @Override
    public List<GoodsBean> goodsinfo(String userid) {

        UserBean queryid = orderDao.queryid(userid);
        Integer id = queryid.getId();
        return orderDao.goodsinfo(id);
    }

    @RequestMapping("savearea")
    @ResponseBody
    @Override
    public void savearea(@RequestBody ShouhuoBean shouhuoBean) {

        String youbian = shouhuoBean.getYoubian();
        if(youbian.equals("")){
            shouhuoBean.setYoubian(null);
        }

        orderDao.savearea(shouhuoBean);
    }

    @RequestMapping("queryuserid")
    @ResponseBody
    @Override
    public  UserBean queryuserid(@RequestParam("userid") String userid){

        return   orderDao.queryuserid(userid);
    }


}
