package com.jk.controller;

import com.jk.service.TestServiceWeb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("test")
public class TestController {

      @Autowired
      private TestServiceWeb testServiceWeb;

      @RequestMapping("test")
      @ResponseBody
      public  String  sout(){
          String souts=testServiceWeb.sout();

          return souts;
      }
}
