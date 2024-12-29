// 字面量类型

const message: 'message' = 'message';
// 但是 这样写并没啥意义
// 只有结合 联合类型 才有意义

type AlignType = 'left' | 'center' | 'right';
let align: AlignType = 'left';

align = 'center';

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
