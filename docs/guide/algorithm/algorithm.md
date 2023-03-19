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

  