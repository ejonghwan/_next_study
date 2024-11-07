import React from 'react'
import SSR from '@/components/csr_ssr/SSR'
import CSR from '@/components/csr_ssr/CSR'

const Page = async () => {

   const getDataApi = async () => {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-cache" })
       const data = await res.json();
       return data;
      //  console.log('data??', res, data)
   }

   const dd = await getDataApi();
  //  console.log('ddasdasdasd?', dd)



  return (
    <>
    
      <div className='flex'>
        <CSR data={dd} />
        <SSR data={dd} />
      </div>
    </>
  )
}

export default Page