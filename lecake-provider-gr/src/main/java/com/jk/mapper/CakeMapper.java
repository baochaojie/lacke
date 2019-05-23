package com.jk.mapper;

import com.jk.pojo.LecakeCake;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface CakeMapper {

    void addCake(LecakeCake lecakeCake);

    List<LecakeCake> queryCake();

    @Select(" select\n" +
            "      c.cakeId as cakeId,\n" +
            "      c.cakeImg as cakeImg,\n" +
            "      c.cakeName as cakeName,\n" +
            "      cn.price    as   price,\n" +
            "      n.bulk    as bulk,\n" +
            "      GROUP_CONCAT(n.numberName)as numberName,\n" +
            "      n.sweetness as sweetness,\n" +
            "      GROUP_CONCAT(n.tableware)as tableware,\n" +
            "      n.weight    as weight,\n" +
            "      f.flavorId  as flavorId,\n" +
            "      f.flavorName as flavorName\n" +
            "      FROM\n" +
            "       cake_number cn  left join lecake_cake c  on  cn.cakeId=c.cakeId\n" +
            "      left join lecake_number n  on cn.numberId= n.numberId\n" +
            "      left join lecake_flavor f  on c.flavorId= f.flavorId\n" +
            "      where c.typecake=1 and c.cakeId=#{cakeId}\n" +
            "      GROUP BY c.cakeId")
    List<LecakeCake> queryCakeById(@Param("cakeId") Integer cakeId);
}
