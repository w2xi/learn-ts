// 声明对象类型

// 1. 使用类型别名来定义
// type IUserType = {
//   name: string,
//   age: number,
//   address?: string, // 可选
// }

// 2. 使用接口 interface

interface IUser {
  name: string,
  age: number,
  address?: string, // 可选
}

const userInfo: IUser = {
  name: 'w2xi',
  age: 26,
  address: 'Chang Sha County',
}