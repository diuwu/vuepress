## webpack面试题

### webpack是什么

### loader是什么

### plugin是什么

### loader和plugin的区别

### 如何编写loader和plugin

### webpack优化前端性能

* 代码压缩
  * js压缩:利用terser-webpack-plugin
  * css压缩:利用了optimize-css-assets-webpack-plugin 插件

* 按需加载
* CDN加速
  * 构建过程将引用的静态资源路径改为CDN对应的路径
  * 利用output参数和各loader的publicPath修改资源路径
* 剔除多余代码
  * tree-shaking树摇优化
  * codeSplitting代码分割：将代码按路由维度或组件分块，做到按需加载
* 提取公共代码
  * splitChunksPlugin

### webpack优化构建速度

* 多入口情况使用splitChunksPlugin提取公共代码
* Happypack：将loader由单线程转为多线程加速编译

* HMR 模块热替换，只重新构建发生变化的模块。
* 缩小文件处理范围，include/exclude
* babel缓存，第二次构建时，会读取之前的缓存，只重新构建变化的文件

* 使用DLL进行分包

* 多进程构建