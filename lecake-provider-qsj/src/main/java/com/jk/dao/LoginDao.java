package com.jk.dao;

import com.jk.model.UserBean;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface LoginDao {


   /* @Select("select * from t_user")
    List<UserBean> selecta();
*/
   //查询用户是否存在
    @Select("select * from t_user  where  phone=#{value}")
    UserBean queryUser(String phone);

    //新增用户到用户表
    @Insert("insert into  t_user(phone,status,aha) values(#{phone},0,0)")
    void saveUser(String phone);

    //第一次注册用户默认送优惠卷
    @Insert("insert into  t_user_discountcoupon(userid,discountcouponid)  values(#{userid},1)")
    void savediscountcoupon(Integer id);

    @Select("select * from t_user  where phone = #{value}")
    List<UserBean> username(String userid);


    @Select("select  count(discountcouponid)  from  t_user  t\n" +
            "LEFT JOIN  t_user_discountcoupon  d on   t.id = d.userid\n" +
            "where  t.id  = #{value}")
    String discount(Integer  id);

    @Select("select * from t_user  where  phone=#{value}")
    UserBean queryuserid(String userid);
}
