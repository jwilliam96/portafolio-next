"use client"

import { projects } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export function Project() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-30%",
    });

    return (
        <section id="project" className="pb-32   ">
            <h2 className={`transition-all duration-1000 bg-light-fondo-section sombra text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto text-center text-4xl dark:text-Dark-title-session font-bold mt-6 md:text-5xl mb-20 lg:text-6xl dark:bg-Dark-fondo`}> PROYECTOS</h2>

            {/* CARD  */}
            <div ref={ref} className=" w-11/12 m-auto flex flex-col gap-10  sm:w-1/2 md:max-w-[1025px] lg:w-full lg:gap-20 ">
                {
                    projects.map(project => (

                        <article key={project.title}
                            className={clsx(` card transition-all duration-1000
                        w-[290px] m-auto flex flex-col rounded-xl relative mb-10 
                       bg-[#000000bd] shadow-img-project lg:pr-6 lg:pl-6 lg:bg-white
                       dark:bg-[#190917] dark:lg:bg-Dark-fondo dark:shadow-none
                         lg:odd:flex-row lg:odd:pl-0 sm:w-full lg:flex-row-reverse lg:place-content-between `,
                                inView ? "translate-x-0 opacity-100" : " odd:-translate-x-full translate-x-full opacity-0"
                            )}
                        >

                            {/* CONTENT IMG  */}
                            <div>
                                <h3
                                    className={`
                                text-white
                                dark:text-Dark-title-session text-4xl font-bold text-center my-6 lg:hidden`}
                                >
                                    {project.title}
                                </h3>

                                {/* CAJA  */}
                                <div
                                    className={clsx(` 
                                hidden w-width-image h-height-image border-solid border-[13px]  absolute top-8
                                border-Dark-title-session dark:lg:block `,
                                        project.project === "PROYECTO 2" ? "right-14" : "left-8 "
                                    )}
                                />


                                <div
                                    className={
                                        clsx(` overflow-hidden
                                w-full h-[180px] m-auto  bg-cover relative bg-center card cursor-pointer
                                md:h-[200px] 
                                lg:h-[270px] lg:rounded-2xl lg:w-[450px] lg:shadow-caja lg:my-8 lg:ml-6 
                                dark:m-0  dark:lg:h-[270px]  dark:lg:rounded-none`,
                                            project.project === "PROYECTO 2" ? "lg:shadow-img-project-inv" : "lg:shadow-img-project"
                                        )
                                    }
                                >
                                    {/* NAV  */}
                                    <div
                                        className={`clipPath absolute
                                     bg-Light-fondo-clip grid place-content-center font-bold w-full h-full text-Dark-text
                                     dark:bg-Dark-fondo-clip `}
                                    >
                                        <h3 className={`py-4 px-6`}>{project.title}</h3>
                                        <Link
                                            className="block py-1 px-8 rounded-2xl mt-2 font-bold cursor-pointer text-center mx-auto bg-Dark-title-session"
                                            href={`${project.url}`}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            Proyecto
                                        </Link>
                                    </div>
                                    {/* IMAGE  */}
                                    <Image priority src={`${project.image}`} width={450} height={300} alt="proyecto" className="w-full h-full object-cover" />

                                </div>
                            </div>

                            {/* DESCRIPTION  */}
                            <section className="flex flex-col justify-center m-auto lg:m-0 sm:w-full md:w-full lg:w-[340px] text-Dark-text">
                                <span className="
                            hidden 
                             text-Dark-project text-xl font-bold lg:block drop-shadow-Light-text-sombra
                             dark:font-normal dark:drop-shadow-text-sombra">
                                    {project.project}
                                </span>
                                <h3
                                    className={`hidden text-light-title dark:text-Dark-title-session text-3xl font-bold drop-shadow-Light-text-sombra lg:block`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`text-center dark:text-Dark-text m-4 lg:text-left lg:m-0 lg:mt-4 lg:text-light-text`}
                                >
                                    {project.description}
                                </p>
                            </section>
                        </article>
                    ))
                }
            </div>

        </section>
    )
}
