// 函数重载: 函数的名称相同,但是参数不同(个数,类型不同)的几个函数 就是函数的重载

// 约束规则
// 函数调用时会从上往下依次匹配

// 函数声明
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 函数的具体实现
function add(a: any, b: any) {
  return a + b;
}

add(20, 30);
add('a', 'b');

// add(1, 'a'); // 没有匹配到重载函数