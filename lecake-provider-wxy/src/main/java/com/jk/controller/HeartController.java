package com.jk.controller;

import com.jk.mapper.HeartMapper;
import com.jk.pojo.HeartBean;
import com.jk.pojo.LecakeCake;
import com.jk.service.HeartServiceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class HeartController implements HeartServiceapi {

    @Autowired
    private RedisTemplate  redisTemplate;

    @Autowired
    private HeartMapper HeartMapper;
    @RequestMapping("toHeartBean")
    @ResponseBody
public List<HeartBean> toHeartBean(){

        return HeartMapper.toHeartBean();
}

    @Override
    @RequestMapping("todangao")
    @ResponseBody
    public List<LecakeCake> todangao() {

        return HeartMapper.todangao();
    }

    @Override
    @RequestMapping("toselectid")
    @ResponseBody
    public HeartBean toselectid(int refreshmentsid) {

        return HeartMapper.toselectid(refreshmentsid);
    }


}
