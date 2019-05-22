package com.jk.service;

import com.jk.pojo.HeartBean;
import com.jk.pojo.LecakeCake;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

public interface HeartServiceapi  {

    @RequestMapping("toHeartBean")
    List<HeartBean> toHeartBean();
    @RequestMapping("todangao")
    List<LecakeCake> todangao();
    @RequestMapping("toselecyid")
    HeartBean toselectid(int refreshmentsid);
}
