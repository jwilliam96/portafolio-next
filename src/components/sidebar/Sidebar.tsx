"use client"

import { SvgGitHub, SvgLinkedin, SvgWhatsapp } from "../svg/SvgComponents";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaHome, FaRegUser } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { LuAppWindow } from "react-icons/lu";
import { onMenu } from "@/store/closeMenu";
import Link from "next/link";
import clsx from "clsx";

export default function Sidebar() {

    const useStore = onMenu(state => state.isMenu)
    const close = onMenu(state => state.closeMenu)

    const menuVibrate = () => {
        close()
        if ("vibrate" in navigator) {
            navigator.vibrate(50); // 200 milisegundos de vibración
        }
    }

    return (
        <>
            {/* MENU  */}

            <div>


                <GiHamburgerMenu
                    onClick={menuVibrate}
                    size={50}
                    className={clsx(
                        "drop-shadow-menu fixed m-4 z-50 right-4 scale-0 text-6xl lg:text-7xl bottom-6 text-yellow-300 cursor-pointer md:top-2 transition-all duration-500",
                        useStore && "scale-100"
                    )} />

                <IoMdCloseCircle
                    onClick={menuVibrate}
                    className={clsx(
                        "fixed z-50 m-4 right-2 bottom-4 text-4xl cursor-pointer  md:top-2 transition-all duration-500",
                        useStore ? "scale-0" : "scale-100 "
                    )} size={40} />


            </div>


            {/* FONDO BLUR  */}
            <div
                onClick={close}
                className={clsx(
                    ` fixed inset-0 bg-[#0000007d] z-40 backdrop-blur-sm `,
                    { "hidden": useStore }
                )} />


            {/* NAV  */}
            <div className={clsx(
                "text-light-text dark:text-Dark-text fixed flex flex-col px-5 top-0 right-0 bottom-0 bg-Light-Fondo dark:bg-sidebar z-40 shadow-img-project-inv pb-20 lg:w-3/12 translate-x-0  transition-all duration-500",
                { "translate-x-full": useStore }
            )}>

                <h2 className="text-4xl  font-serif mt-20 text-center">John Sanchez</h2>

                {/* REDES SOCIALES */}
                <div className="flex justify-center mt-10 lg:mb-20 mb-12 gap-7">
                    <Link
                        aria-label="enlace a mi sitio de github"
                        className="cursor-pointer"
                        href={"https://github.com/jwilliam96"}>
                        <SvgGitHub />
                    </Link>

                    <Link
                        aria-label="enlace a mi whatsapp"
                        className="cursor-pointer"
                        href={"https://api.whatsapp.com/send?phone=3115106911"}>
                        <SvgWhatsapp />
                    </Link>

                    <Link
                        aria-label="enlace a mi sitio de linkedin"
                        className="cursor-pointer"
                        href="http://linkedin.com/in/john-william-sanchez-atehortua-181aa5288">
                        <SvgLinkedin />
                    </Link>
                </div>

                {/* LISTA  */}
                <ul className=" text-xl grow flex flex-col justify-between max-h-[480px] mx-auto">
                    <li>
                        <Link className="flex items-center gap-4" href={"#inicio"}>
                            <FaHome /> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-4" href={"#aboutMe"}>
                            <FaRegUser /> Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-4" href={"#project"}>
                            <LuAppWindow /> Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-4" href={"#skills"}>
                            <IoStatsChartSharp /> Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-4" href={"#contact"}>
                            <MdOutlineEmail /> Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
