import {useEffect, useRef} from "react";
import SingletonIntersectionObserver from "@/lib/SingletonIntersectionObserver";

export interface UseScrollStyleOptions {
    threshold?: number;
    rootMargin?: string;
}

const useIntersectionObserver = (options?: UseScrollStyleOptions) => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = SingletonIntersectionObserver.getInstance(options);
        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return elementRef;
};

export default useIntersectionObserver;