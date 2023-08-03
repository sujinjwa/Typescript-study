## any 타입
> 타입 검사를 받지 않는 특수한 치트키 타입
```typescript
let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
```
any 타입은 어떠한 타입 검사도 받지 않기 때문에 아무 타입의 값이나 범용적으로 담아 사용할 수 있고, 다양한 타입의 메서드도 마음대로 호출해서 사용할 수 있다.

<br />

다음과 같이 any 타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 모두 할당할 수 있다.
```typescript
let anyVar2: any = 10;
anyVar = 'hello';

let num: number = 10;
num = anyVar2;
```

<br />

### any는 최대한 사용하지 마세요
아까 작성한 다음과 같은 코드를 컴파일 하거나 ts-node로 실행해보면 런타임 오류가 발생한다.
```typescript
let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
```

<br />

이렇듯 any 타입은 타입 검사를 받지 않는 타입이므로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입이다. <br />
따라서 정말 어쩔 수 없는 경우를 제외하고는 any 타입을 사용하지 않는 것이 좋다.

<br />

## unknown 타입
> any 타입과 비슷하지만 보다 안전한 타입
```typescript
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
```
unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있다.

<br />

그러나 반대로는 안된다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다. (any와 다른 점)
```typescript
let num2: number = 10;

let unknownVar2: unknown;
unknownVar2 = '';
unknownVar2 = 1;

num = unknownVar; // 오류 발생 !
```

<br />

즉, unknown 타입은 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 된다. <br />
다시 말해 <b>오직 값을 저장하는 행위</b>밖에 할 수 없다.

<br />

만약 unknown 타입의 값을 number 타입의 값처럼 취급하여 곱셈 연산을 수행시키고 싶다면, 다음과 같이 조건문을 이용해 해당 값이 number 타입의 값임을 보장해줘야 한다.
```typescript
if (typeof unknownVar === "number") {
	// 이 조건이 참이라면 unknownVar는 number 타입이라 볼 수 있음
  unknownVar * 2;
}
```
위 코드와 같이 조건문을 이용해 특정 값이 특정 타입임을 보장할 수 있게 되면, <b>타입스크립트에서는 해당 값의 타입이 자동으로 바뀐다</b> (=<b>타입 좁히기</b>)

<br />

> 따라서 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하기 보다 unknown 타입을 이용하는 게 안전하다.
