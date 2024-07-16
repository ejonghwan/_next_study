import React, { useEffect, useState } from 'react'

const StudyPage = () => {

    
    /*
        1. js 엔진이 세번을 훑으며 함수선언을 수집, 변수 초기화, 환경을 구성 (이때 함수간의 스코프 객체 생성)
        2. 위에서 아래로 소스를 읽으며 함수를 만나면 콜스택에 담고 마지막부터 실행됨 
        3. 비동기 기능들은 큐에 담아두고 콜스택이 비었을 때 이벤트 루프가 콜스택에 밀어넣어 실행함
        
        ## 리액트 함수형의 구현방식
        1. 상태값으리 변화가 가상돔에서 react가 감지하면 재렌더링을 함 
        2. 때문에 컴포넌트 함수 안에 있는 모든 변수와 함수 등은 초기화함 
        3. 2번의 특성 때문ㅇ ㅔ컴포함수 안에서는 변수와 함수들은 호출되면서 모두 초기화됨
            (재렌더링은 useState의 상태값이 변경되거나 초기 진입 시 발생)
            (컴포를 잘 분리하면서 메모이제이션을 잘 해야하는 이유)
    */



    // ############################################################################# 
    // ############################################################################# useState 주의점
    // ############################################################################# 

    // 초기값을 함수로 바로 넘겨버리면 렌더링이 될때마다 계속 실행 
    // const [user, setUser] = useState(hardWork())
    const [user, setUser] = useState(() => hardWord()) // 헤비한 작업을 default로 넣을 땐 함수로 넘겨줘야함    
    

    const [input, setInput] = useState('');
    const handleInputChange = e => setInput(e.target.value)
    useEffect(() => console.log('use state render'))
    //setUser(prev => prev + 1)
    //setUser(user + 1)

    const [test, setTest] = useState(0);
    const [test2, setTest2] = useState(0);


    // test1
    const handleTestClick = e => {
        /*
            1. 리액트는 효율적 렌더링을 위해 비동기적 작동(일괄처리). 인자로 값을 넘겨주면 세번을 실행했어도 1번만 실행됨
            setTest(test + 1) // B(결과값) = A(이전값) + 1
            setTest(test + 1) // B(결과값) = A(이전값) + 1
            setTest(test + 1) // B(결과값) = A(이전값) + 1
            결론 : 결과값에 이전값이 계속 같은 값으로 담김
        */

        /*
            2. 그래서 함수 형태로 전달해줘야함
            setTest(prev => prev + 1)
            1-1 C(결과값) = B(이전값) + 1 => 1
            1-2 C를 B에 저장

            setTest(prev => prev + 1)
            2-1 C = B + 1 => 2
            2-2 C를 B에 저장 

            setTest(prev => prev + 1)
            3-1 C = B + 1 => 3
            3-2 C를 B에 저장
            
        */
    }


    // test2. 동기적으로 업데이트 되던 state 값을 중간에 가져올 수 있는지 ? 
    const handleTestClick_2 = e => {
        setTest(prev => prev + 1)
        setTest(prev => prev + 1)
        setTest2(test + 1)
        /*
            결과 : 가져올 수 없다 
            2번 버튼을 누르면 setTest함수가 두번 실행된 값 2와 + 1된 값인 3이 나와야하지만 결과는 1임. 
        */
    }


    // test3. 그리고 위처럼 여러번 함수를 실행해도 각각 리렌더링이 일어나는게 아닌, 콜스택에 담아두고 실행 후 한번에 리랜더링을 함.
    
    


    // ############################################################################# 
    // ############################################################################# useEffect
    // ############################################################################# 

    // useEffect(() => {}). 상태가 변경되면 함수자체가 리렌더링. 매번 실행
    // useEffect(() => {}, []). 마운트 될 때 한번만 실행
    // useEffect(() => {}, [a]). 마운트 될 때 한번, a가 변경될떄만 실행




     // ############################################################################# 
    // ############################################################################# useRef
    // ############################################################################# 

    /*
        1. 그냥 변수 -> 렌더링할떄마다 초기화
        2. useState -> 렌더링에 영향 
        3. useRef -> 렌더링에 영향을 받지않음. app이 실행될때와 끝날때만 초기화. 그 밖엔 계속 유지함. 
    */




      // ############################################################################# 
    // ############################################################################# useMemo
    // ############################################################################# 

    
    // 주의. 꼭필요한것만 메모리에 저장하는 게 좋음.
    // 같이 렌더링이 발생해서 리셋되는 참조 형 데이터라면 자주 변경되지 않는 값들은 메모이제이션 해두는 게 좋을듯?
    // 사용방법. useMemo(0 => '계산할 함수, ['value 의존성이 변경될 때만 실 행 ])
    /*
        react함수는 상태가 변경되면 함수를 다시 실행 (재렌더링)하기 때문에 그 안에 있 는 함수들 변수를 모두 초기화 함.
        때문에 컴포넌트 안에는 함수를 최대 한 안넣는게 좋음.

        그리고 계산 함수 실행이 2개 있다면 2 개가 모두 실행되기 때문에 무거운 작업은 메모이제이션 해두는 게 좋음.

        ex1) 하드계산 / 이지계산이 있다면 이지계산을 눌러도 하드계산을 다시 해버림.
        ex2) 원시형은 useEffect로 가능하지 만 참조형은 useEffect로 잡아내지 못함.

        이럴 때 useMemo 써야함.

        const name = 'jong'
        useEftect(() => {}, [name]) 원시형이면 변경을 알아챔. 정상작동

        const name={namekey:"jong"};
        useEttect(() => {}, [name]) 
        하지만 참조형이면 알아채지 못해서 name이 변경되지 않아도 계속 실행됨


        const [hardN, setHardN] = useState(5)
        const [easyN, setEasyN] = useState(1)

        1/ 아래 함수들은 TestHooks 밖에 있는 게 좋음

        const hardCalc = (n) => {
            console.log('복잡한 계산)
            for(let i = 0; i < 999999999; i++)
            return n
        ｝

        const easyCalc = (n) => {
            console.log('쉬운 계산')
            return n
        }
        const hardSum = hardCalc(hardN);
        const hardSum = useMemo (0) => hardCalc(hardN), [hardN])
        const easySum = easyCalc(easyN);

        위 경우는 많이 없지만 아래 같은 경우 는 많음
        const [ changeN, setChangeN] = useState(0)
        const [isHoho, set|sHoho ] = useState(false)

        I const str = isHoho ? '종환' : '이 님'// 원시형
        I const str = tinner: IsHoho ? 송 환' : '아님'}// 참조형

        const str = useMemo (0) => { inner:isHono ? '종환 : '아님' }), [isHohol)
        메모이제이션
        useEffect(0) =>{
            console.log(????????? useEffect호출')
        //}, [str.inner]) 이렇게는 되네 }, [str]) / 넘버 바꿀 때도 이게 계속 호 출됨. 참조객체라

    */




    return (
        <div>StudyPage</div>
    )
}

export default StudyPage