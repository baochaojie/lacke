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

      @RequestMapping("queryNumberTwo")
      @ResponseBody
      public List<CakeNumber> queryNumberTwo(@RequestParam("cakeId")Integer cakeId){
          List <CakeNumber> numberList= cakeServiceWeb.queryNumberTwo(cakeId);
            return numberList;
      }
      @RequestMapping("queryById")
      @ResponseBody
      public LecakeCake queryById(@RequestParam("cakeId")Integer cakeId,@RequestParam("numberId")Integer numberId,@RequestParam("flavorId")Integer flavorId){
          System.out.println("cakeId==="+cakeId+"numberId=="+numberId+"flavorId="+flavorId);
            LecakeCake cake= cakeServiceWeb.queryById(cakeId,numberId,flavorId);
            return cake;
      }

      @RequestMapping("queryPrice")
      @ResponseBody
      public CakeNumber queryPrice(@RequestParam("cakeId")Integer cakeId,@RequestParam("numberId")Integer numberId){
          System.out.println("1231");
          CakeNumber cakeNumber= cakeServiceWeb.queryPrice(cakeId,numberId);
          System.out.println(cakeNumber);
            return cakeNumber;
      }

}
