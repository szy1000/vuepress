---
lang: zh-CN
meta:
  - name: keywords
    content: react,hooks,前端,,开发工程师,面试
  - name: author
    content: 沈志勇,沈志勇说,shenzhiyong,szy1000
  - name: Robots 
    content: "all"
---

# 初识React Hooks

### React Hooks解决了哪些问题：

公司主要技术栈:react antd umi dva serverless(部分团队)

* 1、熟悉Web前端开发技术；有项目经验者优先


### React Hooks如何模拟组件生命周期


```javascript

const [count, setCount] = useState(0);



useEffect(() => {
	console.log('DidMount and DidUpdate')
})

useEffect(() => {
	console.log('DidMount!')
}, [])

useEffect(() => {
	console.log('DidUpdate')
}, [count]) 

// 第二个参数主要是数组 监听count的变化

useEffect(() => {
	let timeId = window.setInterval(() => {
		console.log(Date.now())
	}, 1000)
	// 模拟WillUnMount
	return () => {
		window.clearInterval(timeId)
	}
}, [])

**重点** 

useEffect(() => {
	console.log('DidMount and DidUpdate listen')
	return () => {
		console.log('remove')
	}
})

log
// remove
// DidMount and DidUpdate listen

```




函数组件
1、函数组件没有生命周期
2、函数组件没有实例
3、没有state 只能props

#### class组件的问题
* 1、 大型组件难拆分和重构 难测试
* 2、相同类型的业务组件 逻辑难以拆分 逻辑混乱
（比如didMount 和 Update 都需要更新数据 && didMount绑定事件 unmount 解绑事件）
* 3、服用逻辑变的复杂。 如mixins HOC Render Prop

函数组件需要借助hooks实现类class组件能力。





### 自定义Hooks

### React Hook性能优化

### React Hook遇到哪些坑？
 
### Hooks相比HOC和Render Prop有哪些优缺点？


### 其他Hooks

useRef

```javascript

	const btnRef =  useRef<HTMLDivElement | null>(null);
	
	useEffect(() => {
    console.log('effect==>',btnRef)
  	}, [])
  	
   return (
	    <div
	      className={styles.index}
	      // 两种写法
	      // ref={btnRef}
	      ref={elem => btnRef.current = elem}
	    >
	      dd
	    </div>
	  )

```

useContext

useReducer	//单组件状态管理


useMemo
class组件利用SCU和PureComponent优化
hooks使用useMemo优化


useCallback


eslint-plugin-react-hooks


### hooks调用顺序

函数组件 用完即销毁

class组件

render

re-render



<contact></contact>
