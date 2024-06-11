"use client"

import { SvgCss, SvgHtml, SvgJs, SvgNode, SvgPostgres, SvgReact } from "@/components/svg/SvgComponents"
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export function Skills() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-30%",
    });


    const skills = [
        {
            title: "HTML",
            icon: <SvgHtml />,
            description: "Es fundamental en el desarrollo web y sirve como base para la creación de sitios y aplicaciones en línea."
        },
        {
            title: "JAVASCRIPT",
            icon: <SvgJs />,
            description: "Permite a los desarrolladores controlar el comportamiento de los elementos de una página. Es esencial para la creación de aplicaciones web interactivas."
        },
        {

            title: "CSS",
            icon: <SvgCss />,
            description: "Permite separar la estructura del contenido (definida en HTML), lo que facilita el diseño y la personalización de páginas web."
        },
        {
            title: "NODE.JS",
            icon: <SvgNode />,
            description: "Es especialmente útil para aplicaciones en tiempo real y aquellas que requieren una alta concurrencia, como aplicaciones de chat, juegos en línea y servicios web."
        },
        {
            title: "REACT",
            icon: <SvgReact />,
            description: "Se utiliza para crear interfaces de usuario interactivas y dinámicas en aplicaciones web, facilita la actualización y renderización eficiente de componentes en respuesta a cambios de datos"
        },
        {
            title: "POSTGRES SQL",
            icon: <SvgPostgres />,
            description: "Se utiliza para almacenar, organizar y gestionar datos de manera eficiente y segura. Es una opción popular para aplicaciones web y empresariales que requieren una base de datos confiable y de alto rendimiento."
        },

    ]
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
                                Es fundamental en el desarrollo web y sirve como base para la
                                creación de sitios y aplicaciones en línea.
                            </p>
                        </article>
                    ))
                }
            </div>


        </section>
    )
}
