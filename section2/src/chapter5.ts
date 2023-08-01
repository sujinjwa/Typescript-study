// 열거형 타입 : 여러개의 값을 나열하는 용도

// 숫자 열거형 (=숫자 enum)
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: '조수진',
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 회원
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};

// 문자열 열거형 (=문자열 enum)
enum Language {
  korean = 'ko',
  english = 'en',
}
