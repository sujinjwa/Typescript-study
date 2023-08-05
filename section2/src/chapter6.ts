// any 타입
let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// 어떤 타입의 변수던 any 타입의 값 할당해도 문제 발생 ❌
let anyVar2: any = 10;
anyVar = 'hello';

let num: number = 10;
num = anyVar2;

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// 어떤 타입의 변수에도 unknwon 타입의 값을 할당할 수 없다
let num2: number = 10;

let unknownVar2: unknown;
unknownVar2 = '';
unknownVar2 = 1;

// num = unknownVar; // 오류 발생
