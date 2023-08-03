## void
> 아무런 값도 없음을 의미하는 타입
- 보통 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용한다.
```typescript
function func(): void {
  console.log("hello");
  // no returns
}
```

<br />

변수의 타입으로도 void 타입을 지정할 수 있다. <br />
그러나 void 타입의 변수에는 `undefined` 이외의 값은 담을 수 없다. <br />
왜냐하면 void 타입이 undefined 타입을 포함하는 타입이기 때문이다. <br />
```typescript
let a: void;
a = undefined;

a = 1;       // 오류 !
a = "123";   // 오류 !
```

<br />

만약 tsconfig.json에 strickNullChecks(엄격한 null 검사) 옵션을 해제(False)로 설정한다면 이때에는 void 타입의 변수에 null 값도 담을 수 있게 된다.
```typescript
// "strictNullChecks: false" 일 경우
let a: void;
a = undefined;
a = null;
```

<br />

### 참고
아무런 값도 반환하지 않는 함수의 반환값 타입으로 `undefined`를 정의하면 오류가 발생했었다. <br />
하지만 최신 버전인 5.1.0 버전에서는 이것이 업데이트되어 다음과 같이 아무것도 반환하지 않는 함수의 반환값 타입을 `void`가 아닌 `undefined`로 정의해도 문제가 발생하지 않는다.
```typescript
function foo(): undefined {
  // no returns
}
```

하지만 여전히 null 타입의 경우 진짜 null 값을 반환해야 한다.
```typescript
function func(): null {
  console.log('hello');
  return null;
}
```

<br />

## never 타입
> 불가능을 의미하는 타입
- 보통 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의하는 데 사용된다.
```typescript
function func(): never {
  while (true) {}
}
```
위 코드의 함수 func는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없다. <br />
즉, 이 함수는 영원히 종료될 수 없기 때문에 무언가를 반환하는 것이 '불가능'하다. <br />
이렇게 불가능한 값의 타입을 정의할 때 never 타입을 사용한다.

<br />

무한 루프 외에도 다음과 같이 <b>의도적으로 오류를 발생</b>시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있다.
```typescript
function func4(): never {
  throw new Error();
}
```

<br />

변수의 타입을 never로 정의하면 any를 포함한 그 어떤 타입의 값도 이 변수에 담을 수 없다.
```typescript
let a: never;

a = 1;          // 오류 !
a = null;       // 오류 !
a = undefined;  // 오류 !

let anyVar: any;
a = anyVar;     // 오류 !
```
