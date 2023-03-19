# webpack学习
## Webpack是什么

- webpack是一个javascript应用的静态模块打包工具

* 如果工程模块依赖非常简单，甚至没有用到模块化，可以用grunt/gulp

* webpack的运行依赖node环境
* node环境执行代码又依赖各种包
* 我们又需要npm工具管理包

* 为什么还要局部安装？
  * 在终端直接执行webpack命令，使用的全局安装的webpack
  * 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的是局部webpack

* 局部安装webpack

  * --save-dev是开发式依赖，后续不需要的

  ```javascript
  cd 对应目录
  npm install webpack --save-dev
  ```

  

## package.json中启动

* 可以在package.json中自定义自己的执行脚本

* package.json中的script执行脚本在执行时，会按照一定的顺序寻找命令对应的位置

  * 首先会寻找本地的node_modules/bin路径中对应的命令

  * 如果没有找到，回去全局的环境变量中找。

  * 执行build指令

    ```javascript
    npm run build
    ```

    

## loader

1. 通过npm安装loader(注意版本)
2. 在webpack.config.js中的modules关键字下进行配置

### css文件处理

* 安装css-loader，再安装style-loader,配置module时style放在css前面，

  因为使用多个loader时从右向左读。
  
* css-loader 只能处理css语法，样式不能生效

* 只有css loader 样式无法生效，还需要style-loader

* style-loader 生成一个style标签，并把css代码放进去

### less文件处理

* less-loader 可以帮我们将less转化成css文件，就不需要手动转换

* webpack可以帮助处理less、scss、stylus
  1. 创建less文件放在css文件夹中
  2. 复制文档

### 图片文件处理

* file-loader处理图片
  * 将图片资源拷贝到打包后的目录，分开请求
  * 请求次数多，但是加载快

* webpack帮助我们自动生成一个特别长的名字

  * 这是一个hash值，防止名字重复
  * 可以再options中添加选项
  * img:文件要打包到的文件夹
  * name:获取图片原来的名字，放再该位置
  * hash:8:为了防止图片名称冲突，使用hash值，但是只保留8位
  * ext:使用图片原来的扩展名

* url-loaer处理图片

  * url-loader将二进制文件资源以base64 uri 的形式加载到代码中，打包后不会有图片文件
  * 优点是能减少请求次数
  * 缺点是文件大的时候加载会变慢
  * url-loader 内部也能调用file-loader
  * 属性limit， 比它大的文件用file-loader,比他小的用base64

* asset处理图片

  * asset模块是webpack内置的,webpack5特有

  * 配置选项

    * resource -> file-loader功能一样

    * inline -> url-loader功能一样

    * source -> 代替raw-loader

    * asset

    * ```javascript
      //resource配置
      test:/\.(png|svg|gif|jpe?g)$/,
      type:'asset/resource',
      generator:{
      	filename:'img/[name].[hash:6][ext]'
      }
      
      //直接使用asset配置
                  {
                      test: /\.(png|svg|gif|jpe?g)$/,
                      type: 'asset',
                      generator: {
                          filename: 'img/[name].[hash:6][ext]'
                      },
                      parser:{
                          dataUrlCondition:{
                              maxSize: 23 * 1024 *1024
                          }
                      }
                  },
      ```

      

## ES6转ES5

* 使用babel对应的loader就行了

## 在webpack配置vue

* 先npm安装vue

  ```javascript
  npm install vue --save
  ```

  * vue有两个版本:

    * runtime-only --> 代码中不允许有template

    * runtime-compiler --> 代码中可以有template，因为有compiler可以用于编译template

    * ```javascript
       //解决方案
       resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js'
          }
        }
      ```




## browserslist 的工作原理

* 我们的代码需要兼容不同的浏览器，这时可以用postcss/babel邓工具帮我们转换，但是要知道要兼容哪些浏览器，还需要browserslist帮助我们查询

* webpack 中有一个browerserlist 文件夹帮我们配置好了，它里面可以类似发请求给can i use 网站查询符合条件的浏览器数据

* browserslistrc 文件的内容

  ```javascript
  > 1% //市场占额大于1%
  last 2 version //最后两个版本
  
  ```

## postcss 工具的使用

* 为了兼容css

* 它自己啥也干不了。需要安装另外的工具

* postcss 是一个通过 js 转换样式的工具

* postcss-cli :可以让我们在终端命令行使用postcss 命令的工具

* **autoprefixer** 帮助添加浏览器前缀的插件，可由postcss调用

  ```javascript
  npx postcss --use autoprefixer -o ret.css 
  ./src/css/test.css
  //在终端通过postcss 调用autoprefixer
  ```

* **postcss-preset-env**

  * 预设 -- 插件集合 --  里面集合了很多css相关的插件
  * 而且！！autoprefixer已经包含到了里面，不再需要它了！！

* **importloaders** 属性

  *  当用@import 导入css时，导入的css 会不能被postcss处理
  * 1.postcss-loader 先执行，看看文件是否需要兼容处理，后交给css-loader
  * 2.css-loader 执行时@import 才能导入css文件。这时postcss-loader已经执行完了，不能再回头处理

  ```javascript
  {
      loader:'css-loader',
      options:{
         		importLoaders:1
         		//代表css-loader 处理过的文件能再被前面的1个loader处理
         		}
   },
  ```


* ## esModule属性：

  * require引入图片时生成的是一个对象{default}里面的default才是真正引入的东西，
  * 在配置中esModule设为false可不用 .default 获取真正的引入对象

  ```javascript
  {
      loader:'css-loader',
      options:{
         		importLoaders:1,
         		//代表css-loader 处理过的文件能再被前面的1个loader处理
         		esModule:false
         		}
   },
  ```

  

## el和template的区别

* vue的一些问题

  * 我们想将data数据显示在界面中，就要修改index.html

  * 但html模板在开发中不希望频繁手动修改

* 定义template属性

  * 我们可以保留index.html中的有app id 的div

  * 然后定义一个template

    ```javascript
    new Vue({
      el: '#app',
      template: `
      <div>
        <h2>{{message}}</h2>  
        <button>@click="btnClick()"</button>
        <h2>{{name}}</h2>
      </div>
      `
      ,
      data: {
        message: 'jiahui',
        name: "zhou"
      },
    ```

    

## .vue文件封装处理

* 安装vue-loader 和 vue-template-compiler

  ```javascript
  npm install vue-loader@15.4.2 vue-template-compiler@2.5.21
  ```

  

## plugin插件

* plugin 是什么
  * plugin是插件，是对webpack进行的扩展
  * loader用于转换某些类型的模块，它是一个转换器
  * plugin是插件，它是对webpack本身的扩展，是扩展器
  * 插件的本质上是一个类，使用时需用new ***()
* plugin 使用步骤
  * 通过npm 安装plugin
  * 在webpack.config.js的 plugins中配置插件

## BannerPlugin插件（自带）

* 为打包的文件添加版权声明

  ```javascript
  const webpack = require('webpack')
  module.exports = {
  .......
    plugins: [
  	new webpack.BannerPlugin('最终版权归jiahui所有')
    ]
  }
  ```

* 再重新打包文件

## 打包html - HtmlWebpackPlugin插件

* 这个插件可以自动生成一个index.html文件

  然后将打包的js文件，自动通过script标签插入到body中

* 安装插件

  ```javascript
  npm install html-webpack-plugin --save-dev
  ```

* 要删除之前output中的publicPath属性

  

## 压缩JS插件 uglifyjs-webpack-plugin

* 对js文件进行压缩

  ```javascript
  npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
  ```


##  清除多余文件插件 clean-webpack-plugin

## 拷贝资源插件copy-webpack-plugin

* 将项目文件的文件拷贝到打包后的文件里

## babel的使用

* 是一个工具，可以处理JS的兼容

* 要处理JS需要安装工具包

### @babel-plugin-transform-arrow-functions

* 将箭头函数转换成普通函数

### @babel-plugin-transform-block-scoping

* 处理块级作用域

### @babel/preset-env 集合工具包

### 分离配置文件

* 将babel的额外配置分离出到一个文件夹中

* babaelrc.json(老版)
* babel.config.js

## Ploy-fill 的使用

* 处理babel处理不了的兼容问题
* 分成了两个模块
  * core-js
  * regenerator-runtime

## 搭建本地服务器

* webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。

* 在webpack需要先安装它

  ```javascript
  npm install --save-dev webpack-dev-server@2.9.1
  ```

* devserver也是作为webpack中的一个选项，选项本身可以设置以下属性：

  * contentBase:为哪一个文件夹提供本地服务，默认是根文件夹，我们这里填写./dist
  * port:端口号
  * inline:页面实时判断
  * historyApiFallback:在SPA页面中，依赖HTML5的history模式

* webpack.config.js

  ```javascript
  devServer:{
  	contentBase: './dist',
  	inline: true
  },
  ```

* 可以再配置一个script

  * --open表示直接打开浏览器

  * ```javascript
    "dev":"webpack-dev-server --open"
    ```

    

## 开发模式

* --watch 搭配 --live server
* 缺点：
  * 所有源代码都会被编译
  * 每次编译成功后都会进行文件读写
  * 不能实现局部刷新