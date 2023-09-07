type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number; // 몇명을 강퇴시켰는지
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴시켰습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if (user.tag === 'ADMIN') {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴시켰습니다.`);
  } else if (user.tag === 'MEMBER') {
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}

function login2(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(
        `${user.name}님 현재까지 ${user.kickCount}명 강퇴시켰습니다.`
      );
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case 'GUEST':
      {
        console.log(
          `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
        );
      }
      break;
  }
}

// 비동기 객체 예시
type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩 중');
      break;
    }
    case 'FAILED': {
      console.log(`에러 발생: ${task.error?.message}`); // ${task.error.message} 사용하면 오류 발생
      break;
    }
    case 'SUCCESS': {
      console.log(`성공: ${task.response?.data}`); // ${task.response.data} 사용하면 오류 발생생
      break;
    }
  }
}
