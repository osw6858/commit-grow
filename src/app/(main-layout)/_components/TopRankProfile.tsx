import Image from "next/image";
import profileImage from "@public/default-profile-picture-svg.svg";
import goldMedal from "@public/gold-medal-icon-gradient.svg";
import ContributeCount from "@app/(main-layout)/_components/ContributeCount";

const TopRankProfile = () => {
    // zustand를 이용해서 데이터를 불러오는게 좋을듯
    return <>
        <div className='flex flex-col items-center mt-12 mb-7'>
            <picture className='relative'>
                <Image src={profileImage} alt={'기본 프로필'} priority draggable={false} height={112}
                       width={112}/>
                <Image className='absolute bottom-0 -right-1' src={goldMedal} alt={'1등'} priority
                       draggable={false}
                       height={50} width={50}/>
            </picture>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='mb-2 text-lg font-bold text-mainText'>유저 아이디</p>
            <p className='text-subText'>유저 별명</p>
        </div>
        <ContributeCount/>
    </>
}

export default TopRankProfile;