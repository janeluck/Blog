---
title: mac常用命令行小工具
date: 2018-02-26 13:35:05
tags:
- Unix
- Mac
---

### alias
安装oh-my-zsh后可补充一些常用alias
```
# 树形显示当前目录的文件信息并忽略node_modules
treen='tree -I node_modules'

# git 相关
gam='git commit -a -m'
gp='git push'
gpo='git pull origin master'
```

### bash
脚本放在`/usr/local/bin`下

```bash
#!/bin/bash
# 在终端发起搜索，打开默认浏览器并用谷歌搜索键入的参数
open http://www.google.com/search?q="$*"
```