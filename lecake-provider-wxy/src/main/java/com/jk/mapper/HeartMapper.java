package com.jk.mapper;

import com.jk.pojo.HeartBean;
import com.jk.pojo.LecakeCake;

import java.util.List;

public interface HeartMapper {
    List<HeartBean> toHeartBean();

    List<HeartBean> dangaolist();

    List<LecakeCake> todangao();

    HeartBean toselectid(int refreshmentsid);
}
