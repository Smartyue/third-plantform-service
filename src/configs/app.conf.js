/**
 * Created by yuanjianxin on 2018/5/15.
 */
module.exports={

    port:8060,

    host:'http://www.yuanjianxin.com',   //服务器域名
    configPath:'./src/wx-config',  //ticket产生信息保存路径
    authorizeInfoCBURL:'https://lendingone.yuanstar.com/api/test',  //用户授权成功后，授权信息回调接口
    unauthorizeCBURL:'https://lendingone.yuanstar.com/api/test2',//用户取消授权信息回调接口
    routeConf:{
        componentVerifyTicketUrl:'/wxapi/componentVerifyTicket',  //verifyTick 接口
        getAuthorizeUrl:'/wxapi/getAuthorize',           //获取网页版扫码授权url 接口
        getMobileAuthorizeUrl:'/wxapi/getMobileAuthorizeUrl',    //获取移动端授权url 接口
        getAuthorizeAPI:'/wxapi/AuthAPI',
        getMobileAuthorizeAPI:'/wxapi/mobileAuthAPI',
        authorizeCallbackUrl:'/wxapi/authorizeCallback'        //授权成功回调接口
    },

    // 微信授权配置
    wechatConf:{
        appId:'wx7e2c6b5af127218f',
        appSecret:'7df2adff13fc3ed699af57b3fbab7713',
        token:'jianxin',
        aesKey:'LodMUFGwQca6EWRFQwTuimShV1ilmlNqllbWQYJcfbW'
    },
};