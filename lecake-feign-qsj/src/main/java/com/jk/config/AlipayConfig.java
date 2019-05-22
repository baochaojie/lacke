package com.jk.config;


import java.io.FileWriter;
import java.io.IOException;


public class AlipayConfig {
    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016092700604826";

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgFrvQfonGXN2qHn3hR0jLUns5xuduPMKPj4MJ+GhwnG3AiaupGN8MRJlqovcedyj5zrSOgb8q5jD/ClRlEJqr18E3zi2DWt4ECxwhKMDLbFccJcAF2syKqI5J/LFn2iefIIOuEdNZisU7+CXllk7yjNtKuSbuoUHht/UOJ0iflTOc1elsxXtPqKiP+jrNYGWRfRinXWjrrDD13PymrCiiYc+AZB1cZBFYh4IfkQabZXy4fc9LZmE4WXJiCu/dmor3i0ozYjj77dn762ByG4zTDgHdwr4JCdqmOkrC12ekoTV6bdSALi5+3piiSjf5F+D9w62kNlh2DD3/S4LQeDX1AgMBAAECggEAG6lR8oiqzbemJYr3PUHP9jHeUPFpc8bT53JotgRSJ4MgA7DGFIXTpI8F40MdaAo27lMlJ6qLmaIEvUzPoFbqIt8456ecfaHp0tEIn0Inbf7eXmK3d0uDJEJTs70R+lvblMdNeXpjBonP4rjR84WxRn/INHUhoQIEHDhpA3UOO2SIy8My3xD49+CZZZBTAF9TOCKTdHhYSmenktaQmB+LMhmo1ZZQW57nTS+XvPzLh6Ff/D9ZQQ9rUnpgNJWx6AWu4FbC7DWQ8AyRRZjBPq9qBS3dUCCtCwzmSlBV8okcgWZZ/46YaTgCBt/UAg0wZCypDzU4czxOcO0uSrryr5PwAQKBgQD8HlrKlmL5EIBTYcrpJNLH6DvaK6zh3DwaM5V/arzn6dVOGzKzMPEs2zs2cy3v+fWCdAwWy1wgNr/vGJt4SzwlvxVP5+qXC1ktafBK2YCNGx2bJuPQ7BkrfapmofPTX3clH7Iq4QRsxtDv+bJWiRW+MJZ9f564RTJr3DbBi7jVAQKBgQCijaxA4JtL4XB3CrLJo8xhuFDOjjtRA1JiTMQFREAzZBIAGeLhOAjvnCildGaDUJMpnVlzxB3eN3S9F+285Aix8p0mRAqNGt3j9Ax4/Q4v/ktQmuI+3ZjZUL4vHkmxgwrhSf2Vu13zTGcd5oJNvR6Ak+JpjdUrPYTtW5H3BAhc9QKBgQCOrCLW6DnEFnl4NiwcubDqXdqZAQRJoFcGwNBGFcInP2VtWOjdDMI+jyW4D4AcgIhVtZQtxhExTapaBMPeVD0KY1MNMAHKTiq+D2hjAyjDMWgUp/JeBW3M9cVbZSTVJf4HrSMnLsVRRUVxuA0a+WKriVVwWasZPldlQG5gItCLAQKBgBtqQ2vptadVjS82ibLCQl0UxeQgTta59bIIemLdAOrp7LNBqmcLmU44Cw7kk8l/1GIHXKfOoq7wsWqW14ys9N52KZTjktf7eQLSDSx2mWb0v2UHyjKKExZLrNerhwg+Lp6SaQdQw2aeMyHy13Ue+T78MgpVVmdlh760W+jKMFLlAoGAGcFVs+THE6SVZgGzP37gvjilYv3TB2XHmCuMyhxAfvcOzwpXfiqXBpQiau3vWw8GzlLzMQ6+5t0KnrWYcw9PYeKLPV4NgE5kgKg9PcX8uRfXG9pGUEQcio+Y91bzMKyvzQbS++tpRV/jigsY3rOwAmToMlQi1WGaIW4hMAxytuQ=";

    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3VnORMtvOoMIjsw47ROaKvoClpka6+djksA5bTmTa7LudP93SpU7kQDUF0/eRMqD0gHHtNTVD+Zhk1jeK0ASceYuVTroKS4nvOOm5h3w/yPmYkyLBQVP6KWq45bbLYKSP9tT0M+TsmRg6m7yD3NnMr3+yHbQ+Eo0UDhUeCtuLOw7k6t66hEE3enGuT25NLA0yp6SgSTKBFaktvSNG/r9+ge3dTpc3JMtwkSHyrDK/hjkd59Inv5lkQolCLkZUmR3zKrX66wXUzZmKljDaiuTc8s9YnsrfB/bHu1Sig7z+T2Rw549PbWAZau6K6Wp0vlUEskISeOo2v2bqAjxdKmzcwIDAQAB";
    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://localhost:8767/page/notify_url";

    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String return_url = "http://192.168.1.151:8083/dangao3";

    // 签名方式
    public static String sign_type = "RSA2";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

    // 支付宝网关
    public static String log_path = "D:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
