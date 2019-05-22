package com.jk.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController {

      @RequestMapping("tocakeshow")
      public  String  tocakeshow(){

          return "cake";
      }
      @RequestMapping("tocakeinfo")
      public  String  tocakeinfo(Integer cakeId , Model model){
          System.out.println(cakeId);
          model.addAttribute("cakeId",cakeId);
          return "cakeInfo";
      }

}
