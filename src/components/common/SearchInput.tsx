'use client'

import {useState} from "react";

const SearchInput = ({placeholder}: { placeholder: string }) => {
    const [isFocused, setIsFocused] = useState(false)

    return <div className="relative w-full md:w-2/3">
        <input
            className={`w-full p-4 pl-12 rounded-full border ${
                isFocused ? 'border-blue-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md`}
            type="text"
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
        } transition-colors duration-300 ease-in-out`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        </div>
    </div>
}

export default SearchInput;