package com.jk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients("com.jk.*")
public class   LecakeFeginWxyApplication {

    public static void main(String[] args) {
        SpringApplication.run(LecakeFeginWxyApplication.class, args);
    }

}
