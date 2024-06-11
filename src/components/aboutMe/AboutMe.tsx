"use client"

import { useInView } from "react-intersection-observer";
import SvgAboutMe from "./ui/SvgAboutMe";
import clsx from "clsx";

export function AboutMe() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-30%",
    });


    return (
        <section id="aboutMe" className="pb-32 pt-8">

            <h2 className={`transition-all duration-1000 bg-light-fondo-section sombra text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto text-center text-4xl dark:text-Dark-title-session font-bold mt-6 md:text-5xl mb-20 lg:text-6xl dark:bg-Dark-fondo`}>
                SOBRE MÍ
            </h2>

            <div ref={ref} className="flex ">

                <div

                    className={clsx("hidden md:inline w-1/2  m-aut px-4 transition-all duration-1000"
                        , inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0")}>
                    <SvgAboutMe />
                </div>

                <div className={clsx("text-center grid place-content-center relative transition-all duration-1000 text-[#46474e] dark:text-white md:w-1/2 ",
                    inView ? " translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}>
                    <p >¡Hola! Soy John William Sanchez. <br />
                        Me desempeño como desarrollador full stack, manejando diferentes tecnologías que me permita crear una página web con interfaz de usuario que sea interactiva, dinámica, rápida y eficaz utilizando: Next.js, JavaScript, TypeScript, node.Js, Html, Css, entre otras.</p> <br />

                    <p >Además de manejar gestión de bases de datos como: Postgres.SQL, Node.js, Sequelize, Firebase entre otras con el fin de obtener robustez, flexibilidad y capacidad para manejar una amplia gama de necesidades de almacenamiento y recuperación de datos.</p> <br />

                    <p >Soy una persona dedicada y apasionada en el tema de la programación, me gustan los retos y puestos desafiantes donde me exige aprender y mejorar cada día. Me considero una persona proactiva, con capacidad de escucha y muy enfocada en lo que me propongo.</p>
                </div>
            </div>
        </section>
    )
}
