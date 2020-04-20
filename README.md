## RF 微商城

### 前言

基于 [RageFrame2](https://github.com/jianyan74/rageframe2) 的一款免费开源的基础商城销售功能的开源微商城，前端基于 uni-app，一端发布多端通用，目前已经适配 H5、微信小程序、QQ小程序、Ios App、Android App。目前开源的版本功能为 V1 版，更多增强功能(V2、V3)敬请期待。

### 更新记录


#### v1.1.0

updated 2020.04.20

- 新增: 会话过期返回原先登录页面(utils/helper.js)
- 新增: 路由导航
    - 封装页面跳转方法(utils/router.js)
- 新增: 封装支付方法(utils/payment)
    - 公众号支付(微信H5支付)
    - 微信小程序支付
    - H5支付宝支付
- 新增: 抽取常量参数
    - 图片 (config/assets.config.js)
    - 常量 (config/constData.config.js)
    - 表单验证 (config/formRule.config.js)
    - 基本配置 (config/index.config.js)
    - websocket方法 (config/websocket.config.js)
- 优化: vuex状态管理
- 新增: 分包优化
- 新增: 404/500 页面
- 优化：request.js 优化token无痛刷新
- 优化：服务协议和隐私协议窗口
- 优化：订单下单-完成的流程
- 新增：购物车 收藏 我的足迹失效状态的显示
- 优化：购物车角标显示
- 新增：订单搜索功能/搜索订单结果页面
- 优化：统一所有list样式
- 新增：图片懒加载(除h5)

> [更多更新记录](docs/UPDATE.md)

### 思维导图

![image](docs/images/tinyshop.png)

### 安装说明

1、安装相关依赖, 默认已拥有node环境

```
// 安装yarn命令
npm i -g yarn
// 安装依赖
yarn 
```

2. 运行到指定平台

```
// 运行到H5
yarn serve
// 运行至对应的小程序平台 
yarn dev:PLATFORM
```

值 | 平台
---|---
h5 | H5
mp-weixin | 微信小程序
mp-alipay | 支付宝小程序
mp-baidu | 百度小程序
mp-toutiao | 头条小程序
mp-qq | qq 小程序


3. 打包至线上部署
```
// H5打包
yarn build
yarn build:PLATFORM // 平台信息同上
```
使用对应的小程序客户端进行发布。

4、发布uni-app(打包为原生App云端)

配合HBuilderX使用

> 注： H5除主页外刷新页面会出现404 需配置nginx伪静态

```angular2
location / {
    try_files $uri $uri/ /index.html;
}
```

### 配置文件

> [详见配置说明](docs/CONFIG.md)

### 官网

http://www.rageframe.com

### 问题反馈

在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我们交流

QQ群：[655084090](https://jq.qq.com/?_wv=1027&k=4BeVA2r)

### 特别鸣谢

感谢以下的项目，排名不分先后

Vuejs： https://github.com/vuejs/vue

uni-app： https://uniapp.dcloud.io/

mix-mall: https://ext.dcloud.net.cn/plugin?id=200

ColorUI: https://github.com/weilanwl/ColorUI
...

### 版权信息

RageFrame 遵循 Apache2 开源协议发布，并提供免费使用。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2016-2020 by RageFrame [www.rageframe.com](http://www.rageframe.com)

All rights reserved。
