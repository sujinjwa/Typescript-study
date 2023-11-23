function func(value) {
    return value;
}
let num = func(10);
console.log(num);
// 제네릭 함수 호출 시 타입 직접 명시
let arr = func([1, 2, 3]);
console.log(arr);
export {};
