import { ReactElement, useRef } from 'react';

const useIntersectionObserver = ( callback: Function ) => {

    const observer = useRef(
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback();
            }
          });
        },
        { threshold: 1 }
      )
    );
  
    
    const observe = (element: ReactElement) => {
      observer.current.observe(element);
    };
  
    const unobserve = (element: ReactElement) => {
      observer.current.unobserve(element);
    };
  
    return [observe, unobserve];
  }


export default useIntersectionObserver;