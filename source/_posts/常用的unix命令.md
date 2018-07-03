---
title: 常用的unix命令
date: 2018-03-13 19:55:25
tags: Unix
---


+ 找出匹配的文件并批量执行命令
```
$ find ./images/scrm/leftNav -iname '._*.png' -exec rm {} \;
```

+ 查找目录
```
$ find ./ -name [directoryname] -type d
```

+ 在指定目录下查找字符串
```
$ grep -r [string] [path]
```

+ 批量删除当前文件夹下符合命名规则的文件

```
$ find . -name '*.orig' #-delete
```

+ 在服务器之间拷贝文件
```
$ scp -P [port]  [file]    [user]@[address]:[path]
```

+ 从终端输入并写到指定文件
```
$ cat > [filename]
```

+ 查看项目里npm依赖版本号
```
$ npm list --depth=0 |grep [name]
```



+ 网络相关
```
$ host github.com

$ nsloopup github.com


```


