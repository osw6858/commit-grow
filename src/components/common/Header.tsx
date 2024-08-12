import {ReactNode} from "react";

const Header = ({children}: { children: ReactNode }) => {
    return <header
        className='h-header w-full sticky top-0 z-20 bg-white border-b border-solid border-gray-200 flex items-center justify-between'>
        {children}
    </header>
}

export default Header;