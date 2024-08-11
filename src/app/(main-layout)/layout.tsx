import React, {ReactNode} from "react";
import Header from "@components/common/Header";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/devrank-logo-commit-leaderboard.svg";

const MainLayout = ({children}: { children: ReactNode }) => {
    return <>
        <Header>
            <h1 className='pl-10' aria-label="DevRank 로고">
                <Link href='/'>
                    <Image className='select-none' draggable={false} src={logo} priority
                           alt={'DevRank'}/>
                </Link>
            </h1>
        </Header>
        <div className='bg-default'>
            {children}
        </div>
        <footer>footer</footer>
    </>
}

export default MainLayout