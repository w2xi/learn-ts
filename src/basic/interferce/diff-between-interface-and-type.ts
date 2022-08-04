// interface 与 type 的区别

// 1. 可以定义多个 同名的 interface, 它们会 `合并`, 而不是覆盖
// 2. 不能定义同名的 type

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
  _prop: string,
}

window._prop= 'xxx';