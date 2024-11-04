"use client"

import React, { useState, useEffect } from 'react'

const CSR = ({ data }) => {


   // 결론 : csr에서 가져온건 미리 렌더링 안해놨지만 서버컴포에서 가져온건 렌더링 되어있음 

   // const [data, setData] = useState<any>([])
   // const getDataApi = async () => {
   //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
   //     const data = await res.json();
   //    //  console.log(data)
   //     setData(data)
   //    //  console.log('data??', res, data)
   // }

   // useEffect(() => {
   //     getDataApi();
   // }, [])

  return (
    <div>
      <h2>CSR</h2>
      <ul>
         {data.map((item, idx) => {
            return (
               <li key={idx}>{item.title}</li>
            )
         })}
      </ul>
    </div>
  )
}

export default CSR