"use client"

import React, { useEffect } from 'react'

const FnPage = () => {

    // 유인동님 비동기 에러핸들링과 함수형 프로그래밍

    const log = console.log;
    const imgs = [
        { name: '이미지1', url: 'https://picsum.photos/seed/picsum/200/300'  },
        { name: '이미지1', url: 'https://picsum.photos/200/300?grayscale'  },
        // { name: '이미지1', url: 'https://picsasd'  },
        { name: '이미지1', url: 'https://picsum.photos/200/300/?blur'  },
        { name: '이미지1', url: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'  },
    ]



    // #######################   step 1   #########################
    // const f1 = () => {
    //     imgs
    //         .map(({url}) => {
    //             let img = new Image();
    //             img.src= url; 
    //             return img
    //         })
    //         .map(img => img.height)
    //         .forEach(a => log(a))
    // }
    // height는 로드 전이기 떄문에 구할 수 없음. 







    // #######################   step 2   #########################
    // const loadImg = (url) => {
    //     let img = new Image();
    //     img.src = url

    //     log('h ?', img.height)
    //     img.onload = () => { 
    //         //로드 후에 height를 구해야 구해짐. 이 시점을 Promise로 비동기시점을 만듦
    //         log('h?2', img.height)
    //     }
    //     return img;
        
    // }

    // 이떄 프로미스를 이용해서 시점을 조절함
    // const loadImg = (url) => new Promise((resolve) => {
    //     let img = new Image();
    //     img.src = url
    //     img.onload = () => { 
    //         resolve(img.height)
    //     }
    //     return img;
    // })

    // loadImg(imgs[0].url).then( img => log('300?', img));






    // #######################   step 3   #########################
    // const f1 = async () => {
    //     const total = await imgs
    //         .map(async ({url}) => {
    //             const img = await loadImg(url)
    //             // log(img)
    //             return img
    //         })
    //         // .map(img => log(img)) //Promise라서 안풀림
    //         // .forEach(async a => {
    //         //     const bb = await a
    //         //     log('z? ', bb) //이건 됨
    //         // })
    //         .reduce(async (total, height) => await total + await height, 0)
            
    //         log(total)
    // }
    // f1();

    // 여기까지는 어케어케 됐는데 좋은 코드는 아님 
    // 왜냐면 이미지 중간에 하나라도 에러가 나면 전부다 멈추기 떄문 



    // #######################   step 4   #########################
    // 에러핸들링하기 
    // 에러라는 것은 발생이 되어야 잡을 수 있다. 지금은 에러가 발생이 안되는 상황.
    // const loadImg = (url) => new Promise((resolve, reject) => {
    //     let img = new Image();
    //     img.src = url
    //     img.onload = () => { 
    //         resolve(img.height)
    //     }
    //     // 의도적으로 에러를 발생시켜 reject로 내보냄
    //     img.onerror = (e) => {
    //         reject(e)
    //     }

    //     return img;
    // })



    // const f1 = async () => {
    //     try {
    //         const total = await imgs
    //         .map(async ({url}) => {
    //             try {
    //                 const img = await loadImg(url)
    //                 // log(img)
    //                 return img
    //             } catch (e) {
    //                 console.error(e)
    //                 throw e;
    //             }
    //         })
    //         // .map(img => log(img)) //Promise라서 안풀림
    //         // .forEach(async a => {
    //         //     const bb = await a
    //         //     log('z? ', bb) //이건 됨
    //         // })
    //         .reduce(async (total, height) => await total + await height, 0)
            
    //         log(total)
    //     } catch(e) {
    //         // 에러를 캐치해 NAN이 뜨는것을 0으로 만듦.
    //         // throw 전에는 NAN
    //         log(0)
    //     }
    // }
    // f1();




    // 중요!!!!!!! 
    // 아직도 문제가 심각함. loadimg 함수가 중간에 에러가 났음에도 끝까지 모두 실행해버림. 
    // 이게 post거나 insert update문이라면 문제가 심각해짐.
    // 개발자는 에러핸들링을 했지만 버그가 있는 코드. 아예 실행안되는 것보다 더 심각한 코드가 되어버림



    






    // #######################             #########################
    // #######################   해결방법   #########################
    // #######################              #########################

     const loadImg = (url) => new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url
        img.onload = () => { 
            resolve(img)
        }
        // 의도적으로 에러를 발생시켜 reject로 내보냄
        img.onerror = (e) => {
            reject(e)
        }

        return img;
    })

    function* _map(fn, iter) {
        for(const a of iter) {
            // 아래 문제는 처음 문제였던 코드들과 마찬가지로 Promise와 undefined를 내보낸다 
            // 이런 문제를 해결하기 위해 동기적인 상황과 비동기적인 상황에 따라 합성함수를 변경한다 
            // yield fn(a)

            // a가 Promise라면 then에 함수를 넘겨주고, 아니라면 fn(a)를 넘겨주면 비동기는 then으로, 동기는 콜백 인자로 넘겨주게 된다 
            yield a instanceof Promise ? a.then(fn) : fn(a)

        }
    }


    async function f2() {
        let acc = 0;
        // _map(({ url }) => log(url), imgs).next()
        // for await (const a of _map(({ url }) => loadImg(url), imgs)) { log(a) } //여전히 Promise 반환
        for await (const a of _map(img => img.height, _map(({ url }) => loadImg(url), imgs))) { // 이미지도 언디파인드. 동일
            // log('??', a)
            acc = acc + a;
        }

        log('acc?', acc)
    }

    f2();



    // 위 일들이 리듀스
    function* _reduceAsync(fn, a,) {
        
    }
    

 



  return (
    <div>


        

    </div>
  )
}

export default FnPage