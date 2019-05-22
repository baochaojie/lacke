package com.jk.controller;


import com.jk.model.LecakeCake;
import com.jk.service.CakeService;
import com.jk.service.CakeServiceWeb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController {

    @Autowired
    private CakeServiceWeb cakeServiceWeb;
      @RequestMapping("tocakeshow")
      public  String  tocakeshow(){

          return "cake";
      }
      @RequestMapping("tocakeinfo")
      public  String  tocakeinfo(Integer cakeId ,Integer numberId,Integer flavorId, Model model){
          System.out.println("cakeId==="+cakeId+"numberId=="+numberId+"flavorId="+flavorId);
       //  LecakeCake cake= cakeServiceWeb.queryById(cakeId,numberId,flavorId);
         // System.out.println(cake);
          model.addAttribute("cakeId",cakeId);
          model.addAttribute("flavorId",flavorId);
          model.addAttribute("numberId",numberId);
          return "cakeInfo";
      }

}
