import Image from "next/image";
import commitIcon from "@public/github-commit-icon-grey.svg";

const CommitCount = () => {
    return <div className='flex items-center'>
        <div className="group relative inline-block">
            <Image src={commitIcon} alt={'커밋'} priority draggable={false} height={21}
                   width={21}/>
            <span className="tooltip">커밋 개수</span>
        </div>

        <data className='text-mainText ml-2 font-semibold text-lg'>200</data>
    </div>
}

export default CommitCount;