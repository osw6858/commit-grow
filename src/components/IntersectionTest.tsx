'use client'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function IntersectionTest() {

    const ref = useIntersectionObserver()

    return <>
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-500 ease-in-out">
            <div className='h-[90vh] flex items-center justify-center bg-blue-200'>
                <h2 className="text-3xl font-bold">Section 1</h2>
            </div>
        </div>
    </>
}