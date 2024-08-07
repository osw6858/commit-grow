import UserReviewCard from "@components/common/UserReviewCard";

export default function UserReview() {

    const testimonials = [
        {stars: 5, text: '"캐치테크 덕분에 부족한 부분을 찾았습니다."', author: '알메 포트폴리오 개발사'},
        {stars: 5, text: '"캐치테크 덕분에 부족한 부분을 찾았습니다."', author: '알메 백엔드 개발자'},
        {stars: 5, text: '"캐치테크 덕분에 부족한 부분을 찾았습니다."', author: '알메 DevOps 개발자'},
    ];


    return <section className="mb-16 pb-8">
        <h2 className="text-2xl font-semibold text-center mb-8 ">캐치테크와 함께한 사용자들의 이야기</h2>
        <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
                <UserReviewCard key={index} {...testimonial} />
            ))}
        </div>
    </section>

}