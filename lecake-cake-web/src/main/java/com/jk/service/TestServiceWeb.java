package com.jk.service;


import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("lecake-server")
public interface TestServiceWeb extends  TestService{

}
