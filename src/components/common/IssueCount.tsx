import Image from "next/image";
import issueIcon from "@public/github-notice-icon.svg";

const IssueCount = () => {
    return <div className='flex items-center'>
        <div className="group relative inline-block">
            <Image src={issueIcon} alt={'이슈'} priority draggable={false} height={21}
                   width={21}/>
            <span className="tooltip">이슈 개수</span>
        </div>
        <data className='text-mainText ml-2 font-semibold text-lg'>200</data>
    </div>
}

export default IssueCount;