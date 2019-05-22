package com.jk.controller;


import com.jk.dao.LoginDao;
import com.jk.model.UserBean;
import com.jk.service.LoginServiceqsj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jk.constantconf.ConstantConf;
import com.jk.utils.stutas;
import com.jk.utils.HttpClientUtil;
import com.jk.utils.Md5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import java.util.List;

@Controller
@RequestMapping("login")
public class LoginController implements LoginServiceqsj {

    @Autowired
    private LoginDao loginDao;

    @Autowired
    private RedisTemplate redisTemplate;

    //发送短信
    @RequestMapping("findduanxin")
    @ResponseBody
    @Override
    public String findduanxin(@RequestParam("phone") String phone) {

        /*用户手机号 key加上状态   判断用户是否登陆过*/
        if (phone == null) {
            return "手机号不能为空";
        }
        Boolean aBoolean = redisTemplate.hasKey(ConstantConf.SMS_Login_STATUS_CODE + phone);
        if (aBoolean) {
            Integer stua = (Integer) redisTemplate.opsForValue().get(ConstantConf.SMS_Login_STATUS_CODE + phone);
            if (stua == 1) {
                redisTemplate.opsForValue().set(ConstantConf.SMS_Login_STATUS_CODE + phone, stua, 24, TimeUnit.HOURS);
                return "次数已用完";
            }

            Object lock = redisTemplate.opsForValue().get(ConstantConf.SMS_LOGIN_LOCK + phone);
            if (lock != null) {
                return "距离上一次获取验证码不超过一分钟";
            }
           /* HashMap<String, Object> params = new HashMap<String, Object>();
            params.put("accountSid", ConstantConf.ACCOUNTSID);
            params.put("to", phone);
            String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
            params.put("timestamp", timestamp);
            String sig = Md5Util.getMd532(ConstantConf.ACCOUNTSID + ConstantConf.AUTH_TOKEN + timestamp);
            params.put("sig", sig);
            params.put("templateid", ConstantConf.TEMPLATEID);*/

            String str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
            Random r = new Random();
            String arr[] = new String[4];
            String b = "";
            for (int i = 0; i < 4; i++) {
                int n = r.nextInt(62);

                arr[i] = str.substring(n, n + 1);
                b += arr[i];

            }
           // params.put("param", b);
            System.out.println(b);
            //session.setAttribute(phone, b);
            redisTemplate.opsForValue().set(ConstantConf.SMS_LOGIN_CODE + phone, b, ConstantConf.SMS_LOGIN_CODE_TIME_OUT, TimeUnit.MINUTES);
          /*  String string = HttpClientUtil.post(ConstantConf.SMS_URL, params);
            JSONObject parseObject = JSON.parseObject(string);
            System.out.println(parseObject);
            String respCode = parseObject.getString("respCode");*/
            if ("00000".equals("00000")) {
                Integer stuw = (Integer) redisTemplate.opsForValue().get(ConstantConf.SMS_Login_STATUS_CODE + phone);
                Integer sta = stuw - 1;
                System.out.println(sta);
                redisTemplate.opsForValue().set(ConstantConf.SMS_Login_STATUS_CODE + phone, sta);
                //给当前用户加一个一分钟内不嫩获取验证码
                redisTemplate.opsForValue().set(ConstantConf.SMS_LOGIN_LOCK + phone, "lock", ConstantConf.SMS_LOGIN_LOCK_TIME_OUT, TimeUnit.MINUTES);
                return "发送验证码成功!";
            }
            return "验证码发送失败！";

        } else {
            Integer stua = (Integer) redisTemplate.opsForValue().get(ConstantConf.SMS_Login_STATUS_CODE + phone);
            if (stua != null) {
                if (stua == 1) {
                    redisTemplate.opsForValue().set(ConstantConf.SMS_Login_STATUS_CODE + phone, stua, 24, TimeUnit.HOURS);
                    return "次数已用完";
                }
            }
            Object lock = redisTemplate.opsForValue().get(ConstantConf.SMS_LOGIN_LOCK + phone);
            if (lock != null) {
                return "距离上一次获取验证码不超过一分钟";
            }
          /*  HashMap<String, Object> params = new HashMap<String, Object>();
            params.put("accountSid", ConstantConf.ACCOUNTSID);
            params.put("to", phone);
            String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
            params.put("timestamp", timestamp);
            String sig = Md5Util.getMd532(ConstantConf.ACCOUNTSID + ConstantConf.AUTH_TOKEN + timestamp);
            params.put("sig", sig);
            params.put("templateid", ConstantConf.TEMPLATEID);*/

            String str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
            Random r = new Random();
            String arr[] = new String[4];
            String b = "";
            for (int i = 0; i < 4; i++) {
                int n = r.nextInt(62);

                arr[i] = str.substring(n, n + 1);
                b += arr[i];

            }
           // params.put("param", b);
            System.out.println(b);
            //session.setAttribute(phone, b);
            redisTemplate.opsForValue().set(ConstantConf.SMS_LOGIN_CODE + phone, b, ConstantConf.SMS_LOGIN_CODE_TIME_OUT, TimeUnit.MINUTES);
           //String string = HttpClientUtil.post(ConstantConf.SMS_URL, params);
           // JSONObject parseObject = JSON.parseObject(string);
            //System.out.println(parseObject);
          //  String respCode = parseObject.getString("respCode");
            if ("00000".equals("00000")) {
                stutas stu = new stutas();
                Integer stuw = stu.getSts();
                System.out.println(stuw);
                redisTemplate.opsForValue().set(ConstantConf.SMS_Login_STATUS_CODE + phone, stuw);
                //给当前用户加一个一分钟内不嫩获取验证码
                redisTemplate.opsForValue().set(ConstantConf.SMS_LOGIN_LOCK + phone, "lock", ConstantConf.SMS_LOGIN_LOCK_TIME_OUT, TimeUnit.MINUTES);
                return "发送验证码成功!";
            }

            return "验证码发送失败！";
        }
    }


    @RequestMapping("quicklogin")
    @ResponseBody
    @Override
    public void queryUser(String phone) {

        //查询登陆的用户注册过没有
        UserBean userBean = loginDao.queryUser(phone);
        System.out.println(userBean);
        if(userBean == null ){
            //没有直接注册用户
             loginDao.saveUser(phone);
             UserBean userBean2  = loginDao.queryUser(phone);
             loginDao.savediscountcoupon(userBean2.getId());
        }


    }

    @RequestMapping("center")
    @ResponseBody
    @Override
    public List<UserBean> username(String userid) {


        return loginDao.username(userid);
    }

    @RequestMapping("discount")
    @ResponseBody
    @Override
    public String discount(String userid) {
        UserBean queryuserid = loginDao.queryuserid(userid);
        Integer id = queryuserid.getId();

        return loginDao.discount(id);
    }


   /* @RequestMapping("select")
    @ResponseBody
    @Override
    public List<UserBean> selecta() {
        return loginDao.selecta();
    }*/
}
