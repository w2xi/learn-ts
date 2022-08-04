// 索引类型

interface IIndexType {
  // 索引是 number 类型, 值是 string 类型
  [index: number]: string,
}

const frontEndKnowledges: IIndexType = {
  0: 'CSS',
  1: 'HTML',
  2: 'JavaScript',
  4: 'Vuejs',
  5: 'React',
};

interface ILanguageBrith {
  [index: string]: number,
}

const languageBrith: ILanguageBrith = {
  'C': 1972,
  'JavaScript': 1996,
  'TypeScript': 2014,
};