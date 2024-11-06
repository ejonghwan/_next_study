"use client"

import React, { useState, useEffect } from 'react'

// const CSR = () => {
const CSR = ({ data }) => {


   // 결론 : csr에서 가져온건 미리 렌더링 안해놨지만 서버컴포에서 가져온건 렌더링 되어있음 

   const [csrData, setCsrData] = useState<any>([])
   const getDataApi = async () => {
       const res = await fetch('https://jsonplaceholder.typicode.com/todos')
       const resdata = await res.json();
      //  console.log(data)
      setCsrData(resdata)
      //  console.log('data??', res, data)
   }

   useEffect(() => {
       getDataApi();
   }, [])

   
   const handleTestClick = (e) => {
      // console.log(e.target)
      // console.log(e.currentTarget)
      // console.log(e.relatedTarget)
      // console.log(e)
     }
   const handleTestBlue = (e) => {
      // console.log(e.target)
      // console.log(e.currentTarget)
      // console.log(e.relatedTarget)
      console.log(e)
     }
  

  return (
    <div>
      <h2>CSR</h2>
      <button type="button" className='parent' onBlur={(e) => handleTestBlue(e)}>zzzz</button>
      <div className='parent' onClick={(e) => handleTestClick(e)}>
        parent
        <div className='children1'>children1</div>
        <div className='children2'>children2</div>
        <button type='button'>btn?</button>
      </div>
      <h2>SSR 에서 보낸 props data</h2>
      <ul>
         {data.map((item, idx) => {
            return (
               <li key={idx}>{item.title}</li>
            )
         })}
      </ul>
      <h2>CSR 에서 호출한 data</h2>
      <ul>
         {csrData.map((item, idx) => {
            return (
               <li key={idx}>{item.title}</li>
            )
         })}
      </ul>
    </div>
  )
}

export default CSR