import TopRankProfile from "@app/(main-layout)/_components/TopRankProfile";
import IssueCount from "@components/common/IssueCount";
import CommitCount from "@components/common/CommitCount";
import PullRequestCount from "@components/common/PullRequestCount";

const TopRankCard = () => {
    return <div className='w-full h-auto bg-white'>
        <div className='flex flex-col items-center justify-center'>
            <TopRankProfile/>
            <section className='w-full h-20 flex mt-10'>
                <div
                    className='w-1/3 flex items-center justify-center border-r border-t border-solid border-gray-200'>
                    <IssueCount/>
                </div>
                <div
                    className='w-1/3 flex items-center justify-center border-r border-t border-solid border-gray-200'>
                    <CommitCount/>
                </div>
                <div
                    className='w-1/3 flex items-center justify-center border-t border-solid border-gray-200'>
                    <PullRequestCount/>
                </div>
            </section>
        </div>
    </div>
}

export default TopRankCard