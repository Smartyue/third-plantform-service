/**
 * Created by yuanjianxin on 2018/5/15.
 */
const App=require('yue-wechat-media-plantform-core');
const appConf=require('./configs/app.conf');

const app=new App();
app.Routes=appConf.routeConf;
app.AppConf=appConf;
app.Port=appConf.port;
app.run();