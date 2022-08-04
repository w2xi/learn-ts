// 泛型
// 类型参数化

function sum<T>(a: T): T {
  return a
}

sum<number>(10);
sum<string>('a');
sum<number[]>([1]);