# 项目笔记

## 1 、使用脚手架 3 来创建 // vue cli3

- 一、vue create “项目名称”
- 二、三个选项
  {
  1、上次保存的项目配置文件
  2、选择默认（default）
  3、手动选择（Manually） 使用空格选中与取消
  }
- 三、根据情况进行选择
  > Where do you prefer placing config for Babel, ESLint, etc.?  
  > 将这些配置文件放在那个里面 1 单独的 2 package.json 里面  
  > Save this as a preset for future projects? (y/N)  
  > 是否将这些配置保存下来以供下次选择  
  > 在 c 盘用户文件夹里面的.vuerc 文件夹里面删除

## 2、 GitHub 创建仓库

从上至下
项目名称 简介 是否公开
是否创建一个简介  
 是否创建.gitgnore 文件用于筛选不需要上传的文件
分享协议

- 一、将本地项目和远程仓库连接
  > git remote add origin “仓库地址：”https://github.com/Someity/vue_shop_front-desk.git  
  > 将本地分支提交到远程分支  
  > git push -u origin master
- 二、git 的常用命令

  > https://blog.csdn.net/halaoda/article/details/78661334

  git add . 添加至暂存区  
   git branch 分支管理
  git push --set-upstream origin ‘分支名称’ 推送本地分支  
   git checkout 切换分支
  步骤
  <创建远程仓库 本地创建项目 使用 git 命令连接远程仓库
  保存是 1、git add . 2、git commit -m "提交信息" 3、 git push

## 3、 划分目录结构

assets ： 样式和图片文件夹

common : 公共 js 文件 用于抽取公共常量
components : 公共组件 {
common :完全公共组件
content: 业务相关组件
}
network :网络请求文件夹
router : 路由文件夹
store : vuex 状态管理文件夹
views ：大的视图组件

## 4 、初始化 css 文件 ：normalize.css

1. 放入 assets/css 文件夹下面
   npm 安装卸载命令
   来源：https://www.jianshu.com/p/e6ee00ea03cd
   npm 安装模块
   【npm install xxx】利用 npm 安装 xxx 模块到当前命令行所在目录；

【npm install -g xxx】利用 npm 安装全局模块 xxx；

【npm install xxx】安装但不写入 package.json；

【npm install xxx –save】 安装并写入 package.json 的”dependencies”中；

【npm install xxx –save-dev】安装并写入 package.json 的”devDependencies”中。

npm 删除模块
【npm uninstall xxx】删除 xxx 模块；
【npm uninstall -g xxx】删除全局模块 xxx；

## 封装 axios

作用 更方便进行管理
创建 network 文件夹用于存储项目数据请求的文件

### request.js 封装 axios

### 一、首页数据获取 home.js

根据请求接口 和数据 创建不同的函数来调用 request.js 封装的 request 函数用于获取数据这个函数返回 promise 对象可以使用.then 来获取到具体数据

## 首页开发

### 1、首页插槽组件

在公共组件文件夹里面创建 NavBar 在 div 里面创建三个 slot 具名插槽分别用 div 包裹 left、center、right 使用 flex 布局设置高度 44 添加下横线等样式  
在 home.vue 里面引入组件并且注册 在组件里面添加居中的插槽（购物街）添加样式 背景颜色、字体颜色。

### 2、 轮播图

一、获取数据
引入获取数据的函数 在首页创建完成之后立即调用 created（）生命周期函数 并将结果保存到 data 中保存 【函数里面的数据是局部变量、、内存指针问题】
函数调用 > 压入函数栈（保存函数调用过程中所有变量）  
函数调用结束 > 弹出函数栈（释放函数所有的变量）
二、创建一个组件，在展示。
使用 swiper 组件
https://blog.csdn.net/u012570307/article/details/107203851/

独立创建一个组件数据传递即可

### 3、推荐数据

数据在 home 组件获取 通过组件传递 props 接受到
其实就是一个 div 包裹一个图片 一段文字 一共四份通过 flex 布局来实现即可
