## 2023百度暑期实习笔试编程

**一、输入数组a/b ,a:包含n个正整数(n>=1)，b:包含a数组中对应数字的标记（标记分为R/B两种），求a数组中标记不同的正整数的乘积之和。**

* 例：输入a:1 2 4 ; b: R B B ,输出1x2 + 1x4 = 6;

* 思路1：暴力双循环（超时）
* 思路2：标记为R的数字之和与标记为B的数字之和的乘积 1 x 2+4 

**二、输入两个正整数a/x ,a,x>=1 ;求不大于x的正整数b，使a xor b 的值为最大。(xor为按位异或)**

* 例：输入a  x = 3 2 ; 输出1: 3 xor 1 = 2
* 例：输入a  x = 5 4 ; 输出2: 5 xor 2 = 7

* 思路：将ax转换成二进制数( a.toString(2) ) ,从a最高位开始取反，保证取反后的结果小于x,可找到最大值。

**三、输入一个形式为0.x的小数如（0.4221453）,求忽略去任何小数位置的数字后所能得到的最大数值。**

* 例:输入0.4111523 , 输出 0.53 （忽略4111 和 2）

* 思路：单调栈

## 2023拼多多暑期实习笔试

**一、  求以下代码输出结果**

```javascript
function Getfn(){
​    return new Promise((resolve,reject)=>{
​      console.log('promise start');
​      reject('failed');
​      console.log('promise end');
​    })
  }

async function fn(){
​    let promise = Getfn();
​    promise.then(console.log);
​    let res = await promise;
​    console.log(res);
  }
  fn();
```

1. promise start 
2. promise end 
3. failed
4. uncaught promise failed

**二、实现一个九宫格抽奖小程序**

