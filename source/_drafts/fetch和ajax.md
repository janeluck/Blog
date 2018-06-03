---
title: fetch和ajax
tags: JavaScript
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
[传统 Ajax 已死，Fetch 永生](https://github.com/camsong/blog/issues/2)
[fetch 没有你想象的那么美](https://undefinedblog.com/window-fetch-is-not-as-good-as-you-imagined/)