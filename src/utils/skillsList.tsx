import { SvgNextJs, SvgNode, SvgPostgres, SvgPrisma, SvgReact, SvgTypeScript } from "@/components"

export const skills = [
    {
        title: "REACT",
        icon: <SvgReact />,
        description: "Se utiliza para crear interfaces de usuario interactivas y dinámicas en aplicaciones web, facilita la actualización y renderización eficiente de componentes en respuesta a cambios de datos."
    },
    {
        title: "NEXTJS",
        icon: <SvgNextJs />,
        description: "Ayuda a tener carga rápida y mejor rendimiento, mejora del seo, experiencia fluida, navegación instantánea, optimización de imágenes y mayor seguridad"
    },
    {
        title: "TYPESCRIPT",
        icon: <SvgTypeScript />,
        description: "Permite tener mejor escalabilidad y mantenimiento, ayuda a tener menos errores en tiempo de ejecución"
    },
    {
        title: "NODE.JS",
        icon: <SvgNode />,
        description: "Es especialmente útil para aplicaciones en tiempo real y aquellas que requieren una alta concurrencia, como aplicaciones de chat, juegos en línea y servicios web."
    },
    {
        title: "POSTGRES SQL",
        icon: <SvgPostgres />,
        description: "Se utiliza para almacenar, organizar y gestionar datos de manera eficiente y segura. Es una opción popular para aplicaciones web y empresariales que requieren una base de datos confiable y de alto rendimiento."
    },
    {

        title: "PRISMA",
        icon: <SvgPrisma />,
        description: " Gracias a Prisma las consultas son optimizadas y más rápidas, mejorando el rendimiento, destaca por su facilidad de uso y su capacidad para trabajar con múltiples bases de datos."
    },

]