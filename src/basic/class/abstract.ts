// 抽象类 (  abstract )
// 特点: 
// 1. 不能被实例化
// 2. 如果一个方法是抽象方法,那么所属类必须是抽象类
// 3. 定义的抽象方法无需具体实现,但是派生类必须实现对应的抽象方法

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea() {
    return Math.PI * this.r ** 2;
  }
}

class ReatAngle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

function getArea(shape: Shape) {
  return shape.getArea();
}

console.log(getArea(new ReatAngle(10, 20)));
console.log(getArea(new Circle(5)));

