# 算法题

## 栈
### 二叉树的遍历
* 递归法

  * ```typescript
    // 中序遍历，其他两种遍历只是root.val的位置不同
    function fn(root):number[]{
    	if(!root) return[];
        let a =[];
        a.push(...fn(root.left),root.val,...fn(root.right));
        return a;
    }
    ```

    

* 迭代法，使用栈

  * ```typescript
    // 前序遍历，栈存储每个结点的右子结点（如果存在），
    // 然后向左子结点遍历，直到为空将栈中元素出栈，重复过程。
    function preorderTraversal(root: TreeNode | null): number[] {
        if(!root) return[];
        let p:TreeNode = root;
        let stack:TreeNode[] = [];
        let res:number[]=[];
        while(stack.length || p){
            if(p){
                if(p.right){
                    stack.push(p.right);
                }
                res.push(p.val);
                p=p.left;
    
            }else {
                p=stack.pop();
            }
        }
        return res;
    };
    // 中序遍历，与前序遍历类似，向左子节点遍历，将沿途的结点入栈，直到为空，
    // 将栈顶元素出栈取值，指针赋给右子结点，重复过程直到栈为空。
    function inorderTraversal(root: TreeNode | null): number[] {
        if(!root) return [];
        let res:number[]=[];
        let stack:TreeNode[] = [];
        let p = root;
        while(stack.length || p){
            if(p){
                stack.push(p);
                p=p.left;
            }else {
                let t = stack.pop();
                res.push(t.val);
                p=t.right;
            }
        }
        return res;
    };
    // 后序遍历，使用两个栈s1,s2,
    // (1)s1获取头结点，
    // (2)s1头结点出栈到s2,
    // (3)s2头结点的子结点入栈到s1,
    // 重复(2)(3)直到s1为空，然后遍历s2
    function postorderTraversal(root: TreeNode | null): number[] {
        if(!root) return [];
        let stack1:TreeNode[] =[];
        let stack2:TreeNode[] =[];
        let res:number[] = [];
        stack1.push(root);
        while(stack1.length){
            let p = stack1.pop();
            stack2.push(p);
            if(p.left){
                stack1.push(p.left);
            }
            if(p.right){
                stack1.push(p.right)
            }
        } 
        while(stack2.length){
            res.push(stack2.pop().val);
        }
        return res;
    };
    ```

* 以上是二叉树的遍历，n叉树的遍历同理。

### 用栈实现队列

* 类内部定义两个栈s1,s2。s1用于入队列,s2用于出队列。

* 出队列时若s2为空，需要将s1的元素全部入栈到s2再将s2的栈顶元素出栈。

* ```typescript
  class MyQueue {
      private a:number[];
      private b:number[];
      constructor() {
          this.a=[];
          this.b=[];
      }
  
      push(x: number): void {
          this.a.push(x);
      }
  
      pop(): number {
          if(this.b.length === 0){
              while(this.a.length){
                  this.b.push(this.a.pop())
              }
          }
          return this.b.pop();
      }
  
      peek(): number {
          let x = this.pop();
          this.b.push(x);
          return x;
      }
  
      empty(): boolean {
          return !this.a.length && !this.b.length;
      }
  }
  ```


## 排序算法

### 冒泡排序

* 比较相邻的元素，如果第一个比第二个大，则交换位置，重复以上步骤。

* 时间:O(n^2)

* ```javascript
  function BubbleSort(arr){
      for(let i = 0;i < arr.length;i++){
          for(let j = 0;j < arr.length-i-1;j++){
              if(arr[j] > arr[j+1]){
                  temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
              }
          }
      }
  }
  ```

  

### 选择排序

* 寻找无序区最小元素，排到有序区的末尾。

* 时间：O(n^2)

* ```javascript
  function selection_sort(arr){
      for(let i = 0;i < arr.length-1;i++){ //有序区的末尾
          let min = i;
          for(let j = i+1;j<arr.length){ //无序区
              if(arr[j]<arr[min]){
                  min = j; // 记录最小值
              }
          }
          swap(arr[i],arr[j]);
          
      }
  }
  ```

### 插入排序

* 在有序区从前往后扫描，找到相应位置插入无序区的元素。

* 时间：O(n^2)

* ```javascript
  function insert_sort(arr){
      let i,j,key;
      for(i = 1;i<arr.length;i++){
          key = arr[i]; //要插入的无序区元素
          j = i-1;
          while(j>=0 && arr[j]>key){
              arr[j+1] = arr[j]; // 有序区的元素后移
              j--;
          }
          arr[j+1] = key;
      }
  }
  ```

  

### 希尔排序

* 将无序区序列分割成若干子序列分别进行插入排序，再对整体进行一次插入排序；

* 时间：O(nlogn)

* ```javascript
  function shell_sort(arr){
      let inc = len;
      let i,j,k;
      do {
          inc = inc / 3 + 1; // 分组的增量
          for(i=0;i<inc;i++){
              for(j=i+inc;j<arr.length;j+=inc){
                  let key = arr[j];
                  for(k=j-inc;k>=0 && arr[k]>key;k-=inc){
                      arr[k+inc] = arr[k];
                  }
                  arr[k+inc] = key;
              }
          }
      } while(inc > 1);
  }
  ```

  

### 快速排序

* 挑选一个元素为基准值，比基准值小的元素放基准值前，比基准值大的元素放基准值后。对前后分区递归操作。

* ```javascript
  function quickSort(arr,start,end){
      if(start > end){
          return;
      }
      let i=start;
      let j=end;
      let base = arr[i];
      while(i<j){
          //从右往左找比基准值小的数，交换位置
          while(i<j && arr[j]>=base){
              j--;
          }
          if(i<j){
              arr[i] = arr[j];
              i++;
          }
          //从左往右找比基准值大的数，交换位置
          while(i<j && arr[i]<base){
              i++;
          }
          if(i<j){
              arr[j] = arr[i];
              j--;
          }
      }
      //分区结束，基准值放到i 的位置
      arr[i] = base;
      //递归左右分区
      quickSort(arr,start,i-1);
      quickSort(arr,i+1,end);
  }
  ```

  