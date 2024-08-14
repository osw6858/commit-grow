import React, {Suspense} from 'react';
import TopRankUsers from "@app/(main-layout)/_components/TopRankUsers";
import Link from "next/link";
import {ErrorBoundary} from 'react-error-boundary';
import dayjs from "dayjs";
import SearchInput from "@components/common/SearchInput";

const Home: React.FC = () => {
    const now = new Date()
    // 이곳에서 데이터 모든 유저 순위 react-query 프리패칭 & 서스팬스 및 에러바운더리 fallback 적용
    return <main className='container mx-auto h-full max-w-7xl px-3 md:h-main'>
        <form className='flex flex-col items-center justify-center py-7'>
            {/* DB검색 후 결과가 없다면 api 페칭 */}
            <SearchInput placeholder={'깃허브 아이디를 검색해 보세요!'}/>
            <p className='pt-7 text-subText font-semibold text-lg'>{dayjs().format('YYYY-MM-DD')}</p>
        </form>
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