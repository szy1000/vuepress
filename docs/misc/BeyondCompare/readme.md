---
lang: zh-CN
meta:
  - name: keywords
    content: Beyond Compare,文件比较,这个授权密钥已被吊销,解决办法,密钥过期
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
  - name: Robots 
    content: "all"
---

# 如何解决Beyond Compare “这个授权密钥已被吊销”的办法

<font color="red">使用Beyond Compare来进行文件对比及操作是提高生产力的最佳实践之一，请支持正版。</font>

今天在使用Beyond Compare的时候发现。密钥被吊销了。于是我就想办法解决。以下是解决方法（我使用的系统是mac）

### 一、访问Beyond Compare文件夹

> mac用户
> ~/Library/Application Support/Beyond Compare
>
>win 用户
>C:\Users\Admin\AppData\Roaming\Scooter Software\Beyond Compare 4

mac用户，请按住 <code>command ⌘ + shift⇧ + g</code>，在弹出的对话框里面输入上面的路径。回车即可！

### 二、修改BCState.xml文件

打开BCState.xml文件，替换 TCheckForUpdatesState 标签。删除标签下面的所有内容，仅保留一项

```xml
<TCheckForUpdatesState>
    <Build Value="24545"/> 
</TCheckForUpdatesState>
```


### 三、修改BCSessions.xml文件

打开BCSessions.xml文件,删除标签下面的所有内容。仅保留 <code>Version</code>, <code>MinVersion</code>属性
```xml
<BCSessions Version="1" MinVersion="1">
</BCSessions>
```



本文仅为学习用，请支持正版，如有侵权请联系站长删除。

<contact></contact>
