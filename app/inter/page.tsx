"use client"


import { useEffect, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersection';

const InterPage = () => {

    const [ob, unob, isS] = useIntersectionObserver((ent, ob) => {
        console.log('inter', ent, isS)
        ent[0].target.classList.add('on')
        
    })

    
    const targetRef1 = useRef<any>();
    const targetRef2 = useRef<any>();
    const targetRef3 = useRef<any>();

    useEffect(() => {
        
        ob(targetRef1.current)
        ob(targetRef2.current)
        ob(targetRef3.current)


        return () => {
            unob(targetRef1.current)
            unob(targetRef2.current)
            unob(targetRef3.current)
        }
    }, [])
    
    return (
        <div>
            <section className="bg-red-100 h-[300px]">1</section>
            <section className="bg-red-200 h-[300px]">2</section>
            <section className="bg-red-300 h-[300px]">3</section>
            <section className="bg-red-400 h-[300px]" ref={targetRef1}>4 target</section>
            <section className="bg-red-500 h-[300px]" ref={targetRef2}>5</section>
            <section className="bg-red-600 h-[300px]" ref={targetRef3}>6</section>
            <section className="bg-red-700 h-[300px]">7</section>
        </div>
    )
}

export default InterPage