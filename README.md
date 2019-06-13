## 准备工作
``` bash
# 安装依赖
npm install

# 启动之前准备工作
npm i gulp -g
```

## 开发

``` bash
# 启动本地服务 localhost:8080
gulp dev --port=[port] --path=[path]
```
path为要启动的项目路径，默认是全部启动

`config/proxy.js`文件是项目初始化时自动创建的代理配置文件，不被纳入git管理，请根据个人情况自行修改

## 发布构建

``` bash
# 构建生产环境
npm run build

# 构建生产环境代码并生成bundle包分析页面localhost:8888，使用webpack-bundle-analyzer插件
npm run analyz
```


