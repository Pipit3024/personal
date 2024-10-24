// hooks/useOnScreen.ts
import { useEffect, useState } from 'react';

const useOnScreen = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once it's visible
      }
    }, options);

    const currentElement = document.querySelector('#about'); // Make sure to reference the right element
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return isVisible;
};

export default useOnScreen;
