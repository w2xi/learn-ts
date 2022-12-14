# TypeScript 基础学习

## 编译运行环境

全局安装 typescript:
```bash
$ sudo npm i typescript -g
$ tsc -v
Version 4.7.4
```

### 通过命令行执行:

```bash
# 第一步: 将 .ts 编译成 .js
$ tsc app.ts
# 借助 node 执行 .js
$ node app.js
```

借助 [ts-node](https://www.npmjs.com/package/ts-node) 工具可以将 <code>.ts</code> 文件编译并运行, 一步到位

```bash
$ tsc-node app.ts
```

### 浏览器 (webpack-dev-server)

详情见 <code>webpack.config.js</code> 配置

## 资源

[小满TypeScript基础教程全集（完结）](https://www.bilibili.com/video/BV1wR4y1377K?p=17&spm_id_from=pageDriver&vd_source=d36c0f862962bd8f8a7256fb2ddb5bbf)

code_why 视频教材

[TypeScript 官网](https://www.typescriptlang.org/)  
