// 类型约束

interface ILength {
  length: number
}

function getLength<T extends ILength >(args: T) {
  return args.length;
} 

getLength('a')
getLength([1])
getLength({ length: 1 })