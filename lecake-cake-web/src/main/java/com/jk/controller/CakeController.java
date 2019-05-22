package com.jk.controller;

import com.jk.model.CakeNumber;
import com.jk.model.Flavor;
import com.jk.model.LecakeCake;
import com.jk.service.CakeServiceWeb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("cakeweb")
public class CakeController  {

      @Autowired
      private CakeServiceWeb cakeServiceWeb;

      @RequestMapping("queryCake")
      @ResponseBody
      public List<LecakeCake> queryCake(@RequestParam("flavorId") Integer flavorId,@RequestParam("numberId") Integer numberId){
          //@RequestParam("flavorId") Integer flavorId,@RequestParam("numberId") Integer numberId
          System.out.println(flavorId+"---------------"+numberId);
          List <LecakeCake> cakeList= cakeServiceWeb.queryCake(flavorId,numberId);
            return cakeList;
      }

      @RequestMapping("queryFlavor")
      @ResponseBody
      public List<Flavor> queryFlavor(){
          List <Flavor> flavorList= cakeServiceWeb.queryFlavor();
            return flavorList;
      }

      @RequestMapping("queryNumber")
      @ResponseBody
      public List<CakeNumber> queryNumber(){
          List <CakeNumber> numberList= cakeServiceWeb.queryNumber();
            return numberList;
      }

}
