var send = document.getElementById('send');
var parent = document.getElementById('content-items');
send.addEventListener('click', function () {
    //jq
    var html = $('<ul class="content-items" id="content-items">' +
        '<li class="content-item">' +
        '<div class="left-pic">' +
        '<img src="./images/user.jpg" alt="">' +
        '</div>' +
        '<div class="message">' +
        '<p class="name">联系人</p>' +
        '<p class="detail">晚上一起吃饭吗？</p>' +
        '</div>' +
        '<div class="time">' +
        '<span>下午 3:50</span>' +
        '</div>' +
        '</li>' +
        '</ul>')
    html.appendTo(parent);

    //原生js
    /*  var li = document.createElement('li');//js中创建一个DOM,li元素节点
        var divpic = document.createElement('div');创建一个div元素节点
        var img = document.createElement('img');创建一个img元素节点
        var message = document.createElement('div');
        var p1 = document.createElement('p');创建一个p元素节点
        var p1txt = document.createTextNode('联系人');创建一个p元素下的文本节点
        var p2 = document.createElement('p');
        var p2txt = document.createTextNode('晚上一起吃饭吗？');
        var time = document.createElement('div');
        var span = document.createElement('span');
        var spantxt = document.createTextNode('下午 3:50');

        li.setAttribute('class','content-item');//js中创建一个DOM,li节点下的属性节点;
        divpic.setAttribute('class','left-pic');
        img.setAttribute('src','./images/user.jpg');
        message.setAttribute('class','message');
        p1.setAttribute('class','name');
        p2.setAttribute('class','detail');
        time.setAttribute('class','time');
            
        
        li.appendChild(divpic);//给li标签中添加一个divpic孩子
        li.appendChild(message);
        li.appendChild(time);  
        divpic.appendChild(img);    
        message.appendChild(p1); 
        message.appendChild(p2); 
        p1.appendChild(p1txt); 
        p2.appendChild(p2txt);
        time.appendChild(span);
        span.appendChild(spantxt);
            
        parent.appendChild(li);*/
})