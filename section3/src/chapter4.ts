// 대수 타입

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // ✅
  name: '',
  color: '',
};

let union2: Union1 = {
  // ✅
  name: '',
  language: '',
};

let union3: Union1 = {
  // ✅
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//   // ❌ 오류 발생! 꼭 Union1 타입에 포함된 두 집합(Person, Dog) 중 하나에 속해있어야 함
//   name: '',
// };

// let union5: Union1 = {
//   // ❌ 오류 발생!
//   name: '',
//   color: '',
//   gender: '',  ❌ 다른 property 추가하면, Person도 Dog 도 아니게 되므로 Union1 타입에 포함될 수 없음
// };
