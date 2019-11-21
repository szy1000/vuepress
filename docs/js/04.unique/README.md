---
lang: zh-CN
meta:
  - name: keywords
    content: 沈志勇,前端面试题,数组去重,面试题汇总,javascript,js面试题
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
---

# Javascript数组去重方法汇总

## 前言

关于数组去重，也算是一个比较常见的面试题了。但是有点开发经验的同学又会发现，前端数组去重的操作很少见（也可能是我个人经验不足遇到的比较少）。这是为什么呢？。我感觉可能是大部分的去重操作被后端处理了。个人见解！
虽然，前端很少用到。本着爱（kuai)与(su)和(zhang)平(xin)的精神，我们也来学习一波！

## 方法汇总

### 一、IndexOf
IndexOf是数组的一个原生方法，当你传入一个参数的时候，它会返回入参数的索引值。如果未找到就返回 -1。利用这一特性，

```javascript
var arr = [1, 2, 1, 4, 5, 7, 3, 4, 6]

function unique(array) {
	var res = []
	for(var i = 0; i < array.length; i++) {
		if(res.indexOf(array[i]) === -1) {
			res.push(array[i])
		}
	}
}

unique(arr)  // 1, 2, 4, 5, 7, 3, 6
```
评价：

<contact></contact>
