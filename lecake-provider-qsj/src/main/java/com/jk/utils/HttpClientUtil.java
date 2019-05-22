/** 
 * <pre>项目名称:ssm-user-qsj 
 * 文件名称:HttpClientUtil.java 
 * 包名:com.jk.qsj.utils 
 * 创建日期:2019年3月8日上午11:57:53 
 * Copyright (c) 2019, yuxy123@gmail.com All Rights Reserved.</pre> 
 */  
package com.jk.utils;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
/** 
 * <pre>项目名称：ssm-user-qsj    
 * 类名称：HttpClientUtil    
 * 类描述：    
 * 创建人：乔世杰 17539595870
 * 创建时间：2019年3月8日 上午11:57:53    
 * 修改人：乔世杰 17539595870
 * 修改时间：2019年3月8日 上午11:57:53    
 * 修改备注：       
 * @version </pre>    
 */
public class HttpClientUtil {
               
	static CloseableHttpClient client = null;
	static {
		client = HttpClients.createDefault();
	}
	/**
	 * <pre>get(这里用一句话描述这个方法的作用)   
	 * 示列：http://www.jinkeit.cn/xxx
	 * 创建人：乔世杰 17539595870
	 * 创建时间：2019年3月8日 上午10:56:10    
	 * 修改人：乔世杰 17539595870
	 * 修改时间：2019年3月8日 上午10:56:10    
	 * 修改备注： 
	 * @param url
	 * @param params
	 * @return</pre>
	 */
	public static String get2(String url,Object params){
		try {
			HttpGet httpGet = new HttpGet();
			StringBuffer stringBuffer = new StringBuffer();
			stringBuffer.append(url).append("/").append(params);
			httpGet.setURI(new URI(stringBuffer.toString()));
			CloseableHttpResponse execute = client.execute(httpGet);
			int statusCode = execute.getStatusLine().getStatusCode();
			if (200 != statusCode) {
				return "";
			}
			return EntityUtils.toString(execute.getEntity(), "utf-8");
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	/**
	 * 
	 * 方法: get <br>
	 * 描述: get请求 <br>
	 * 作者: Teacher song<br>
	 * 时间: 2017年7月21日 下午3:15:25
	 * @param url
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public static String get(String url,HashMap<String, Object> params){
		try {
			HttpGet httpGet = new HttpGet();
			Set<String> keySet = params.keySet();
			StringBuffer stringBuffer = new StringBuffer();
			stringBuffer.append(url).append("?t=").append(System.currentTimeMillis());
			for (String key : keySet) {
				stringBuffer.append("&").append(key).append("=").append(params.get(key));
			}
			httpGet.setURI(new URI(stringBuffer.toString()));
			CloseableHttpResponse execute = client.execute(httpGet);
			int statusCode = execute.getStatusLine().getStatusCode();
			if (200 != statusCode) {
				return "";
			}
			return EntityUtils.toString(execute.getEntity(), "utf-8");
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	/**
	 * 
	 * 方法: post <br>
	 * 描述: post请求 <br>
	 * 作者: Teacher song<br>
	 * 时间: 2017年7月21日 下午3:20:31
	 * @param url
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public static String post(String url,HashMap<String, Object> params) {
		try {
			HttpPost httpPost = new HttpPost();
			httpPost.setURI(new URI(url));
			List<NameValuePair> parameters = new ArrayList<NameValuePair>();
			Set<String> keySet = params.keySet();
			for (String key : keySet) {
				NameValuePair e = new BasicNameValuePair(key, params.get(key).toString());
				parameters.add(e);
			}
			HttpEntity entity = new UrlEncodedFormEntity(parameters , "utf-8");
			httpPost.setEntity(entity );
			CloseableHttpResponse execute = client.execute(httpPost);
			int statusCode = execute.getStatusLine().getStatusCode();
			if (200 != statusCode) {
				return "";
			}
			return EntityUtils.toString(execute.getEntity(), "utf-8");
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static void main(String[] args) {
		
	String string = HttpClientUtil.get2("http://t.weather.sojson.com/api/weather/city",101010100);
		JSONObject parseObject = JSON.parseObject(string);
		JSONObject data = parseObject.getJSONObject("data");
		JSONArray forecast = data.getJSONArray("forecast");
		JSONObject today = forecast.getJSONObject(0);
		String ymd = today.getString("ymd");
		System.out.println(ymd);
		
	}
}
