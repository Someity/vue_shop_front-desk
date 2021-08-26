# 项目笔记

## 一、项目搭建

### 1.1 、使用脚手架三来创建 // vue cli3

- vue create “项目名称”
- 三个选项

  - 上次保存的项目配置文件

  * 选择默认（default）
  * 手动选择（Manually） 使用空格选中与取消

- 根据情况进行选择
  - Where do you pre fer placing config for Babel, ESLint, etc.?  
    将这些配置文件放在那个里面 1 单独的 2 package.json 里面
  - Save this as a preset for future projects? (y/N)  
     是否将这些配置保存下来以供下次选择  
    **_在 c 盘用户文件夹里面的.vuerc 文件夹里面删除_**

### 1.2、 GitHub 创建仓库

从上至下  
项目名称  
简介  
是否公开  
是否创建一个简介  
是否创建.gitgnore 文件用于筛选不需要上传的文件
分享协议

- 一、将本地项目和远程仓库连接
  > git remote add origin “仓库地址：”https://github.com/Someity/vue_shop_front-desk.git  
  > 将本地分支提交到远程分支  
  > git push -u origin master
- 二、git 的常用命令

  > https://blog.csdn.net/halaoda/article/details/78661334

* git add . 添加至暂存区
* git branch 分支管理
* git push --set-upstream origin ‘分支名称’ 推送本地分支
* git checkout 切换分支
  #### 基本步骤
  > 创建远程仓库 本地创建项目 使用 git 命令连接远程仓库
  > 保存是 1、git add . 2、git commit -m "提交信息" 3、 git push

### 1.3、 划分目录结构

- public： 公共文件夹

* src {
  - assets ： 样式和图片文件夹
  - common : 公共 js 文件 用于抽取公共常量
  - components : 公共组件 {
    - common :完全公共组件
    - content: 业务相关组件  
      }
  - network :网络请求文件夹
  - router : 路由文件夹
  - store : vuex 状态管理文件夹
  - views ：大的视图组件  
    }
* .browserslistrc ：指定了项目的目标浏览器的范围
* .gitignore :Git 版本控制器规则
* babel.config.js ：Babel 的配置文件
* package-lock.json ：记录你项目中所需要的所有模块的详细信息
* package.json：记录你项目中所需要的所有模块
* vue.config.js：一个可选的配置文件主要用于修改 webpack 配置

### 1.4 、初始化 css 文件 ：normalize.css

- 放入 assets/css 文件夹下面

### 1.5、npm 安装卸载命令

> 来源：https://www.jianshu.com/p/e6ee00ea03cd

- npm 安装模块
  - 【npm install xxx】利用 npm 安装 xxx 模块到当前命令行所在目录；
  - 【npm install -g xxx】利用 npm 安装全局模块 xxx；
  - 【npm install xxx】安装但不写入 package.json；
  - 【npm install xxx –save】 安装并写入 package.json 的”dependencies”中；
  - 【npm install xxx –save-dev】安装并写入 package.json 的”devDependencies”中。

* npm 删除模块
  - 【npm uninstall xxx】删除 xxx 模块；
  - 【npm uninstall -g xxx】删除全局模块 xxx；

### 1.6、 封装 axios

- 作用 更方便进行管理
- 创建 network 文件夹用于存储项目数据请求的文件
- request.js 文件封装 axios

## 二、首页开发

### 2.1、首页数据获取 home.js

- 根据请求接口 和数据 创建不同的函数来调用 request.js 封装的 request 函数用于获取数据这个函数返回 promise 对象可以使用.then 来获取到具体数据

### 2.2、首页上方选择卡组件：NavBar

- 在公共组件文件夹里面创建 NavBar 在 div 里面创建三个 slot 具名插槽
- 分别用 div 包裹 left、center、right 使用 flex 布局设置高度 44 添加下横线等样式
- 在 home.vue 里面引入组件并且注册 在组件里面添加居中的插槽（购物街）添加样式 背景颜色、字体颜色。

### 2.3、 轮播图

- 获取数据
- 引入获取数据的函数 在首页创建完成之后立即调用 created（）生命周期函数 并将结果保存到 data 中保存
  > 【函数里面的数据是局部变量、、内存指针问题】

函数调用 > 压入函数栈（保存函数调用过程中所有变量）  
函数调用结束 > 弹出函数栈（释放函数所有的变量）

- 创建一个组件，在展示。
  使用 swiper 组件
  https://blog.csdn.net/u012570307/article/details/107203851/

- 独立创建一个组件数据传递即可

### 2.4、推荐数据

- 数据在 home 组件获取 通过组件传递 props 接受
  其实就是一个 div 包裹一个图片 一段文字 一共四份通过 flex 布局来实现即可

### 2.5、广告组件

- 一张图片

### 2.6、商品选项卡

- 数据（选项卡文字）还是通过主页传递为了方便组之间重复使用
- 组件内创建一个 大 div 包裹一个 div>span
  div 通过 v-for 来将传递过的 titles 生成出来并通过 :class 动态绑定样式

* 点击样式效果
  - 在 data 中添加一个值 来判断 index 和这个值是否相同
  * 一开始 index 为 0 所示这个值的默认值也为 0 给
  * 当前 div 添加一个点击事件当点击完成后将 data 中的值设置为 index 的值（通过 v-for 获取的，代表每一个值的索引号从 0 开始） 这样就实现了点击那一个 div 就给它这个样式，
    > 这个根代表整体选项卡 里面的 div 为每一个小选项卡 span 为文字
    > 整体样式就是 给大 div 一个 flex 布局 文字居中高度 行高字体大小
    > 小的就是一个 flex：1 平均分配每一个元素
    > 设置 span 所有内边距 5 像素
    > 设置动态绑定的样式字体颜色 里面的 span 下边框
* 停留效果展示
  - 需要获取到组件到最上方的距离来进行判断
  - 需要当组件内的图片全部加载完成后在获取距离才能确保准确
  - 利用 olad 事件发送一个事件到 home 中通过$refs.组件.$el.offsetTop 来获取到具体数值并保存起来
  - 在触发滑动的组件内来判断 当 position.y 的值大于距离上方的值 才能显示 ，用一个变量（布尔值）保存起来
  - 在将一个组件复用到最上方 用 v-show 来判断组件的显示与隐藏值就是这个变量
  * 为了保证两个组件内选择的是一样的 在获取这个组件索引的函数内将这两个的索引重新赋值

### 2.7、商品列表

- 商品数据获取和数据结构设计

  > 需要同时获取 三个选项卡里面的数据来确保页面的正常显示不出现卡顿,但一次请求只能获取一种数据,所以在 data 中添加 goods 属性来保存三种数据

- goods:{
  - 'new':{page:0,list:[]},
  - 'pop':{page:0,list:[]},
  - 'sell':{page:0,list:[]},  
    }
- 在 methods 里面用方法来发送网络请求在 created 里面来调用。

* 就是将请求的函数在封装一次

- 请求需要两个参数 类型和页码

  - 在获取请求的方法里面，由于每次使用这个方法只需要将页码加一 **_所以只需要获取 goods 里面的 page 让他加 1 即可_**  
    通过一个常量来保存  
    在发送请求将获取到的数据保存到 list 当中
    - 可以使用 for in 的方法 和 ...array 结构的方法来实现
    - 最后将 goods 的 page+= 1 请求一次页码加 1 即可

  * 在 methods 里面多次调用这个方法，参数为选项卡的名称，即可获取到初始的数据

* 商品列表展示
  - 创建一个业务相关的组件
  - 先创建一个独立的大组件 通过 v-for 循环小组件来展示商品
  * 将 home 里面的 goods 传递到大组件 大组件通过循环获取所有小组件内需要的数据  
     然后在传递进去每一个独立的数据 在小组间内通过获取到的数据  
     {img title price cfav} 来展示出来并设置样式来实现功能
* 点击选项卡切换商品内容
  - 在选项卡组件点击 div 发出一个事件,参数为索引号
  - 在 home 的组件引入中加入这个自定义事件
  - 在 methods 中加入这个自定义事件 在 data 中设置一个默认的选项值
  * 在事件中利用 switch 语句来判断索引号改变这个值 来实现点击选项卡切换商品内容

> switch 语句根据表达式 expr 的值，依次与 case 后表达式的值进行比较，如果相等，则执行其后的语句段，只有遇到 break 语句，或者 switch 语句结束才终止；如果不相等，则继续查找下一个 case。switch 语句包含一个可选的 default 语句，如果在前面的 case 中没有找到相等的条件，则执行 default 语句，它与 else 语句类似。
> http://c.biancheng.net/view/5526.html

### 2.8、滑动组件的引入和使用

    使用 bscroll 组件来实现功能
    https://better-scroll.github.io/docs/zh-CN/

- 目前使用最先版本 2.~  
  BScroll from '@better-scroll/core'  
  import Pullup from '@better-scroll/pull-up'
- 使用方法  
   创建一个公共组件 需要一个外层 div 包裹内层 div 来实现滑动 在 mounted 里面 new 一下 BScroll 第一个参数是外层 div 获取方法最好是 ref 来操作 DOM 设置参数等同官网  
   在 home 中导入这个公共组件 组件包裹需要滑动的组件 需要给 scroll 设置一个滑动的高度来 可以用定位和 css 的计算属性（calc）来实现

#### 方法

：scrollTo 用于实现移动 X 　Ｙ轴的地方　接受参数看官网  
on：监听当前 scroll 的钩子

### 2.9、回到顶部按钮

- 创建一个业务组件 div>img  
  在 home 里添加这个组件，并添加一个点击事件**_[组件添加点击事件需要加上.native 修饰符]_** 在 methods 中调用 bscroll 中的 bscrollto 方法到达顶部

* 按钮的显示与隐藏：  
  需要检测滑动区域的数值当超过 1000 显示否则隐藏 使用 scroll 里面的 on 属性实时监听当前滑动的页面当发生滑动时发送一个事件给 home 里面通过传递的事件来判断按钮的 v-show 属性 实现显示与隐藏 this.isShowBack = -position.y > 1000

### 2.9.1、商品的图片问题 加载刷新

- 1.0 版本 ：需要在图片的组件添加 load 事件来监听是否加载完成，加载完成后发送一个事件，并使用事件总线的方法转递到 home 当中在 mounted 节点中来刷新 bscroll 达到目的
- 2.0 版本：添加'@better-scroll/observe-image'插件 配置 observeImage: true 即可

### 页面自动销毁问题

- <keep-alive>

* 但是 bscroll 会出现问题
* 解决办法
* 利用 activated（进入页面调用）和 deactivated（离开页面调用）函数
* 在离开页面时将页面的 offsettop 保存下来
* 在进入页面后将页面回复这个高度即可
* 需要重新 refresh 一下

## 三、详情页面
