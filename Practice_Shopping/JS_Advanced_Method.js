//map/reduce/filter
//filter中的回调函数有一个要求：必须返回一个boolean值
//当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//当返回false时，函数内部会过滤掉n

//filter函数的使用
const nums = [10, 20, 111, 222, 444, 40, 50, 101]
//传入一个函数，自动进行判断
let newNums = nums.filter(function (n) {
  return n <= 100
})
console.log(newNums)

//map函数的使用，对每个元素进行操作
let new2Nums = newNums.map(function (n) {
  return n * 2
})
console.log(new2Nums)

//reduce函数的使用，对数组中所有元素进行汇总
let new3Nums = new2Nums.reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(new3Nums)

//链式调用
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total)

//箭头函数
let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
console.log(total2)