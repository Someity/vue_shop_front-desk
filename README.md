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
