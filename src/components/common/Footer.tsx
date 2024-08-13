import React from "react";
import Link from "next/link";
import Image from "next/image";
import gitHubIcon from '@public/gitHub.svg'

const Footer = () => {
    return <footer className="bg-gray-200 text-gray-600 border-t border-solid border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className='flex items-center justify-center'>
                <h3 className="text-lg font-semibold text-gray-700">Join the Flow</h3>
                <div className="flex space-x-4">
                    <Link href="https://github.com/osw6858/devRank" target="_blank" rel="noopener noreferrer">
                        <Image className='ml-2 select-none' src={gitHubIcon} alt={'깃허브 로고'} draggable={false} priority
                               width={22}
                               height={22}/>
                    </Link>
                </div>
            </div>
            <div className="mt-3 text-sm text-center ">
                © {new Date().getFullYear()} DevRank. All rights reserved.
            </div>
        </div>
    </footer>
}

export default Footer;