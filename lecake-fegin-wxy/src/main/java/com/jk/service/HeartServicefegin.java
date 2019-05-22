package com.jk.service;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("service-customer")
public interface HeartServicefegin extends HeartServiceapi{

}
