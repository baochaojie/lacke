package com.jk.controller;

import com.alibaba.fastjson.JSON;
import com.jk.pojo.HeartBean;
import com.jk.pojo.LecakeCake;
import com.jk.service.HeartServicefegin;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Controller

public class HeartController {
    @Resource
    private RedisTemplate<String,Object> redisTemplate;


    @Autowired
    private HeartServicefegin HeartServicefegin;

    @RequestMapping("dangao")
    public String dangao(){
        return "xiaoshi";
}
    @RequestMapping("dangao2")
    public String dangao2(){
        return "xiangxi";
    }
    @RequestMapping("dangao3")
    public String dangao3(){
        return "shouye";
    }
    @RequestMapping("todangao")
    @ResponseBody
    public List<LecakeCake> todangao(){
        return HeartServicefegin.todangao();
    }

    @RequestMapping("toHeartBean")
    @ResponseBody
    public List<HeartBean> toHeartBean(){
        System.out.println("***********");
        String cakeys ="tree";  //redis库中创建的表名
        String listValue=(String)redisTemplate.opsForValue().get(cakeys);
        List<HeartBean> list=new ArrayList<HeartBean>();
        if(!StringUtils.isEmpty(listValue)) { //if  listValue非空
            System.out.println("走缓存啦");
            list=(List) JSON.parseArray(listValue);

        }else{
            //没有数据从mysql库中查找
            list = HeartServicefegin.toHeartBean();
            //list= redisTemplate.getForObject("http://springcloud-user-reg/commodtiy/queryCommodList",List.class);
            System.out.println(list+"走数据库");
            String   jsonString= JSON.toJSONString(list);
            redisTemplate.opsForValue().set(cakeys,jsonString,5, TimeUnit.MINUTES);
        }
        return list;
    }
    @RequestMapping("toselectid")
    @ResponseBody
    public HeartBean toselectid(int refreshmentsid){
        return HeartServicefegin.toselectid(refreshmentsid);
    }

}
