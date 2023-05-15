## http状态码

|      | 类别             | 原因                       |
| ---- | ---------------- | -------------------------- |
| 1xx  | 信息状态码       | 接收的请求正在处理         |
| 2xx  | 成功状态码       | 请求正常处理完毕           |
| 3xx  | 重定向状态码     | 需要进行附加操作以完成请求 |
| 4xx  | 客户端错误状态码 | 服务器无法处理请求         |
| 5xx  | 服务器错误状态码 | 服务器处理请求出错         |

| 状态码 | 信息                  | 结果                                                         |
| ------ | --------------------- | ------------------------------------------------------------ |
| 200    | OK                    | 请求正常处理                                                 |
| 204    | No Content            | 请求正常处理，但没有资源返回                                 |
| 206    | Partial Content       | 客户端进行范围请求，服务端正常处理                           |
| 301    | Moved Permanetly      | 请求的资源使用的新的URI,指定资源的路径最后忘记添加"/"会出现  |
| 302    | Found                 | 请求的资源临时改变了URI，302标准禁止将POST重定向成GET,但未被严格遵守 |
| 303    | See Other             | 请求的资源存在另一个URI,希望使用GET方法定向请求              |
| 304    | Not Modified          | 允许请求访问资源，但未满足请求条件如If-Match,If-Range        |
| 307    | Temporary Redirect    | 跟302一样，307不会将POST变成GET                              |
| 400    | Bad Request           | 请求报文存在语法错误                                         |
| 401    | unauthorized          | 请求需要认证信息，或信息认证失败                             |
| 403    | Forbidden             | 请求被服务器拒绝                                             |
| 404    | Not Found             | 服务器找不到请求的资源，或者服务器拒绝请求                   |
| 500    | Internal Server Error | 服务器执行请求发生错误，可能是Web应用存在bug或其他故障       |
| 503    | Service Unavailable   | 服务器在超负载或停机维护，无法处理请求                       |

## http首部字段

* 通用首部字段

| 字段名            | 说明                       |
| ----------------- | -------------------------- |
| Cache-Control     | 控制缓存的行为             |
| Connection        | 逐跳首部、连接的管理       |
| Date              | 创建报文的日期             |
| Pragma            | 报文指令                   |
| Trailer           | 报文末端的首部一览         |
| Transfer-Encoding | 指定报文主体的传输编码方式 |
| Upgrade           | 升级为其他协议             |
| Via               | 代理服务器的相关信息       |
| Warning           | 错误通知                   |

* 请求首部字段

| 字段名              | 说明                                        |
| ------------------- | ------------------------------------------- |
| Accept              | 用户代理可处理的媒体类型                    |
| Accept-Charset      | 优先的字符集                                |
| Accept-Encoding     | 优先的内容编码                              |
| Accept-Language     | 优先的语言                                  |
| Authorization       | Web认证信息                                 |
| Except              | 期待服务器的特定行为                        |
| From                | 用户的电子邮箱地址                          |
| Host                | 请求资源所在服务器                          |
| If-Match            | 比较实体标记 ETag                           |
| If-Modified-Since   | 比较资源的更新时间                          |
| If-None-Match       | 比较实体标记(与If-Match相反)                |
| If-Range            | 资源未更新时发送实体Byte的范围请求          |
| If-Unmodified-Since | 比较资源的更新时间(与If-Modified-Since相反) |
| Max-Forwards        | 最大传输逐跳数                              |
| Proxy-Authorization | 代理服务器要求客户端的认证信息              |
| Range               | 实体的字节范围请求                          |
| Referer             | 对请求中URI的原始获取方式                   |
| TE                  | 传输编码的优先级                            |
| User-Agent          | HTTP客户端程序的信息                        |

* 响应首部字段

| 字段名             | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| ETag               | 资源的匹配信息               |
| Location           | 令客户端重定向至指定URI      |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP服务器的安装信息         |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |

* 实体首部字段

| 字段名           | 说明                   |
| ---------------- | ---------------------- |
| Allow            | 资源可支持的HTTP方法   |
| Content-Encoding | 实体主体适用的编码方式 |
| Content-Language | 实体主体的自然语言     |
| Content-Length   | 实体主体的大小         |
| Content-Location | 替代对应资源的URI      |
| Content-MD5      | 实体主体的报文摘要     |
| Content-Range    | 实体主体的位置范围     |
| Content-Type     | 实体主体的媒体类型     |
| Expires          | 实体主体过期的日期时间 |
| Last-Modified    | 资源的最后修改日期时间 |

## 请求头ContentType的值

* Content-Type用于标识请求中的媒体类型信息。
* 格式为 type/subtype(;parameter)? type 。主类型/子类型;参数
* **常见格式**
  * text/html:  HTML格式
  * **text/plain**:  纯文本格式
  * text/xml:  XML格式
  * image/gif:  gif图片格式
  * image/jpeg:  jpg图片格式
  * image/png:  png图片格式
  * application/xhtml+xml:  XHTML格式
  * apllication/xml:  XML格式
  * apllication/atom+xml:  Atom XML聚合格式
  * apllication/json:  JSON数据格式
  * apllication/pdf:  pdf格式
  * apllication:msword: Word文档格式
  * apllication:octet-stream:  二进制流数据
  * **apllication/x-www-form-urlencoded**:  （key1=val1&key2=val2格式）form表单默认的提交数据格式
  * **multipart/form-data**:  表单上传文件用的格式,也可以上传键值对。最后都会转换成一条消息。

##  http2.0

* http1.1对比：

  * http1.1之前每个请求都要新建一个链接。

  * http1.1的keep-alive字段可以复用原有的TCP链接，Chrome浏览器可允许6个并发数，但是同一个TCP链接通道的两个请求可能存在阻塞等待的情况，会阻塞后面队列的其他请求。

* 压缩、多路复用、TLS义务化、协商、客户端pull,服务端push、流量控制、WebSocket

* **二进制分帧，多路复用**：

  * 二进制分帧在TLS协议之上抽象了一层，传输的时候把一个请求拆分成多个小的数据包，多个请求拆成多个数据包一起发送，在服务端再根据数据包的序号进行拼接。
  * 二进制分帧层的三个结构
    * frame 是最小的传输单位
    * message 是逻辑层面的东西，表示是请求message还是响应message，一个message包含多个frame
    * stream 是最大粒度的包，包含唯一性字段和优先级信息，包含message
  * 多路复用的过程：
    * http2.0将数据包拆分成多个frame, 组成一个个stream，在一条双向tcp管道中传输。
  * http2.0把请求的数据使用二进制进行传输,减少文本转义的额外性能开销。

* **头部压缩**

  * http2.0 会维护一张头部信息哈希表，同时存储在客户端和服务端，每次传输的时候，如果发现传输的头部信息在哈希表中已经存在，则只传哈希表的index值，不再传输具体的内容，如果有新的头部字段，这张哈希表也会动态的在客户端以及服务端增加新值，后续再有相同字段的时候，将不会再传输，只会传哈希表的index值。

* **服务端推送**

  * 区别于websocket，http2.0 根据文件中的关联的其他文件，预判并主动推送下次请求中必须的数据。

## https

* https加密在HTTP和TCP层之间加了一层SSL/TLS协议进行加密。

### 一、SSL证书的获取

* 认证中心CA给个人颁发证书，包含以下内容：
  * 数字签名（CA机构使用私钥对服务器公钥进行加密，生成数字签名）
  * 摘要（对服务器公钥用Hash算法进行加密，生成摘要）
  * 哈希算法（生成摘要的哈希算法）

### 二、SSL/TLS 握手过程 

* 1.客户端发送 **clilent hello 报文**开始SSL通信。报文包含客户端支持的TLS版本和密码组合（所使用的加密算法及密钥长度）。
* 2.服务器发送 **server hello 报文**进行回应。同样包含TSL版本和加密组件。
* 3.服务器发送**certificate报文**，包含**公开密钥证书**。.
* 4.服务器发送**server hello done** **报文** ，通知客户端最初阶段SSL握手协商结束。
* 5.第一次握手结束，客户端对服务器发来的证书进行校验（使用CA公钥对证书进行解密，获取服务器公钥），校验完成后。客户端发送**client key exchange报文**。报文包含随机密码串**pre-master-secrect**，报文用步骤3的服务器公开密钥进行加密，只有对应私钥才能解密。
* 6.客户端发送**change cipher spec报文**。报文提示服务端之后采用pre-master-secrect密钥加密。
* 7.客户端发送**finished报文**，报文包含连接过程的整体校验值，经过了**共享密钥key**加密，看服务器能否解密该报文。
* 服务器用私钥解密pre-master-secrect ,服务器和客户端用相同的算法生成相同的**共享密钥key**。
* 8.服务器发送**change cipher spec报文**。
* 9.服务器发送**finished报文**。
* 10.服务器和客户端交换完毕finished报文，SSL连接就算建立完成。此处开始进行http请求。
* 11.发送http响应
* 12.最后客户端断开连接。

## Web攻击技术

### 一、跨站脚本攻击XSS

* XSS是通过存在安全漏洞的Web网站注册用户的浏览器内运行的非法的HTML标签或Javascript进行的一种攻击。动态创建的HTML部分有可能隐藏安全漏洞。
* XSS攻击：
  * 利用虚假输入表单骗取用户个人信息
  * 用脚本窃取用户的Cookie值，发送恶意请求
  * 显示伪造的文章或图片
* 解决方法：
  * 使用xss插件
  * 在表单提交或url参数传递前，对需要的参数进行过滤。
  * 检查用户输入是否有非法内容。如<>" ' % : () & +

### 二、SQL注入攻击

* SQL攻击会执行非法SQL，针对Web应用使用的数据库，会造成信息泄露。
* 如在搜索关键词后加'--,sql语言判定--为注释，此关键词后面的搜索语句失效。

### 三、OS命令注入攻击

* 通过Web应用执行非法的操作系统命令，能调用Shell的地方就有被攻击的风险。通过OS攻击可执行操作系统上安装的各种程序。

### 四、HTTP首部注入攻击

* 在响应首部字段内插入换行，添加任意响应首部或主体。
* 攻击示例：
  * 设置任意的cookie值
  * 重定向至任意URL
  * 显示任意的主体，向首部主体添加内容

### 五、会话劫持

* 通过某种手段拿到用户的会话ID,非法使用此会话ID伪装成此用户进行攻击。

### 六、跨站点请求伪造CSRF

* 攻击者通过设计好的陷阱，强制对已完成认证的用户进行非预期的个人信息或设定信息等某些状态更新。

* 简单的说攻击者盗用你的身份信息发送恶意请求。用户登录了网站A没有退出浏览了网站B,网站B的恶意请求携带的A的Cookie信息，对网站A发起请求。

* 解决方法

  * 检测http Referer字段，即网站的请求源地址。

  * 对用户凭证进行校验处理，使用token身份验证。

### 七、Dos攻击

* 集中利用访问请求造成资源过载，通过攻击安全漏洞使服务停止。让运行中的服务呈停止状态。