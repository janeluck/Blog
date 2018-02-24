---
title: npm publish注意事项
date: 2018-02-17 20:37:32
tags: NodeJS
---

1. 版本号遵循[semver](https://github.com/npm/node-semver#readme)规则
2. 发布的包是cli工具时(全局安装), 一定要删掉package-lock.json.[package-lock.json is that it cannot be published](https://docs.npmjs.com/files/package-lock.json)