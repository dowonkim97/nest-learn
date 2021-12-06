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
