package com.jk.service;

import com.jk.model.LecakeCake;
import org.springframework.cloud.openfeign.FeignClient;

import java.util.List;

@FeignClient("lecake-server")
public interface CakeServiceWeb extends  CakeService {



}
