// 인터페이스

interface Person {
  readonly name: string; // 수정 불가능한 프로퍼티
  age: number;
  gender?: string; // 선택적 프로퍼티
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void; // 함수호출식으로 작성하면 오버로딩 가능
}

type Type1 = number | string | Person;

const person: Person = {
  name: '조수진',
  age: 24,
  sayHi: function () {
    console.log('Hi');
  },
};

// person.name = '홍길동'; ❌ 오류 발생!
person.sayHi();
person.sayHi(1, 2);
