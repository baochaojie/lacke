package com.jk.mapper;

import com.jk.model.CakeNumber;
import com.jk.model.Flavor;
import com.jk.model.LecakeCake;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CakeMapper {
    /**
     * 查询蛋糕
     * @return
     */
    List<LecakeCake> queryCake(@Param("flavorId") Integer flavorId,@Param("numberId")Integer numberId);

    /**
     * 查询口味
     * @return
     */
    List<Flavor> queryFlavor();

    /**
     * 查询人数
     * @return
     */
    List<CakeNumber> queryNumber();
}
