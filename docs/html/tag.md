---
lang: zh-CN
meta:
  - name: keywords
    content: 沈志勇,标签,面试题,标签语义化,html,语义化标签,SEO,H5
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
---

# 什么是语义化标签？

> 前言：说到这个问题，让我想到了刚入行时候的自己。菜鸟一枚（现在依旧很菜）。在看JD（job description）的时候。总是遇到一些新名词。上面的这个就是。听上去，感觉好高大上的啊！要想拿到offer，那就查呗！


要说语义化标签，我们要从HTML4说起。在HTML5出现之前的时代里，前端开发的主要机制就是div。通篇下来基本是div。如果想实现内容区域的划分，基本靠的是给标签属性添加不同的值进行标识。如：class=‘header’, id='header'。基本页面代码如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html> 
 <head> 
   <title> HTML4 Page </title> 
 </head> 
 <body> 
   <div id='header'>Header</div> 
   <div id='content'>Content</div> 
   <div id='footer'>Footer</div> 
 </body> 
</html>
```
目前文档结构十分简单，我们可以根据标签的id属性，很清楚的找到头部或者内容部分。试问，如果内容变多了怎么办？而且id的值是具有任意性的 id = "content"和id = "main" 都可以代表主要内容区域。我们还可以清楚的发现标签除了显示一个节点之外，其本身并没有起到内容区域区别的作用。

<contact></contact>
