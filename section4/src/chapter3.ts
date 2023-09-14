// 함수 오버로딩

// 하나의 함수 func
// 모든 매개변수의 타입은 numbeer
// ver1. 매개변수 1개 -> 매개변수에 20 곱한 값 출력
// ver2. 매개변수 2개 -> 매개변수들을 다 더한 값 출력

// 버전들 -> 오버로드 시그니처 : 함수를 오버로딩하기 위해 매개변수별로 다른 버전을 명시해줌
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 = 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    // 없을 수도 있는 값들에 대해
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 오류 발생
func(1);
// func(1, 2); // 오류 발생
func(1, 2, 3);
