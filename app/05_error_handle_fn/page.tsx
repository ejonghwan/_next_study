"use client"

import React, { useEffect } from 'react'

const FnPage = () => {

    // 유인동님 비동기 에러핸들링과 함수형 프로그래밍

    const log = console.log;
    const imgs = [
        { name: '이미지1', url: 'https://picsum.photos/seed/picsum/200/300'  },
        // { name: '이미지1', url: 'https://picsum.photos/200/300?grayscale'  },
        { name: '이미지1', url: 'https://picsasd'  },
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
    const loadImg = (url) => new Promise((resolve) => {
        let img = new Image();
        img.src = url
        img.onload = () => { 
            resolve(img.height)
        }
        return img;
    })

    // loadImg(imgs[0].url).then( img => log('300?', img));



    // #######################   step 3   #########################
    const f1 = async () => {
        const total = await imgs
            .map(async ({url}) => {
                const img = await loadImg(url)
                // log(img)
                return img
            })
            // .map(img => log(img)) //Promise라서 안풀림
            // .forEach(async a => {
            //     const bb = await a
            //     log('z? ', bb) //이건 됨
            // })
            .reduce(async (total, height) => await total + await height, 0)
            
            log(total)
    }
    f1();

    
 



  return (
    <div>


        

    </div>
  )
}

export default FnPage