package com.jk.service;

import com.jk.model.UserBean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


public interface LoginServiceqsj {

    //发送短信
    @RequestMapping("login/findduanxin")
    @ResponseBody
    String findduanxin(@RequestParam("phone") String phone);

    @RequestMapping("login/quicklogin")
    @ResponseBody
    void queryUser(@RequestParam("phone") String phone);


    @RequestMapping("login/center")
    @ResponseBody
    List<UserBean> username(@RequestParam("userid") String userid);

    @RequestMapping("login/discount")
    @ResponseBody
    String discount(@RequestParam("userid") String userid);
}
