'use client'

import TopRankCard from "@app/(main-layout)/_components/TopRankCard";

const TopRankUsers = () => {

    // useTopRank() <- 이 훅에서 모든 유저를 가져오는 패칭 이후 top3를 잘라서 반환하도록 로직을 짜야함
    // 서버에서 받은 데이터를 프론트에서 가공했다면 zustand를 이용해서 전역으로 상태관리하는게 좋을듯
    // 모든 유저를 가져오는 쿼리와 같은 쿼리키를 이용할것!

    return <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10'>
        {[1, 2, 3].map((_e, i) => <TopRankCard key={i}/>)}
    </div>
}

export default TopRankUsers