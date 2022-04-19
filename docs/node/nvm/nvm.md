---
lang: zh-CN
meta:
  - name: keywords
    content: node,nvm,版本管理工具,nvm,后端,nvm无法安装, Failed to connect to raw.githubusercontent.com port 443',Connection refused,SwitchHost,下载
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
  - name: Robots 
    content: "all"
---

# nvm node的版本管理工具

> 背景：我们在日常开发当中，我们不免需要需要切换本地的node版本。


### 一、卸载历史node（如果没有node 忽略此步骤）

如需查看本机是否已经有node。

```javascript
node -v // 出现版本号 即本机装有node 需要卸载
```

**tips: 要用nvm对node进行版本管理。我必须将自己本地的node卸载干净。这样做的目的是为了避免不必要的冲突**

```javascript
sudo npm uninstall npm -g 
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
sudo rm -rf /usr/local/include/node /Users/$USER/.npm
sudo rm /usr/local/bin/node
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
```

卸载完成之后，需要进行 <code>node -v</code>进行查看


### 二、安装nvm

有2种安装方法, 如下：

```javascript 
//我用的是这个
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```


```javascript
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

不出意外的话，一定会出现意外。 输入命令之后会出现

```javascript
Failed to connect to raw.githubusercontent.com port 443 : Connection refused
```

解决的办法是修改本机的 <code>hosts</code>文件。添加如下内容：

```javascript
199.232.68.133 raw.githubusercontent.com
199.232.68.133 user-images.githubusercontent.com
199.232.68.133 avatars2.githubusercontent.com
199.232.68.133 avatars1.githubusercontent.com
```

在这里，我不建议大家进行手动hosts文件里面的内容。 我推荐使用switchHost工具进行管理。下载链接我放到了后面。

添加完代理之后，再次执行安装的命令 curl ....。安装成功。
我们暂时还不能使用 <code>nvm</code>的命令。需要添加环境变量

```javascript
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

最后，我们输入

```javascript
nvm --version //输出版本号 表示成功安装
```


### 三、常用命令

```javascript
nvm install 安装最新版本nvm
nvm install <version>  安装相应版本
nvm use <version>  切换使用指定的版本node
nvm alias default <version>  设置默认版本的node
nvm ls 列出所有版本
nvm ls-remote  列出远端所有版本
nvm current显示当前版本
nvm uninstall <version> 卸载制定的版本
```


相关链接

* [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
* [Connection refused](https://github.com/hawtim/hawtim.github.io/issues/10)
* [SwitchHost download](https://github.com/oldj/SwitchHosts/releases)


<contact></contact>
