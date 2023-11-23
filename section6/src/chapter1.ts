class Employee {
  // 필드 (⬇️ 필드에서 초기값 설정해줄 필요 X)
  name: string;
  age: number;
  position: string;

  // 생성자 (⬇️ 생성자 함수에서 필드 값들을 잘 초기화 해줌)
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}
