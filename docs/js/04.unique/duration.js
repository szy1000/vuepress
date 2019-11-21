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

  res = [...new Set(array)]

  return res
}
console.log('去重后的长度', unique(handleArray).length)

let end = new Date().getTime()
console.log('耗时', end - start)
