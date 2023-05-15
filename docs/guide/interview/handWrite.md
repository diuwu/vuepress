# 各种手写题
## 手写call,apply,bind

### call

* call方法使用一个指定的this值和一个或多个参数来调用一个函数
* 官方定义的this参数：可选的。在 *`function`* 函数运行时使用的 `this` 值。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于[非严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装。

* ```javascript
  Function.prototype.myCall = function(context,...arg){
  	//判断是否在函数调用call
  	if(type of this !== 'function'){
  		throw new Error('this is not a funtion')
  	}
  	let defaultContext = null;
  	//获取当前环境的上下文
  	if(typeof self !== 'undefined'){
          defaultOntext = self;
  	}
  	if(typeof global !== 'undefined'){
          defaultOntext = global;
  	}
  	if(typeof window !== 'undefined'){
          defaultOntext = window;
  	}
  	context = context === null || context === undefined?defaultContext:new Object(context);
  	// 防止对象中出现重名元素
  	let fn = Symbol('fn');
  	// 将本函数赋给对象
  	context[fn] = this;
  	// 获取参数
  	const arg = arg||[];
  	// 返回结果
  	let result = context[fn](...arg);
  	delete context[fn];
  	return result;
  }
  ```

  

### apply

* apply方法和call 一样，区别就是参数为数组形式

* ```javascript
  Function.prototype.myCall = function(context,arg){
  	//判断是否在函数调用call
  	if(type of this !== 'function'){
  		throw new Error('this is not a funtion')
  	}
  	let defaultContext = null;
  	//获取当前环境的上下文
  	if(typeof self !== 'undefined'){
          defaultOntext = self;
  	}
  	if(typeof global !== 'undefined'){
          defaultOntext = global;
  	}
  	if(typeof window !== 'undefined'){
          defaultOntext = window;
  	}
  	context = context === null || context === undefined?defaultContext:new Object(context);
  	// 防止对象中出现重名元素
  	let fn = Symbol('fn');
  	// 将本函数赋给对象
  	context[fn] = this;
  	// 获取参数
  	const arg = arg||[];
  	// 返回结果
  	let result = context[fn](...arg);
  	delete context[fn];
  	return result;
  }
  ```

  

### bind

* bind同样是给函数绑定this,它返回一个原函数的拷贝，兼容new

* 如果返回的函数不兼容new 操作，new 出来的实例访问不到源函数的原型。

* es6,不兼容new

  * ```javascript
    function myBind(context,...arg1){
    	const fn = this;
    	return function(...arg2){
    		return fn.apply(context,...arg1,...arg2);
    	}
    }
    ```

* es5,不兼容new

  * ```javascript
    function myBind(context){
    	var arg1 = Array.prototype.slice.call(arguments,1);
    	var fn = this;
    	if(typeof fn !== 'funtion'){
    		throw new Error('this is not a function')
    	}
    	return function(){
    		var arg2 = Array.prototype.slice.call(arguments,0);
    		return fn.apply(context,arg1,arg2)
    	}
    }
    ```

* es5,兼容new

  * ```javascript
    function myBind(context){
    	var slice = Array.prototype.slice;
    	var arg1 = slice.call(arguments,1);
    	var fn = this;
    	if(typeof fn !== 'function'){
    		throw new Error('this is not a funtion');
    	}
    	function resFn(){
    		var arg2 = slice.call(arguments,0);
    		// new 的情况下this改绑成 new 出来的实例对象
            // 如果通过new 使用函数,this就指向新建的实例，
            // new时会执行this._porto_ = resFn.prototype
            // 直接调用时this 指向window
    		return fn.call(resFn.prototype.isPrototypeOf(this)?this:context,
    		arg1.concat(arg2))
    	}
        // 获取源函数的原型
    	resFn.prototype=fn.prototype;
    	return resFn;
    }
    ```

## 手写防抖、节流

### debounce

* 每次触发定时器时取消上个定时器，然后重新触发定时器。

* ```javascript
  function debounce(func,delay,immediate=false){
      let timer = null;
      //记录状态
      let isInvoke = false;
      let result;
  
      const _debounce = (...args)=>{
          //取消上一个定时器
          if(timer) clearTimeout(timer);
          
          //第一次执行不延迟
          if(!isInvoke && immediate) {
              fn.apply(this,args);
              isInvoke = true;
              return;
          }
  
          //设置定时器
          timer = setTimeout(()=>{
             result = fn.apply(this,args);
              timer = null;
              
              //重置isInvoke
              isInvoke = false;
          },delay)
          //返回结果
          return result;
      }
      _debounce.cancel = function(){
          if(timer) clearTimeout(timer);
          
          //取消时重置
          isInvoke = false;
          timer = null;
      }
      return _debounce;
  }
  ```

  

### throttle

* 每次触发定时器，直到这个定时器结束之前无法再次触发

* ```javascript
  function throttle(fn,interval,options={leading:true,trailing:false}){
      //开始时间
      let startTime = 0;
      let  timer = null;
      let result;
      const {leading,trailing} = options;
      
      const _throttle = function(...args){
          //获取当前时间
          const nowTime = new Date.getTime();
          
          //是否立即执行,使第一次不执行函数
          if(!leading && startTime == 0){
              startTime = nowTime;
          }
          //计算等待时间
          const waitTime = interval-(nowTime-startTime);
          //等待时间小于0,执行回调
          if(waitTime<=0){
              if(timer){
                  clearTimeout(timer);
                  timer=null;
              }
              result = fn.apply(this,args);
              startTime = nowTime;
          }
          //设置最后一次执行函数
          if(trailing && !timer){
              timer = setTimeout(()=>{
                  tiemr = null;
                  startTime = !leading?0:new Date().getTime();
                  result = fn.apply(this,args);
              },interval)
          }
      }
      //取消功能
      _throttle.cancel = function(){
          if(timer) clearTimeout(timer);
          timer = null;
          startTime = 0;
      }
      return _throttle;
  }
  ```


## 手写ajax

```typescript
interface Options {
    url:string,
    type?:"GET"|"POST"|"PUT",
    data:any,
    timeout?:number
}

    function formatUrl(obj){
        let urlArr = [];
        for(let key in obj){
            urlArr.push(`${key}=${encodeURIComponent(obj[key])}`);
        }
        return urlArr.join("&");
    }
export function ajax(options:Options = {
    url:"",
    type:"GET",
    data:{},
    timeout:3000
}){
    return new Promise((resolve,reject)=>{
        if(!options.url){
            return;
        }
        const querystring = formatUrl(option.data);
        let timer = null;
        let xhr = null;
        const onStateChange = ()=> {
            xhr.onreadystatechange=()=>{
                clearTimeout(timer);
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status<300 || xhr.status === 304){
                        resolve(xhr.responseText);
                    }else {
                        reject(xhr.status);
                    }
                }
            }
        }
        if((window as any).XMLHEEPRequest){
            xhr = new XMLHTTPRequest();
        }else {
            xhr  = new ActiveObject("Microsoft.HTTP");
        }
        
        if(options.type.toUpperCase() === "GET"){
            xhr.open("GET",`${options.url}?${queryString}`);
            onStateChange();
            xhr.send();
        } else if(options.type.toUpperCase === "POST"){
            xhr.open("POST",`${options.url}?${queryString}`);
            xhr.setRequestHeader("ContentType","application/x-www-form-urlencode");
            onStateChange();
            xhr.send(options.data);
        }
        
        if(options.timeout){
            timer = setTimeout(()=>{
                xhr.abort();
                reject("Time out");
            },options.timeout);
        }
    })
}
```

