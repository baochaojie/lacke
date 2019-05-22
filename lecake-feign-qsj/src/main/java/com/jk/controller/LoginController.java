package com.jk.controller;



import com.jk.constantconf.ConstantConf;
import com.jk.model.UserBean;
import com.jk.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;


@Controller
@RequestMapping("login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private RedisTemplate redisTemplate;

    /*  @RequestMapping("select")
      @ResponseBody
      public  synchronized List<UserBean> select(){

          return loginService.selecta();
      }*/

   //发送短信
    @RequestMapping("findduanxin")
    @ResponseBody
    public  String findduanxin( String phone) {

        return  loginService.findduanxin(phone);
    }

    //短信登录
    @RequestMapping("quicklogin")
    @ResponseBody
    public String quicklogin(String phone, String code, HttpServletRequest request) {
        HttpSession session = request.getSession();
        //Object attribute = session.getAttribute(phone);
        Object attribute = redisTemplate.opsForValue().get(ConstantConf.SMS_LOGIN_CODE + phone);
        System.out.println(attribute);
        if (!code.equals(attribute.toString()) && !code.equals("")) {
            return "验证码不存在";
        }
        //把用户存到redis
        redisTemplate.opsForValue().set(ConstantConf.SMS_LOGIN_PHONE + phone, phone);
        //判断该用户是否存在，如果存在就不新增返回登陆成功
        loginService.queryUser(phone);


        redisTemplate.opsForValue().set(session.getId(), phone,30, TimeUnit.MINUTES);
        session.setAttribute(session.getId(), phone);
        System.out.println("登录成功"+session.getId());

        return  "登录成功";
    }

    /**
     * 个人中心
     */
    @RequestMapping("center")
    @ResponseBody
    public  List<UserBean>  userphone(HttpServletRequest request){

        HttpSession session = request.getSession();
        String id = session.getId();

        Object  userid = redisTemplate.opsForValue().get(id);
        List<UserBean> username = loginService.username(userid.toString());

        return  username;
    }

    /**
     * 优惠卷个数查询
     */
    @RequestMapping("discount")
    @ResponseBody
    public  String  discoune(HttpServletRequest request){


        HttpSession session = request.getSession();
        String id = session.getId();

        Object  userid = redisTemplate.opsForValue().get(id);


        return  loginService.discount(userid.toString());
    }

}
