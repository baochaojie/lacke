package com.jk.service;


import org.springframework.web.bind.annotation.RequestMapping;

public interface TestService {
    @RequestMapping("test")
    String sout();
}
