// 类型别名(type)和接口(interface)的不同

// 1. 可以定义多个 同名的 interface, 它们会 `合并`, 而不是覆盖
// 2. 不能定义同名的 type

// 类型别名和接口非常相似，大部分时候，你可以任意选择使用。
// 接口的几乎所有特性都可以在 type 中使用，
// 两者最关键的差别在于类型别名本身无法添加新的属性，而接口是可以扩展的。

// Interface
// 对一个已经存在的接口添加新的字段
interface IUser {
  name: string
}

interface IUser {
  age: number
}

const user: IUser = {
  name: 'w2xi',
  age: 21,
}

interface Window {
  $prop: string,
}

window.$prop= 'xxx';


// Type
// 创建后不能被改变
type Profile = {
  name: string,
  age: number,
}

// type Profile = {
//   gender: number
// }
// Duplicate identifier `Profile`