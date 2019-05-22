package com.jk.service;

import com.jk.model.CakeNumber;
import com.jk.model.Flavor;
import com.jk.model.LecakeCake;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface CakeService {

    @GetMapping("queryCake")
    List<LecakeCake> queryCake(@RequestParam("flavorId") Integer flavorId,@RequestParam("numberId")Integer numberId);
    @GetMapping("queryFlavor")
    List<Flavor> queryFlavor();
    @GetMapping("queryNumber")
    List<CakeNumber> queryNumber();
    @GetMapping("queryById")
    LecakeCake queryById(@RequestParam("cakeId")Integer cakeId, @RequestParam("numberId")Integer numberId,@RequestParam("flavorId") Integer flavorId);
    @GetMapping("queryNumberTwo")
    List<CakeNumber> queryNumberTwo(@RequestParam("cakeId")Integer cakeId);
    @GetMapping("queryPrice")
    CakeNumber queryPrice(@RequestParam("cakeId")Integer cakeId, @RequestParam("numberId")Integer numberId);
}
