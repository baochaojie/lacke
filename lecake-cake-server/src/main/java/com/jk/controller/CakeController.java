package com.jk.controller;

import com.jk.mapper.CakeMapper;
import com.jk.model.CakeNumber;
import com.jk.model.Flavor;
import com.jk.model.LecakeCake;
import com.jk.service.CakeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class CakeController  implements CakeService{

       @Autowired
       private CakeMapper cakeMapper;


       @Override
       @GetMapping("queryCake")
       @ResponseBody
       public List<LecakeCake> queryCake(Integer flavorId,Integer numberId) {
              System.out.println(flavorId+"------"+numberId);
              return     cakeMapper.queryCake(flavorId,numberId);
       }

       @Override
       @GetMapping("queryFlavor")
       @ResponseBody
       public List<Flavor> queryFlavor() {
            return cakeMapper.queryFlavor();
       }

       @Override
       @GetMapping("queryNumber")
       @ResponseBody
       public List<CakeNumber> queryNumber() {
              return cakeMapper.queryNumber();
       }

       @Override
       @GetMapping("queryById")
       @ResponseBody
       public LecakeCake queryById(Integer cakeId,Integer numberId,Integer flavorId) {
              System.out.println(cakeId+"+++"+numberId+"++++"+flavorId);
              return cakeMapper.queryById(cakeId,numberId,flavorId);
       }

       @Override
       @GetMapping("queryNumberTwo")
       @ResponseBody
       public List<CakeNumber> queryNumberTwo(Integer cakeId) {
              System.out.println(cakeId);
              return cakeMapper.queryNumberTwo(cakeId);
       }

       @Override
       @GetMapping("queryPrice")
       @ResponseBody
       public CakeNumber queryPrice(Integer cakeId, Integer numberId) {
              return cakeMapper.queryPrice(cakeId,numberId);
       }


}
