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
