package com.jk.service;


import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("springcloud-cake-reg")
public interface OrderService extends  OrderServiceqsj{





}
