// <객체 타입 정의하기>
let user1: object = {
  id: 1,
  name: '조수진',
};

// user1.id; // 에러 발생

let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: '조수진',
};

user2.id; // 프로퍼티에 에러 없이 접근 가능

// ---

// <선택적/읽기전용 프로퍼티 정의하기>
let user3: { id?: number; name: string } = {
  id: 1,
  name: '조수진',
};

user3.id;


let user4: { name?: string; gender: string } = {
  name: '조수진',
  gender: '여',
};

user4 = {
  // name: 123,   // 에러 발생: name을 정해둔 type(문자열)에 맞는 값으로 설정해주어야 한다
  gender: '남',
}