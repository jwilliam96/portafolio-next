"use client"

import { useState } from "react"
import { IoMdMoon } from "react-icons/io"
import { IoSunny } from "react-icons/io5"

export function DarkButton() {

    const [darkMode, setDarkMode] = useState(false)


    const handleDark = () => {
        if (darkMode) {
            document.querySelector("html")?.classList.add("dark")
        } else {
            document.querySelector("html")?.classList.remove("dark")
        }
        setDarkMode(!darkMode)
    }

    return (
        <div className="max-w-max fixed z-20 bg-[#313030] rounded-full top-8 right-4 md:left-4">
            <div
                onClick={handleDark}
                className={`flex gap-4 items-center border-[3px] rounded-3xl py-1 px-2 relative cursor-pointer dark:bg-black dark:border-black bg-black border-black`}
            >
                <div
                    className={`bg-green-600 w-7 h-7 rounded-full absolute transition-all duration-1000 top-[0.3rem] dark:translate-x-[47px] `}
                ></div>
                <IoMdMoon size={30} />
                <IoSunny className=" text-yellow-500" size={30} />
            </div>
        </div>
    )
}
