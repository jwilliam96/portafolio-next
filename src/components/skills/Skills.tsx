"use client"

import { useInView } from "react-intersection-observer";
import { skills } from "@/utils";
import clsx from "clsx";

export function Skills() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-30%",
    });

    return (
        <section
            id="skills">

            <h2
                className={`transition-all duration-1000 bg-light-fondo-section sombra text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto text-center text-4xl dark:text-Dark-title-session font-bold mt-6 md:text-5xl mb-20 lg:text-6xl dark:bg-Dark-fondo`}
            >
                HABILIDADES
            </h2>

            <div
                ref={ref}
                className="w-11/12 m-auto mt-20 ss:w-3/4  ss:mt-14 md:w-11/12 md:flex md:flex-wrap md:gap-8 md:place-content-between">
                {
                    skills.map(skill => (
                        <article
                            key={skill.title}
                            className={clsx(`mb-8 md:w-[260px] transition-transform duration-1000`,
                                inView ? "scale-100" : "scale-0"
                            )}>
                            <h3 className={`text-Dark-project text-3xl text-center font-bold neon-azul`}>
                                {skill.title}
                            </h3>

                            <figure className="w-[150px] h-[150px] m-auto ">
                                <div className="text-red-700">
                                    {skill.icon}
                                </div>
                            </figure>

                            <p className={`text-[#46474E] mt-4 text-center dark:text-Dark-text`}>
                                {skill.description}
                            </p>
                        </article>
                    ))
                }
            </div>


        </section>
    )
}
