---
lang: zh-CN
meta:
  - name: keywords
    content: 沈志勇,JavaScript,面试题,git,git操作,同时推送到远端
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
---

# git推送到远端的操作

在日的开发当中，我们有可能因为某些特殊的需求。需要将1份代码同步到2个远端仓库。


## 新建本地git

需求背景：我们要想将远端的代码复制到自己的电脑上面，我们有2种方式

第一种是 在本地初始化项目 然后利用add进行链接（推荐）
```javascript
  git init
  git remote add github https:xxxxx 

  git push -u github master
```

第二种是： 在服务器上面直接clone 下来

```javascript
    git clone https://xxx
```

**上面2种方式的区别在于git remote 查看的时候 如下**

```javascript
    git remote
    
    github  // 方法一 （推荐）
    origin  // 方法二 （默认的名字就是origin了）
```



## 方法一、使用git remote add 命令添加新的链接地址

上面的操作 可以是我们拉取到github上面的代码。如果我们想再同步一份到码云上面

```javascript
    git remote add gitee https://xxxx  // gitee是名字 后面是git地址

```



## 方法二、添加另外一个远端仓库的地址

```javascript
  git remote set-url --add origin 你的码云地址	// 添加远端地址
  git remote rm  name
```

## 方法三、修改配置文件（不推荐）

打开 .git/config 找到 [remote "github"]，添加对应的 url 即可，效果如下。（同方法二）

```javascript

[remote "github"]
    url = https://github.com/zxbetter/test.git
    fetch = +refs/heads/*:refs/remotes/github/*
    url = https://git.oschina.net/zxbetter/test.git


```

## 三种方法的区别

方法一 二 三在push的时候 没什么区别。但是二和三，只能在pull fetch的时候，只能从默认的远端代码库（origin）获取最新的代码。

如果仅仅是同步推送的话，建议使用方法二和三。 如果2个远端的分支都有修改同步操作，建议使用方法一。

## 同时推送到远端


```javascript
  git push -u origin master // branch name
```

## 推送到单个远端分支

```javascript
  git push -u github master // 推到github
  
  git push -u gitee master // 推到gitee
```





[相关链接](https://segmentfault.com/a/1190000011294144)

<contact></contact>


