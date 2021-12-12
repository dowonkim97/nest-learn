# nest-learn

- nest new
- npx nest new nest-learn

- app은 앱을 구동한다.
- AppModule는 모든 것의 root 모듈이다.
- controller는 라우팅을 핸들링하고,
  url을 가져오는 역할을 한다.
- AppService는 라우터의 controller에 저장한다.

- nest g co 명령어로 controller를 생성한다.
- What name would you like to use for the controller? movies
- @get :id가 위에 있으면 search보다 먼저 인식한다.
- single-responsibility principle
  하나의 모듈, 클래스, 함수의 기능이 하나의 기능을 책임져야 한다.

- fake 데이터베이스를 쓴다.
  Array = [] 형식과 type = : 을 지정해줘야 한다.
  +id는 string을 number로 바꾼다

- movie.entitiy.ts 파일에 Delete `␍` 에러가 생겨서
- npm install eslint --save-dev .eslintrc.js
  npm install prettier --save-dev .prettierrc
  을 추가했다.

```
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
```

- 로 해결했다.

- HttpException에서 확장된 nestJS 기능이다 NotFoundException 예외처리한다.

- DTO는 데이터 전송 객체로, 프로세스 간에 데이터를 전달하는 객체이다.
  클라이언트와 서버 간에 데이터를 전송할 때 사용되고, 비지니스 로직이 없는 단순한 객체이다.
  비지니스 로직은 유저의 눈에 보이지는 않지만, 유저가 바라는 결과물을 올바르게 도출할수 있게 짜여진 코드 로직을 말한다.
  DTO를 사용하는 이유는 코드를 간결하게 해준다.

- main.ts 유효성 검사용 파이프 생성

- create-movie.dto
  class 유효성 검사
  npm i class-validator class-transformer

- forbidNonWhitelisted를 사용하기 위해서는 whitelist가 먼저 true가 되어야 합니다. forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것이기 때문에, 먼저 whitelist 옵션이 true로 되어있어야 사용 가능한 옵션입니다.

- 클라이언트 측에서 전송한 데이터가 다음과 같을 경우
  whitelist: true

```
{
　 "title": "Tenet",
　 "year": 2020,
　 "genres": ["Action", "Sci-Fi"],
　 "hack": "by me"
}
```

- whitelist: true 로 설정했을 때 아래와 같이 데코레이터가 없는 속성("hack")은 제거되어 저장됩니다.

```
{
　 id: 1,
　 title: 'Tenet',
　 year: 2020,
　 genres: ['Action', 'Sci-Fi'],
}
```

- forbidNonWhitelisted: true
  클라이언트 측에서 전송한 데이터가 다음과 같을 경우

```
  {
  　 "title": "Tenet",
  　 "year": 2020,
  　 "genres": ["Action", "Sci-Fi"],
  　 "hack": "by me"
  }
```

"hack"이라는 속성은 화이트리스트에 존재하지 않으므로 HttpException을 던집니다.

```
response :
{
　 "statusCode": 400,
　 "message": [ "property hack should not exist" ],
　 "error": "Bad Request"
}
```

- getOne을 url로 보내야하는데, url로 보낸 값이 무엇이든지 string이기 때문에, stirng을 number로 바꿔줘야 한다.
  ValidationPipe의 transform은 원하는 실제 타입으로 바꿔준다.
  transform 지우면 string 적용하면 number가 된다.

- npm i @nestjs/mapped-types
- 타입을 변환시키고 사용할 수 있게 하는 패키지

- npm i @nestjs/swagger

- @ApiProperty() 데코레이터를 써주었다.

- nest g mo
- 모듈을 새로 만든다

- APPService, APPController만 가져다 써야 하기 때문에 MoviesController, MoviesService 삭제하고, 새로 생성한 모듈에 다시 작성한다.

- http://localhost:3000/
  Welocome my Movie API

- 비추천 @Req() req Request, @Res() res Response
  res.json()

- fastify: express보다 2배 빠르다

- | 2021 | 12 | 10 |

- "test": "jest"
  jest는 자바스크립트를 아주 쉽게 테스팅하는 npm 패키지이다.

- .sepc.ts는 테스트하는 파일이다.

- npm run test:cov

- movies.service.sepc.ts 파일을 찾아 몇 줄이 테스팅되었는지 알려준다.

- npm run test:watch

› Press a to run all tests.
› Press f to run only failed tests.
› Press p to filter by a filename regex pattern.
› Press t to filter by a test name regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.

- 유닛 테스팅: 모든 fuction을 서비스에서 분리된 유닛을 따로 테스트 하는 것
- end to end (e2e) 테스트: 모든 시스템을 테스트하는 것

- | 2021 | 12 | 11 |

- movies.service.spec
  beforeEach: 테스트 되기 전에 실행하는 것
  it: 개별테스트

```
  it('should be 4', () => {
    expect(2 + 3).toEqual(5);
  });
```

- expect와 toEqual을 사용해서 첫번째 유닛 테스트를 진행함.
  클래스는 ‘설계도’, 객체는 ‘설계도로 구현한 모든 대상’을 의미한다.

- 인스턴스가 뭔지 궁금해서 찾아봤는데, 클래스의 타입으로 선언되었을 때 객체라고 부르고, 그 객체가 메모리에 할당되어 실제 사용될 때 인스턴스라고 부른다.객체는 현실 세계에 가깝고, 인스턴스는 소프트웨어 세계에 가깝다.
  객체는 ‘실체’, 인스턴스는 ‘관계’에 초점을 맞춘다.
  객체를 ‘클래스의 인스턴스’라고도 부른다.
  참고 https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html

- toBeDefined가 뭘까 찾아봤는데,toBeUndefined의 반대 경우 확인하는 거라네..
  참조는 https://velog.io/@modolee/jest-user-guide-04 여기서 했어

- npm run test:cov
  movies.service.ts | 66.66 | 100 | 62.5 | 64.28 | 23-24,35-37 테스트 했더니 30%정도 였는데 66%로 늘어났어

- 삭제, 생성, 업데이트 등 테스트를 진행해서 100%로 완료했어

- spec.ts는 유닛테스트를 위한 것

- beforeAll 초기화할 때 딱 한번 수행,
  beforeEach 테스트 메서드 실행 이전에 수행,
  afterEach 테스트 메서드 실행 이후에 수행,
  afterAll 해당 테스트 클래스 내 테스트 메서드를 모두 실행시킨 후 딱 한번 수행

- @BeforeAll 이 실행된다.
  --------반복------
  @BeforeEach 가 실행된다
  @Test 를 붙인 메서드가 실행된다.
  @AfterEach 가 실행된다
  --------반복------
  @AfterAll 이 실행된다

  - 알기쉽죠잉? 여기서 참조함 https://gracelove91.tistory.com/107

- | 2021 | 12 | 12 |

- getOne에 console.log(id)를 찍어봤는데, 1이 나왔다.

- e2e에서 .expect오류가 났는데 beforeEach -> beforeAll로 바꾸니까 해결 되었다.
  beforeEach 테스트가 새로 생길때 새로운 앱을 만들어준다. 매번 테스트할 때 만든다.
  그래서 데이터베이스가 비어있다. 그러므로 매번 기억하게끔 beforeAll로 바꾼다.

- 끝
