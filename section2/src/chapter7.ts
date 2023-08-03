// void
function func(): void {
  console.log('hello');
}

// void 타입의 값에는 undefined만 할당 가능!
let a: void;
a = undefined;

a = 1; // 오류 !
a = '123'; // 오류 !

// "strictNullChecks: false" 일 경우
let b: void;
b = undefined;
b = null;

// 함수의 반환값을 null값으로 설정해주면 꼭 null값을 반환해주어야 함
function func3(): null {
  console.log('hello');
  return null;
}

// never : 불가능을 의미하는 타입
// 보통 무한루프 돌아서 반환하는 게 불가능한 함수,
// 또는 오류를 발생시키는 함수의 반환값 타입을 정의할 때 사용
function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let a: never;

a = 1;
a = null;
a = undefined;

let anyVar: any;
a = anyVar;
