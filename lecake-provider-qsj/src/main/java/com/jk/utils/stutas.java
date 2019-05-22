package com.jk.utils;

import java.io.Serializable;

public class stutas implements Serializable {
    private  Integer id;

    private  Integer sts=3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSts() {
        return sts;
    }

    public void setSts(Integer sts) {
        this.sts = sts;
    }
}
