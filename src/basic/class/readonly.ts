// readonly 修饰符
// https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly
// 防止在 constructor 之外对其赋值

class Man {
  name: string;
  age: number;
  // 默认值, 或者在 constructor 中赋值 初始化
  // 初始化后无法被修改
  readonly gender: string = 'male';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const xiaoming = new Man('小明', 21);
// xiaoming.gender = '21';

export {};