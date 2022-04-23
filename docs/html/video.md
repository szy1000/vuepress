---
lang: zh-CN
meta:
  - name: keywords
    content: 前端,前端开发,video,autoplay,html,标签,autoplay不生效
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
  - name: Robots 
    content: "all"
---

# video标签 autoplay 不能自动播放

先说解决办法，加 muted属性即可

```html
<video controls autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

好了，现在可以播放？如果面试管此时问你，

* 1、为什么要这么设计？
* 2、为什么[抖音](https://www.douyin.com/?enter=guide)打开就可以播放


<contact></contact>
