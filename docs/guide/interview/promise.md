## promise.resolve()



## promise.reject()

## promise.prototype.then()

* then方法返回一个新的 promise 对象 promise2
* 如果onFulfilled或onRejected 返回一个值x ，则执行resolvePromise(promise2,x,resolve,reject) 解决过程；
* 如果onFulfilled或onRejected 抛出异常e , 则promise2拒绝执行，返回拒绝原因e;
* 如果onFulfilled不是函数且promise1成功执行，promise2必须成功执行并返回相同的值
* 如果onRejected不是函数且promise1拒绝执行，promise2必须拒绝执行并返回相同的原因

## promise

* ```javascript
  class myPromise {
      static PENDING = 'pending';
  	static FULFILLED = 'fullfilled';
  	static REJECTED = 'rejected';
  
  	constructor(func){
          this.PromiseState = myPromise.PENDING;
          this.PromiseResult = null;
          this.onFulfilledCallbacks = []; // 保存成功回调
          this.onRejectedCallbacks = []; // 保存失败回调
          // reject 捕获错误
          try {
              func(this.resolve.bind(this),this.reject.bind(this))
          } catch(error) {
              this.reject(error)
          }
      }
  	resolve(res){
          if(this.PromiseState === myPromise.PENDING){
              this.PromiseState = myPromise.FULFILLED;
              this.PromiseResult = res;
              this.onFulfilledCallbacks.forEach(callback => {
                  callback(res);
              })
          }
      }
  	reject(reason){
          if(this.PromiseState === myPromise.PENDING){
              this.PromiseState = myPromise.REJECTED;
              this.PromiseResult = reason;
              this.onRejectedCallbacks.foEach(callback => {
                  callback(reason);
              })
          }
      }
  	then(onFulfilled,onRejected){
          // 判断入参是否为函数
          // 下方对参数进行了更细致的判断 ，此处可以删去了
          // onFulfilled = typeof onFulfilled === 'function'? onFulfilled:value=>value;
          // onRejected = typeof onRejected === 'function'? onRejected:reason =>{
          //     throw reason;
          // };
          const promise2 = new myPromise((resolve,reject)=>{
              if(this.PromiseState === myPromise.PENDIND){
              	// setTimeout 确保onFullfilled方法异步执行
                      this.onFulfilledCallbacks.push(()=>{
                          setTimeout(()=>{
                              try {
                                  if(typeof onFulfilled !=='function'){
                                      resolve(this.PromiseResult)
                                  }else {
                                      let x = onFulfilled(this.PromiseResult);
                                      resolvePromise(promise2,x,resolve,reject);  
                                  } 
                              } catch(e){
                          		reject(e)
                      		}
                          })                            
                       })
                      this.onRejectedCallbacks.push(()=>{
                          setTimeout(()=>{
                              try {
                                  if(typeof onRejected !== 'funtion'){
                                      reject(this.PromiseResult)
                                  } else {
                                      let x = onRejected(this.PromiseResult);
                                      resolvePromise(promise2,x,resolve,reject);
                                  }
                              } catch(e){
                          		reject(e)
                      		}                            
                          })                            
                       })
          	}else if(this.PromiseState === myPromise.FULFILLED){
                  // 添加异步
                  setTimeout(()=>{
                      try {
                          if(typeof onFulfilled !=='function'){
                              resolve(this.PromiseResult)
                          }else {
                            	let x = onFulfilled(this.PromiseResult);
                      		resolvePromise(promise2,x,resolve,reject);  
                          } 
                      } catch(e){
                          reject(e)
                      }
                      
                  })
          	}else if(this.PromiseState === myPromise.REJECTED){
                  setTimeout(()=>{
                      try {
                          if(typeof onRejected !== 'funtion'){
                              reject(this.PromiseResult)
                          } else {
                              let x = onRejected(this.PromiseResult);
                              resolvePromise(promise2,x,resolve,reject);
                          }
                      } catch(e) {
                          reject(e)
                      }
                  })
          	}
          })
          return promise2;
      }
  }
  /**
   * 对resolve(),reject()进行改造增强，针对resolve(),reject()中不同值情况进行改造增强
   * @param {promise}promise2 promise1.then中返回的新promise对象
   * @param {[type]} x		promise1中onFulfilled或onRejected的返回值
   * @param {[type]} resolve	promise2的resolve
   * @param {[type]} reject	promise2的reject
  **/
  function resolvePromise(promise2,x,resolve,reject){
      if(x === promise2){
          //如果promise1.then中返回promsie1本身,就报循环引用错误
          throw new TypeError('Chaning cycle detected for promise')
      }
      // 如果x是Promsie,则使promise2接收x的状态，继续执行x ,如果执行过程拿到y,则继续解析y;
      if(x instanceof myPromise) {
          x.then( y =>{
              resolvePromise(promise2,y,resolve,reject)
          },reject);
      }
      // 如果x不为对象或函数，以x为参数执行promise
      if(x!==null && ((typeof x === 'object') || (typeof x === 'function'))){
          // 如果x是对象或函数
          try {
              // 把x.then赋值给then
              var then = x.then;
          } catch(e) {
              // 取then时抛出错误则拒绝promise
  			return reject(e);            
          }
          // 如果then是函数，将x作为函数的作用域this调用之；
          // 传递两个回调函数做参数
          // 一个是resolvePromise,一个是rejectPromise
          if(typeof then === 'function'){
              // 如果resolvePromise 或 rejectPromise均被调用，或同一参数调用多次，优先采用首次调用并忽略剩下的调用
              let called = false; // 避免多次调用
              try {
                then.call(
                    x,
                    y=>{
                        if(called)return;
                        called = true;
                        resolvePromise(promise2,y,resolve,reject);
                    },
                    r=>{
                        if(called)return;
                        called = true;
                        reject(r);
                    }
                )  
              } catch(e){
                  if(called) return;
                  called = true;
                  reject(e);
              }
          } else {
              //如果then不是函数，以x为参数执行promise
              resolve(x)
          }
      } else {
          // 如果x不是对象和函数，以x为参数执行promise
          return resolve(x)
      }
  }
  ```

  

## promise.all()

## promise.allSettled()

## promise.race()

## promise.any()

## promise.prototype.catch()

## promise.prototype.finally()

