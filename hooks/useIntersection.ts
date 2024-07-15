import { ReactElement, useRef, useState } from 'react';

const useIntersectionObserver = ( callback: Function ) => {


    const [isS, setIss] = useState(false)
    const observer = useRef(new IntersectionObserver( (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIss(entry.isIntersecting)
              callback(entries, observer);
            }
          });
        },
        { threshold: 0 }
      ));
  
    
    const observe = (element: ReactElement) => {
      observer.current.observe(element);
    };
  
    const unobserve = (element: ReactElement) => {
      observer.current.unobserve(element);
    };
  
    return [observe, unobserve, isS];
  }


export default useIntersectionObserver;