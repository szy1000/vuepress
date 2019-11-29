let arr1 = Array.from(new Array(100000), (x, index)=>{
  return index
})

let arr2 = Array.from(new Array(50000), (x, index)=>{
  return index+index
})

var handleArray = arr1.concat(arr2)
console.log('原数组的长度',handleArray.length)
let start = new Date().getTime()
console.log('开始数组去重...')
function unique(array) {
  var res = []
  // for(var i = 0; i < array.length; i++) {
  //   if(res.indexOf(array[i]) === -1) {
  //     res.push(array[i])
  //   }
  // }

  // 3870ms
  // for(var i=0;i<array.length;i++) {
  // 	for(var j=0;j<res.length;j++) {
  // 		if(array[i] === res[j]) {
  // 			break
  // 		}
  // 	}
  // 	if(j === res.length) {
  // 		res.push(array[i])
  // 	}
  // }

  // 104ms
  // var sortArr = array.concat().sort() //返回新数组
  // var res = [sortArr[0]]
  // for(var i=1; i < sortArr.length; i++) {
  // 	if(sortArr[i] !== sortArr[i-1]) {
  // 		res.push(sortArr[i])
  // 	}
  // }

  // 7624
  // res = array.filter((item, index, array) => {
  // 	return array.indexOf(item) === index
  // })

  // 15ms
  // res = [...new Set(array)]
2
  // 10ms
  var obj = {}
  var res = []
  for(var i =0; i <array.length; i++) {
  	if(!obj[array[i]]) {
  		res.push(array[i])
  		obj[array[i]] = 1
  	} else {
  		obj[array[i]]++
  	}
  }

  return res
}
console.log('去重后的长度', unique(handleArray).length)

let end = new Date().getTime()
console.log('耗时', end - start)
