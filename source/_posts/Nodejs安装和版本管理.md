---
title: Nodejs安装和版本管理
date: 2018-03-17 15:44:52
tags: NodeJS
---

为每个项目指定运行的Node版本

#### nvm

1. 安装`nvm`, 用于下载和管理NodeJS的版本
    ```
    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    ```
2. 使用nvm安装需要的版本, 下面是常用的命令
    ```
    $ nvm install [version]

    $ nvm use [version]

    # 查看已安装的版本信息
    $ nvm ls
    ```
3. 可编写`.nvmrc`文件, 为当前目录指定版本, cd到该目录时运行`npm use`

#### avn
只用nvm, 不编写工具的话, 每次进入项目目录都需要激活, 非常不便利。可以使用`avn`, 解决这个问题

1. 安装`avn`, 为每个项目自动切换NodeJS版本
    ```
    $ npm install -g avn avn-nvm
    $ avn setup
    ```

2. 在项目目录下, 编写`.node-version`, 指定使用版本, 编写规则遵循[semver](https://semver.org/)



#### 参考链接
- [nvm](https://github.com/creationix/nvm) - Node Version Manager.
- [avn](https://github.com/wbyoung/avn) - Automatic Version Switching for Node.
- [Installing Multiple Versions of Node.js Using nvm](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)
