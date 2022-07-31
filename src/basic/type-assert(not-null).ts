// 非空类型断言

/**
 * @param msg 可选参数 string | undefined
 */
function consoleMsg(msg?: string) {
  // 非空类型断言 `!` 告诉编译器 msg 一定是有值的
  console.log(msg!.length)
  
  // console.log(msg?.length)
 }

consoleMsg('Hello');