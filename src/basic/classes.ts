// class (OOP)

// 修饰符(属性,方法): public protected private
// 只读属性: readonly

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name, 'running');
  }
}

class Man extends Person {
  // 默认值, 或者在 constructor 中赋值
  readonly gender: string = 'male';

  constructor(name: string, age: number) {
    super(name, age);
  }
}

const xiaoming = new Man('小明', 21);
xiaoming.running();

export {};