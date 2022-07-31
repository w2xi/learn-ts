// 字面量类型

const message: 'message' = 'message';
// 但是 这样写并没啥意义
// 只有结合 联合类型 才有意义

type AlignType = 'left' | 'center' | 'right';
let align: AlignType = 'left';

align = 'center';

