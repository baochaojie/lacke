package com.jk.service;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(value = "lacke-provider-gr")
public interface MilkServiceFeign extends MilkServiceApi {

}
