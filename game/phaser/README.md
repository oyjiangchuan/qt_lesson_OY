- callback
    addEventLisitener(event_type, callback());
定义时，不执行，注册了，注册在事件模型中
事件发生时，将注册的回调函数拿回来调用一下 JS中典型的异步问题


- fs 文件模块
    异步是需要花时间的，注册行为，callback
    err 

- 操作系统
    addEventLisitener 事件操作  
    I/O操作 input 和 output  
    CPU(运算和指令) 内存，外部存储设备
    I/O操作 典型的慢操作 
    fs.readFile(path,'utf8', callback)