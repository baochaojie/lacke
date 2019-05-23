package com.jk.dao;


import com.jk.model.GoodsBean;
import com.jk.model.OrderBean;
import com.jk.model.ShouhuoBean;
import com.jk.model.UserBean;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface OrderDao {

    @Select("SELECT tor.orderid ,\n" +
            "            tg.cakeimg ,tg.goodsname ,\n" +
            "            tg.size,tg.goodsprice ,\n" +
            "            tg.count ,\n" +
            "            tor.orderdate ,\n" +
            "            tor.orderprice ,tor.jifenprice  ,\n" +
            "            tor.commodity , tor.yunfei ,\n" +
            "            tor.kehuojifen , tor.delivergoods ,\n" +
            "            tor.orderstatus, ts.`name` ,\n" +
            "            ts.youbian ,ts.phone ,ts.area\n" +
            "            FROM  t_order tor\n" +
            "            LEFT JOIN t_shouhuoinfo ts on tor.shouhuoinfoid=ts.id\n" +
            "            LEFT JOIN t_goodsinfo tg on tor.cakeId=tg.id\n" +
            "            where  tor.userid = #{value}")
    List<OrderBean> queryorder(Integer  userid);

    @Select("select  id from  t_user where  phone=#{value}")
    UserBean queryid(String userid);

    @Select("SELECT * FROM  t_user t \n" +
            "\n" +
            "LEFT JOIN t_shouhuoinfo  s on  t.id =  s.userid\n" +
            "\n" +
            "where  t.id = #{value}")
    List<ShouhuoBean> shouhuoinfo(Integer id);



    @Select("SELECT * FROM  t_user t \n" +
            "\n" +
            "LEFT JOIN t_goodsinfo  g on  t.id =  g.userid\n" +
            "\n" +
            "where  t.id = #{value}")
    List<GoodsBean> goodsinfo(Integer id);

    @Insert("INSERT into  t_shouhuoinfo(phonee,area,name,youbian,userid,shouhuodate) values(#{phonee},#{area},#{name},#{youbian},#{userid},null)")
    void savearea(ShouhuoBean shouhuoBean);

    @Select("select  id from  t_user where  phone=#{value}")
    UserBean queryuserid(String userid);


    void delcakeById(Integer[] ids);

    @Select("select * from t_shouhuoinfo where  shouhuoid =#{value}")
    ShouhuoBean queryCakeByid(Integer id);

    @Update("update t_shouhuoinfo set name=#{name},area=#{area},phonee=#{phonee},youbian =#{youbian} where  shouhuoid = #{shouhuoid}")
    void update(ShouhuoBean shouhuoBean);
}
