### node.js에서 ES 모듈 사용하기

컴파일 결과 자바스크립트 파일들을 node를 이용하여 실행하기 위해서는 package.json의 type을 다음과 같이 module로 설정해주어야 한다.

```jsx
{

    ...
    "type": "module",
    ...
}
```

type을 module로 설정하는 이유는 앞서 tsconfig.json의 module 옵션을 'ESNext'로 설정했기 때문이다. <br />
'ESNext(최신 자바스크립트 코드)'로 설정하면 타입스크립트 코드가 ES 모듈 시스템을 사용하는 최신 자바스크립트 코드로 컴파일 되기 때문에,
Node.js 또한 ES 모듈 시스템을 사용하도록 type: "module" 옵션을 package.json에 설정해주어야 한다.  <br />

---

### Node.js의 ES 모듈 지원

ESNext가 아닌 CommonJS를 모듈 시스템으로 채택했던 Node.js에서 import, export와 같은 ES 모듈ㅇ르 사용하려면 Babel과 같은 트랜스파일러를 사용했어야 했다.  <br />
하지만 Node.js 버전 13.2부터 ES 모듈 시스템에 대한 정식 지원이 시작되어, 다른 도구 없이도 Node.js에서 ES 모듈을 사용할 수 있게 되었다!  <br />

---

### ES 모듈이란?

ES 모듈(ES Modules)는 ES6/ES2015의 일부로 도입되어 자바스크립트의 표준 모듈 시스템으로 서서히 잡아가고 있다.  <br />
ES 모듈 시스템은 `import`, `from`, `export`, `default`처럼 모듈 관리 전용 키워드를 사용하여 가독성이 좋다는 장점이 있다.  <br />
