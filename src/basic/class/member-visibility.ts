// 成员(属性,方法)的可见性(访问控制)

// public     任何地方都可以访问 (默认)
// protected  自身和子类可以访问
// private    仅自身自已访问

class Person {
  public name: string;
  public age: number;
  private secret: string = 'secret';
  protected gene: string = 'gene'

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public running() {
    console.log(this.name, 'running');
  }
}

const xiaoming = new Person('小明', 21);
xiaoming.running();

export {};