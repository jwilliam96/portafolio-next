"use client"


import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SvgSeparador } from "../svg/SvgComponents";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export function Header() {

    return (
        <section
            className={
                `relative transition-all duration-1000 text-Dark-text pb-14  text-center
                 md:mb-10 md:pb-28 md:min-h-screen md:bg-cover md:bg-fixed md:bg-center md:bg-Light-Image
                 dark:md:bg-Dark-Image`}
            id="inicio"
        >

            {/* SEPARADOR */}
            <SvgSeparador />

            {/* IMAGEN MOBILE  */}
            <div className="md:hidden">
                <figure >
                    <Image
                        priority
                        className="w-full object-cover dark:hidden block"
                        src={"/images/home/image-light.jpg"}
                        width={500}
                        height={400}
                        alt="un computador" />
                </figure>
                <figure className="md:hidden">
                    <Image
                        priority
                        className="w-full object-cover dark:block hidden"
                        src={"/images/home/image-dark.jpg"}
                        width={500}
                        height={400}
                        alt="un computador" />
                </figure>
            </div>

            {/* MOBILE NAME  */}

            <div className="
            bg-[#000000bd] py-10 grid place-content-center
             md:px-32 md:bg-transparent md:block">
                <h1 className=" px-8 font-bold  text-3xl md:text-6xl drop-shadow-title-shadow">
                    JOHN WILLIAM SANCHEZ
                </h1>

                <p className="text-xl p-3 text-Dark-title-session md:text-4xl drop-shadow-title-shadow">
                    Desarrollador web Front-End
                </p>

                <div className=" flex justify-center gap-6 pt-4 md:hidden">
                    <Link
                        href="https://github.com/jwilliam96">
                        <IoLogoGithub
                            size={30}
                            className="dark:drop-shadow-dark-icon-neon drop-shadow-light-icon-neon transition-all duration-1000 " />
                    </Link>

                    <Link
                        href="http://linkedin.com/in/john-william-sanchez-atehortua-181aa5288" >
                        <FaLinkedinIn
                            size={30}
                            className="dark:drop-shadow-dark-icon-neon drop-shadow-light-icon-neon transition-all duration-1000 " />
                    </Link>

                    <Link
                        href="https://api.whatsapp.com/send?phone=3115106911">
                        <FaWhatsapp
                            size={30}
                            className="dark:drop-shadow-dark-icon-neon drop-shadow-light-icon-neon transition-all duration-1000 " />
                    </Link>

                    <Link
                        rel="noreferrer"
                        target="_blank"
                        href={`mailto:jwsa.web@gmail.com`}
                    >
                        <AiOutlineMail size={30} className="dark:drop-shadow-dark-icon-neon drop-shadow-light-icon-neon transition-all duration-1000 " />
                    </Link>
                </div>
            </div>
        </section>
    )
}
