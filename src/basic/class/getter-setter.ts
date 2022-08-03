// 访问器 getter/setter

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const xiaomin = new Person('小敏');
xiaomin.name = '小敏儿~';

console.log(xiaomin.name);  // '小敏儿~'

export {};