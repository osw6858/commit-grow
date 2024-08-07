import BasicButton from "@components/common/BasicButton";

export default function HomeIntro() {


    return <section className="text-center mb-16 mt-16">
        <h1 className="text-4xl font-bold mb-4">
            AI 기술 면접으로
            <br/>
            <span className="text-blue-600 block pt-2">자신감 있는 취업 준비</span>
        </h1>
        <p className="text-lg mb-6">
            체계적으로 실제 면접을 기술 면접을 빠르고 쉽고, AI 피드백으로 실전을 방불케하세요. 언제 어디서나 면접에 관해 연습할 수 있습니다.
        </p>
        <BasicButton type={'button'}
                     className="bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition duration-300">
            무료로 시작하기 →
        </BasicButton>
    </section>


}