// 类型收窄 (Narrowing)

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  // string
  return padding + input;
}