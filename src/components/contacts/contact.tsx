"use client"

import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef } from "react";
import Swal from "sweetalert2";
import clsx from "clsx";

interface FormData {
    username: string,
    lastName: string,
    email: string,
    message: string,
}

export function Contact() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-30%",
    });

    const form: any = useRef()
    const { register, handleSubmit, reset } = useForm<FormData>();

    const submit = () => {


        emailjs
            .sendForm('service_m4l4eyc', 'template_7a9ladt', form.current, {
                publicKey: 'EwAAbsfghVPxUH1jV',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Mensaje enviado",
                        showConfirmButton: false,
                        timer: 1000,
                    })

                    reset({
                        username: "",
                        lastName: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <section
            ref={ref}
            className="max-w-[1025px] m-auto pt-14 pb-20 "
            id="contact"
        >
            <h2
                className={`transition-all duration-1000 bg-light-fondo-section sombra text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto text-center text-4xl dark:text-Dark-title-session font-bold mt-6 md:text-5xl mb-20 lg:text-6xl dark:bg-Dark-fondo`}
            >
                CONTACTO
            </h2>
            <section
                className={`flex mt-20 justify-center text-[#46474e] dark:text-Dark-text`}
            >
                <form
                    ref={form}
                    onSubmit={handleSubmit(submit)}
                    className={clsx(`w-4/5 md:w-2/5 flex flex-col relative transition-all duration-1000`,
                        inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    )}
                >
                    <h3 className="text-5xl mb-8">Escribeme</h3>

                    <label className="pl-4 py-2" >
                        Nombre
                    </label>
                    <input
                        {...register("username")}
                        className={`rounded-full  pl-4 transition-colors duration-1000 dark:text-gray-600 p-2 bg-[#46474e] dark:bg-white text-white`}
                        type="text"
                        required
                    />

                    <label className="pl-4 py-2" >
                        Apellido
                    </label>
                    <input
                        {...register("lastName")}
                        className={`rounded-full  pl-4 transition-colors duration-1000 dark:text-gray-600 p-2 bg-[#46474e] dark:bg-white text-white`}
                        type="text"
                    />

                    <label className="pl-4 py-2" >
                        Correo electronico
                    </label>
                    <input
                        {...register("email")}
                        className={`rounded-full  pl-4 transition-colors duration-1000 dark:text-gray-600 p-2 bg-[#46474e] dark:bg-white text-white`}
                        type="email"
                        required
                    />

                    <label className="pl-4 py-2" >
                        Mensaje
                    </label>
                    <textarea
                        {...register("message")}
                        className={`rounded-2xl pl-4 transition-colors duration-1000 resize-none dark:text-gray-600 p-2 h-[110px] lg:h-[150px] bg-[#46474e] dark:bg-white text-white`}
                        id=""
                    ></textarea>

                    <button
                        className={`py-2 px-8 rounded-full max-w-max m-auto my-6 bg-light-title text-white font-bold sombra transition-colors duration-1000
                             dark:bg-Dark-button `}
                    >
                        Enviar ahora
                    </button>
                </form>

                <figure
                    className={clsx(`hidden  p-8 md:grid place-content-center transition-transform duration-1000`,
                        inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    )}
                >
                    <Image src={"/images/contact.svg"} alt="" width={500} height={500} />
                </figure>
            </section>
        </section>
    )
}
