readme
디디

 1) .env 파일 : 모든 환경에서 공통적으로 적용할 디폴트 환경변수를 정의한다. 가장 우선순위가 낮다.
  2) .env.development 파일: 개발 환경(process.env.NODE_ENV === 'development') 에서 적용된다.
  3) .env.production 파일: 배포/빌드 환경(process.env.NODE_ENV === 'production') 에서 적용된다.
  4) .env.test 파일: 테스트 환경(process.env.NODE_ENV === 'test') 에서 적용된다.
  5) .env.local 파일 : 가장 우선순위가 높다. 다른 파일들에 정의된 값들을 모두 덮어쓴다.(오버라이드)



## 실험 1 
SSR에서 데이터 받아서 CSR에 data props으로 넘기면 데이터는 CSR일지 ?? 
=> data request 자체는 SSR에서 했기 때문에 SSR로 작동


## 실험 2 
CSR에서 바로 호출한 데이터는 ? 
=> html 파일에는 호출되어 보이지 않음.. 근데 일반 택스트들은 그냥 보이는 듯 ?

## 실험 3 
- CSR 컴포넌트에서 SSR 컴포넌트 호출해보기 (no children)
=> 무한 호출되면서 아래 같은 워닝이 뜸 
경고: async/await는 아직 클라이언트 구성 요소에서는 지원되지 않으며 서버 구성 요소에서만 지원됩니다. 이 오류는 원래 서버용으로 작성된 모듈에 '클라이언트 사용'을 실수로 추가하여 발생하는 경우가 많습니다. 오류 구성요소 스택

```typescript

    <CSRChildren />  //안에서  SSRChildren 호출
```

- CSR 컴포넌트에서 SSR 컴포넌트 호출해보기 (children)
=> SSR로 잘 호출 됨 


```typescript
    <CSRChildren>
        <SSRChildren /> 
    </CSRChildren>
```


        