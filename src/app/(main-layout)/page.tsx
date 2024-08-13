import React, {Suspense} from 'react';
import TopRankUsers from "@app/(main-layout)/_components/TopRankUsers";
import Link from "next/link";
import {ErrorBoundary} from 'react-error-boundary';

const Home: React.FC = () => {
    // 이곳에서 데이터 모든 유저 순위 react-query 프리패칭 & 서스팬스 및 에러바운더리 fallback 적용
    return <main className='container mx-auto h-main max-w-7xl'>
        <ErrorBoundary fallback={<div>뭔가 잘못되었어요....</div>}>
            <Suspense>
                <TopRankUsers/>
                {/* 나머지 유저 컴포넌트 자리 */}
            </Suspense>
        </ErrorBoundary>
        <Link href={'/hydration'}>테스트</Link>
    </main>


};

export default Home;