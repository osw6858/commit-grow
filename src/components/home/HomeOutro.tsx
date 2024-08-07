'use client'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function HomeOutro() {

    const ref = useIntersectionObserver()

    return <section ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"> <div className="text-center">
        <div className="bg-blue-600 text-white p-8 rounded-lg mb-10">
            <h2 className="text-2xl font-semibold mb-4">준비되셨나요?</h2>
            <p className="mb-6">지금 바로 기술 실력을 향상시켜 보세요!</p>
            <button
                className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                AI 기술로 구현한 맞춤형 면접 연습하기
            </button>
        </div>
    </div>
    </section>
}