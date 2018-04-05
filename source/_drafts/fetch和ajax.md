---
title: fetch和ajax
tags:
---

ajax
HttpXMLRequest的四种状态


```javascript

var xhr = new HttpXMLRequest()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){

    }
}

xhr.open('GET', url)
xhr.send()

```


fetch


fetch


[Ajax函数封装](https://segmentfault.com/a/1190000004168721)
[fetch使用的常见问题及其解决办法](https://segmentfault.com/a/1190000008484070)