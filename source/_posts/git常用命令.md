---
title: git常用命令
date: 2018-02-11 08:20:38
tags: Git
---

+ git fetch
+ git pull
+ git pull origin master

+ git merge

+ git remote -v
+ git remote add [name] [url]

+ git log
+ git log --stat
+ git log --stat --author="jane"
+ git diff HEAD~ HEAD

+ git stash
+ git stash pop

+ git archive --format zip --output /full/path/to/zipfile.zip master
+ git config core.ignorecase false
+ git merge -X theirs origin/master
+ git remote update origin  --prune 更新本地的远程分支列表
+ git cherry-pick  commithash  只合并某一次提交


+ git checkout tags/<tag-name> -b <branch-name>
+ git tag -l

+ git show branch:path/file

gitconfig的filemode用于设置是否记录文件权限的改变

