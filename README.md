readme
디디

 1) .env 파일 : 모든 환경에서 공통적으로 적용할 디폴트 환경변수를 정의한다. 가장 우선순위가 낮다.
  2) .env.development 파일: 개발 환경(process.env.NODE_ENV === 'development') 에서 적용된다.
  3) .env.production 파일: 배포/빌드 환경(process.env.NODE_ENV === 'production') 에서 적용된다.
  4) .env.test 파일: 테스트 환경(process.env.NODE_ENV === 'test') 에서 적용된다.
  5) .env.local 파일 : 가장 우선순위가 높다. 다른 파일들에 정의된 값들을 모두 덮어쓴다.(오버라이드)
