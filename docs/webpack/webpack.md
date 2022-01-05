---
lang: zh-CN
meta:
  - name: keywords
    content: 沈志勇,面试题,webpack,构建工具,webpack面试题,压缩代码优化代码
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
---

# Webpack面试题

* 为什么要进行构建和打包？
	1. 体积更小(Tree-shaking，压缩、合并),加载更快
	2. 编译高级语言或语法（TS, ES6+,模块化,SCSS）
	3. 兼容性和错误检查(Polyfill, postcss, eslint)
	4. 统一的高效开发环境
	5. 统一构建流程和产出标准
	6. 集成公司构建规范
* module chunk bundle分别是什么 有何区别？
	1. module - 各个源码文件， webpack中一切皆模块
	2. chunk - 多模块合并的 如 entry import splitChunk
	3. bundle - 最终输出的文件
* loader和plugin的区别？
	1. loader 模块转化器，如less-->css
	2. plugin扩展插件 如 HtmlWebpackPlugin
* webpack如何实现懒加载
	1. import
	2. Vue React异步组件
* webpack 常见性能优化
* babel和webpack区别
	1. babel js的新语法编译工具，不关心模块化
	2. webpack 构建工具 是loader和plugin的集合 
* bable-runtime和babel-polyfill的区别

## 基础配置
	
拆分和merge

*webpack-merge*
webpack.common.js
webpack.dev.js
webpack.prd.js


```javascript
devServer: {
	open: true, // 自动打开浏览器
	compress: true // 启动gzip
}

```

.babelrc

处理css
//自右向左
['style-loader','css-loader','postcss-loader']

处理image
loader: 'file-loader' || 'url-loader' 

（模块化）


## 高级配置

* 多入口
	
```javascript

entry: {
	index: path.join(srcPath, 'index.js'),
	other: path.join(srcPath, 'other.js')
}

plugins: [
	new HtmlWebpackPlugin({
		template: path.join(srcPath, 'index.html'),
		filename: 'index.html',
		chunks: ['index'],
		// chunks: ['index', 'vendor', 'chunk']
	}),
	
	new HtmlWebpackPlugin({
		template: path.join(srcPath, 'other.html'),
		filename: 'other.html',
		chunks: ['other']
	}),
]

```
	
* 抽离css build-min-extract-css. mini-css-extract

```javascript

optimization {
	minimizer: [
		new TerserJSPlugin({}), 
		new OptimizeCSSAssetsPlugin()
	]
}

```

* 抽离公共代码《bulid-split-chunks》


```javascript
optimization: {
	splitChunks: {
		chunks: 'all',
		// initial 入口chunk 对于异步文件不处理
		// async 异步chunk 只对异步导入的文件处理
		// all 全部 chunk
		
		cacheGroups: {
			// 第三方模块
			vendor: {
				name: 'vendor',
				priority: 1,
				test: 'node_modules',
				minSize: 0,
				minChunks: 1, // 最少复用几次
			},
			// 公共的模块
			common: {
				name: 'common',
				priority: 0,
				minSize: 0,
				minChunks: 2	// 公共模块最少复用几次
			}
		}
	}
	
}
```


* 懒加载

import('./xxx.js').then(res => {
	console.log(res.default.xxx)
})

* 处理jsx
{
	"presets": ["@babel/preset-react"]
}
* 处理vue
{
	test: '\.vue$'/,
	loader: ['vue-loader'],
	include: 'src'
}

## 优化打包效率

* 优化babel-loader
	
>开启缓存 明确范围 use  include

* IgnorePlugin
* noParse
* happyPack(多进程打包)
	*	JS单线程，开启多进程打包
	* 提高构建速度（特别是多个CPU）
	* https://github.com/amireh/happypack
* ParallelUglifyPlugin(多进程压缩JS)
	* webpack内置的Uglify工具压缩JS
	* JS单线程，开启多进程压缩更快
	* 和HappyPack同理	

	**关于开启多进程**

	* *项目较大，打包慢，开启多进程能提高速度*
	* *项目小，打包快。开启多进程反而降低速度(进程开销)*
	* 
* 自动刷新 
	* watch设置true
	* 配置devServer  （webpack-dev-server）
* 热更新（HotModuleReplacementPlugin）
	*  自动刷新 整个页面会更新，速度会变慢
	*  整个页面的状态丢失 尤其是form表单数据
	*  热更新不会
	
	```javascript
	entry: {
		index: [
			'webpack-dev-server/client?http://localhost:8080/',
			'webpack/hot/dev-server',
			 path.join('src','other.js'）
		]
	}
	```
* DllPlugin（动态链接库插件）
	* 前端框架 vue React 体积大 构建慢
	* 较稳定 不常升级版本
	* 同一版本只构建一次 不重复构建
	* 
	* webpack内置 DllPlugin
	* 打包出Dll文件
	* DllReferencePlugin - 使用dll文件
	* 配置webpack.dll.js文件


## 优化产出代码 (生产环境)

* babel-loader
* IgnorePlugin
* noParse
* happyPack
* ParallelUglifyPlugin

## 不可以用生产环境
* 自动刷新
* 热更新
* DllPlugin
	
## webpack性能优化--产出代码
1. 体积更小
2. 合理分包 不重复加载
3. 速度更快 内存使用更少

* 小图谱base64
* bundle加hash
* 懒加载
* 提取公共代码
* IngorePlugin
* 使用CDN
* 使用production
	* 自动压缩代码
	* 自动删除调试代码（如warning）
	* 启动Tree-Shaking // ES6 module才可以 commonjs不行
	
	**关于ES6 Module和Commonjs的区别**
	
	1. ES6 module 静态引入，编译时引入		
	2. Commonjs动态引入，执行时引
	3. ES6 module才能静态分析 实现tree-shaking
	
* Scope Hosting（作用域）
	
	
## 构建流程概述

## babel

* 环境搭建 && 基本配置
	1. .babelrc配置
	2. presets 和 plugins  // presets是plugins的集合
	3. https://www.babeljs.cn/docs/presets
* babel-polyfill(babel7.4-已经废弃)
	1. core-js和regenerator两者集合
	2. core-js 适配低版本的浏览器
	3. regenerator 支持generator
* babel-runtime
	1. 不污染全局环境


<contact></contact>
