package com.jk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class LecakeZuulApplication {

    public static void main(String[] args) {
        SpringApplication.run(LecakeZuulApplication.class, args);
    }

}
