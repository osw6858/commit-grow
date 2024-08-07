import Card from "@components/common/Card";

export default function MainFeature() {

    const solutions = [
        {icon: '🎯', title: '맞춤형 질문 생성', description: 'AI가 당신의 필요에 맞춰 적절한 면접 질문을 실시간으로 생성하여 최적화된 기술 면접을 제공합니다.'},
        {icon: '⚡', title: '즉각적 피드백', description: '답변에 즉시에 AI가 상세한 피드백을 제공, 지속적 개선을 도와줍니다.'},
        {icon: '👥', title: '다양한 면접 상황', description: '다양한 분야와 회사체를 반영하여 여러가지 면접 상황의 시뮬레이션을 통해 경험을 얻을 수 있습니다.'},
    ];


    return <section className="mb-16 py-10">
        <h2 className="text-2xl font-semibold text-center mb-8">더 나은 면접을 위한 AI 솔루션</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
                <Card key={index} {...solution} />
            ))}
        </div>
    </section>

}