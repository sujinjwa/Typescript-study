// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 다른 스코프에는 중복된 이름으로 별칭 사용할 수 있다
function test() {
  type User = string;
}

// 타입 별칭은 변수의 타입을 정의할 때 타입 주석과 함께 사용 가능하다
let user: User = {
  id: 1,
  name: '조수진',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '창원시',
};

// 인덱스 시그니쳐
type CountryCodes = {
  // 동일한 타입을 가지는 프로퍼티들을 일일이 하나씩 명시할 필요 X
  [key: string]: string;
  Korea: string; // 반드시 포함해야 하는 프로퍼티는 직접 명시 가능
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // (key와 value가 모두 string 타입이라면 모두 포함 가능)
  Brazil: 'bz',
};
