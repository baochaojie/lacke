package com.jk.controller;

import com.jk.mapper.CakeMapper;
import com.jk.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController implements TestService {

    @Autowired
    private CakeMapper cakeMapper;


    @Override
    @RequestMapping("test")
    @ResponseBody
    public String sout() {
        return "测试成功";
    }

}
