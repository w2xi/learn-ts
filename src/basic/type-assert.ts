// 类型断言

// 应用场景: 把一个更加宽泛的类型转为更加具体的类型

// example:

// 断言为更加具体的 HTMLImageElement 类型
const app = document.getElementById('app') as HTMLImageElement;
app.src = 'url';


class Person {
  say() {}
  do() {}
}

class Student extends Person {
  learning() {
    console.log('learning');
  }
}

function doHomework(person: Person) {
  // 断言为更加具体的类型 才能拿到对应的属性和方法
  (person as Student).learning()
}

doHomework(new Student);