RPC：Remote Procedure Call (远程过程调用)

和 ajax 有什么相同点？
1. 都是两个计算机之间的通信
2. 都需要双方约定一个数据格式

和 ajax 有什么不相同点？
1. ajax 一定要使用DNS作寻址服务，RPC 不一定要使用DNS作寻址服务
2. RPC 应用层的协议一般不使用HTTP，ajax 应用层的协议使用HTTP
3. RPC 基于TCP或UDP协议

- 寻址/负载均衡
1. ajax 使用DNS进行寻址
2. RPC 使用特有服务进行寻址

- TCP 通信方式
  - ajax 单工通信
  - RPC 多种形式通信 (半双工通信、全双工通信)

- 二进制协议
  - ajax：HTTP (HTML 、json)
  - RPC：二进制协议 (更小的数据包体积，更快的编码速率) 


# RPC 调用：Buffer 编码解码二进制数据包