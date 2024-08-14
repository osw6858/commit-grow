import Image from "next/image";
import PRIcon from "@public/github-pr-icon-gray.svg";

const PullRequestCount = () => {
    return <div className='flex items-center'>
        <div className="group relative inline-block">
            <Image src={PRIcon} alt={'풀리퀘스트'} priority draggable={false} height={21}
                   width={21}/>
            <span className="tooltip">PR 개수</span>
        </div>
        <data className='text-mainText ml-2 font-semibold text-lg'>200</data>
    </div>
}

export default PullRequestCount;