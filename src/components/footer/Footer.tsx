import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export function Footer() {
    return (
        <footer className="bg-[#000000bd] " id="footer">
            <article className="md:flex place-content-evenly text-Dark-text">
                <section className="py-4 ">
                    <h3 className="text-center text-2xl font-bold text-Dark-title-session pb-3">
                        CONTACTO
                    </h3>
                    <div className="max-w-max m-auto">
                        <div className="flex items-center">
                            <MdLocationOn size={20} className="mx-3" />

                            <span> Medellin - Colombia</span>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp size={20} className="mx-3" />
                            <span>+57 311-510-69-11</span>
                        </div>
                        <div className="flex items-center">
                            <FaLinkedin size={20} className="mx-3" />

                            <Link href="https://linkedin.com/in/john-william-sanchez-atehortua-181aa5288">
                                linkedin/john-william-sanchez
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <MdEmail size={20} className="mx-3" />

                            <span>jwsa.web@gmail.com</span>
                        </div>
                    </div>
                </section>

                <section className="hidden md:block">
                    <h3 className="text-center text-2xl font-bold text-Dark-title-session py-3">
                        OTROS PROYECTOS
                    </h3>
                    <ul className="text-center">
                        <li>Api del clima</li>
                        <li>Pokedex</li>
                        <li>Galleta de la fortuna</li>
                        <li></li>
                    </ul>
                </section>

                <section className="pb-4 md:py-4">
                    <h3 className="text-center text-2xl font-bold text-Dark-title-session pb-3">
                        CERTIFICADOS
                    </h3>
                    <ul className="flex justify-center gap-8 md:block">
                        <li className="hidden md:inline">Programacion desde cero</li>
                        <li>
                            Front-End{" "}
                            <span className="hidden md:inline">Web Development</span>
                        </li>
                        <li>
                            Back-End <span className="hidden md:inline">Web Development</span>
                        </li>
                        <li>
                            Full-Stack{" "}
                            <span className="hidden md:inline">Web Development</span>
                        </li>
                    </ul>
                </section>
            </article>

            <section className="text-center text-[#d7d542] p-6">
                <p>
                    © 2023 <span>William</span> - Todos los derechos reservados
                </p>
            </section>
        </footer>
    )
}
