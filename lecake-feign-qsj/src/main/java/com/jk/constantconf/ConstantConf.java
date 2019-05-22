/**
 * <pre>项目名称:ssm-user-qsj
 * 文件名称:ConstantConf.java
 * 包名:com.jk.qsj.constantconf
 * 创建日期:2019年3月14日下午10:54:14
 * Copyright (c) 2019, yuxy123@gmail.com All Rights Reserved.</pre>
 */
package com.jk.constantconf;


/** 
 * <pre>项目名称：ssm-user-qsj    
 * 类名称：ConstantConf    
 * 类描述：    
 * 创建人：乔世杰 17539595870
 * 创建时间：2019年3月14日 下午10:54:14    
 * 修改人：乔世杰 17539595870
 * 修改时间：2019年3月14日 下午10:54:14    
 * 修改备注：       
 * @version </pre>    
 */
public class ConstantConf {

	public static final String ACCOUNTSID = "0374867b2c1844dbbe0bf019bf0def28";

	public static final String AUTH_TOKEN = "d05d06f418974fc6aceb9233e38b7539";

	public static final String TEMPLATEID = "164547838";    

	public  static final String  SMS_URL="https://api.miaodiyun.com/20150822/industrySMS/sendSMS";

	public  static final String  SMS_LOGIN_CODE="dlyzm";

	public  static final String  SMS_LOGIN_LOCK="lock";

	public  static final Integer  SMS_LOGIN_CODE_TIME_OUT= 5;

	//手机验证码1分钟
	public  static final Integer  SMS_LOGIN_LOCK_TIME_OUT= 1;

	//短信验证码状态超过三次今天不能登录
	public  static final String   SMS_Login_STATUS_CODE = "yzmzt";

   //将用户登录手机号存在redis中
	public  static  final String  SMS_LOGIN_PHONE = "sjh";

	//浏览记录粗在redis
	public  static  final String  SMS_LOOK_RECORD_CAR ="lljl";



}
