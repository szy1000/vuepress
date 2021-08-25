---
lang: zh-CN
meta:
  - name: keywords
    content: meta,name,content,keywords,沈志勇,description,面试题,meta标签,html,语义化标签,SEO,
  - name: description
    content: meta标签在我们编码的时候极少用到,但他又比较重要。今天我们一起来回顾一下meta标签的使用
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
---

# 浅谈meta标签及踩过的坑

说到 <code>meta</code> 标签相信大家都不陌生，尤其是做过移动端的同学。一定知道下面代码，用来控制浏览器窗口大小和缩放。
```html
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;">
``` 
那么还有其他的吗？ 有的同学还知道知道 description charset等等。今天我就过来总结一下 <code>meta</code>的使用场景。和自己之前遇到坑。
温故知新。希望能帮到你！不足之处，欢迎大家扫码补充。

## meta的作用
* 设置网页的编码类型
* 搜索引擎(SEO)的优化
* 自动刷新页面
* 控制页面的缓存
* 控制页面显示的窗口
* 等等

## meta的用法

meta总共包含4个属性:

1. charset(HTML5新增)
2. name
3. http-equiv
4. content 

前三个属性规定标签给谁传递信息；content属性用来说明name和http-equiv的具体内容。

## meta属性详解

#### charset属性
用来定义当前文档的编码方式，告诉浏览器如何解析当前页面

```html
<meta charset="utf-8">
```

#### name属性

meta标签详解

https://www.cnblogs.com/zhuochong/p/11642930.html


https://segmentfault.com/a/1190000012039824

<contact></contact>
