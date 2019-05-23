package com.jk.service;

import com.jk.mapper.CakeMapper;
import com.jk.pojo.LecakeCake;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CakeServiceImpl implements CakeService {

    @Autowired
    private CakeMapper cakeMapper;
    @Autowired
    private RedisTemplate redisTemplate;
    @Override
    public void addCake(LecakeCake lecakeCake) {
        cakeMapper.addCake(lecakeCake);
    }

    @Override
    public List<LecakeCake> queryCake() {
        List query = redisTemplate.opsForList().range("queryCake", 0, -1);
        if (query != null && query.size() > 0){
            List<LecakeCake>  LecakeCake = (List<com.jk.pojo.LecakeCake>) query.get(0);
          return LecakeCake;
        }
        List<LecakeCake> list = cakeMapper.queryCake();
        if (list==null){
            redisTemplate.opsForList().leftPush("queryCake",list);
        }else{
            redisTemplate.opsForList().leftPush("queryCake",list);
        }
        return list;
    }

    @Override
    public List<LecakeCake> queryCakeById(Integer cakeId) {
        List query = redisTemplate.opsForList().range("queryCakeById", 0, -1);
        List<LecakeCake>  listt2 = new ArrayList<>();
        if (query != null && query.size() > 0){
            listt2 = (List<com.jk.pojo.LecakeCake>) query.get(0);
        }
        List<LecakeCake> list = cakeMapper.queryCakeById(cakeId);
        listt2.add(list.get(0));
        redisTemplate.delete("queryCakeById");
            redisTemplate.opsForList().leftPush("queryCakeById",listt2);
        return listt2;
    }

    @Override
    public List<LecakeCake> queryredisCake() {
        List query = redisTemplate.opsForList().range("queryCakeById", 0, -1);
            List<LecakeCake>  LecakeCake = (List<com.jk.pojo.LecakeCake>) query.get(0);
        return LecakeCake;
    }
}
