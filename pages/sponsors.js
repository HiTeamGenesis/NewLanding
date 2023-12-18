import Layout from "../src/components/UI/Layout"
import Image from "next/image"
import Link from "next/link"
const Sponsors = () => {
    return (
        <Layout title="Sponsors">
        <header className="bg-[url('/images/equipo.jpg')] h-[40rem] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
                <div className="px-6 bg-opacity-75  bg-black text-center h-full w-full flex flex-col justify-center gap-4">
                        <h1 className="txtDegradado text-5xl md:text-6xl font-bold">Patrocínanos</h1>
                        <p className="text-xl font-medium">En génesis dependemos de nuestros patrocinadores para 
                        poder seguir avanzando en el desarrollo del rover y 
                        participar en la competencia más importante de robótica a nivel mundial.
                        </p>
                        <p className="text-xl font-medium">Es por esto que a nuestros patrocinadores les damos 
                        las mejores herramientas para que también crezcan con nosotros y 
                        muestren que el talento mexicano es capaz de lograr grandes cosas.</p>
                </div>
        </header>
        <main className="container mt-7 flex flex-col py-6 items-center px-12 h-screen">
                <section className="container text-left flex flex-col justify-center items-center gap-3 my-6">
                <h2 className="font-bold text-4xl md:text-5xl text-center flex flex-col mb-10">Ellos creen en el<span className="txtDegradado">talento mexicano</span></h2>
                <div className="grid grid-cols-2 r md:flex md:justify-evenly items-center md:w-full">
                    <Link href="https://www.ipn.mx" target="_blank">
                    <Image src="/images/ipn.png" alt="Escudo del IPN" width={150} height={200} className="hover:scale-110 hover:mx-2 transition-all duration-500"/>
                    </Link>
                    <Link href="https://www.unam.mx" target="_blank">
                        <Image src="/images/unam.png" alt="Escudo de la UNAM" width={120} height={200} className="hover:scale-110 hover:mx-2 transition-all duration-500"/>
                    </Link>
                    <Link href="https://www.uam.mx/" target="_blank">
                        <Image src="/images/uam.png" alt="Escudo de la UAM"  width={150} height={200} className="hover:scale-110 hover:mx-2 transition-all duration-500"/>
                    </Link>
                    <Link href="https://www.platzi.com.mx/" target="_blank">
                            <Image src="/images/platzi.png" alt="Escudo de la platzi"  width={120} height={200} className="hover:scale-110 hover:mx-2 transition-all duration-500"/>
                    </Link>
                </div>
                </section>
                <section className="container my-6">
                    <h2 className="font-bold text-4xl md:text-5xl"><span className="txtDegradado">Nuestra</span> comunidad</h2>
                    <div className="flex flex-col gap-4 ">
                        <p className="text-xl font-medium">
                            Contamos con una comunidad de estudiantes de distintas disciplinas y 
                            universidades a través de la cual le damos a 
                            nuestros patrocinadores la plataforma para tener presencia de marca en: 
                        </p>
                        <ul className="text-xl font-medium list-disc ml-5">
                            <li>Las mejores uiversidades de México</li>
                            <li>Nuestras redes sociales</li>
                            <li>Playera del equipo</li>
                            <li>Medios de comunicación</li>
                            <li>Eventos que atendemos</li>
                            <li>¡Nuestro rover!</li>
                        </ul>
                        <p className="text-xl font-medium">
                            Con esto le damos a nuestros patrocinadores la oportunidad de encontrar al mejor 
                            talento que esté dispuesto a trabajar en su empresa o ser usuarios de su producto.
                        </p>
                    </div>
                </section>
                <section className="container my-6">
                    <h2 className="font-bold text-4xl md:text-5xl">Hagamos <span className="txtDegradado">historia</span></h2>
                    <p className="text-xl font-medium">Seamos el primer equipo latinoamericano en ganar URC2023 y 
                        demostrar que no importa de donde vengamos, podemos lograr grandes cosas.
                    </p>
                    <div>
                        
                    </div>
                </section>
        </main>
</Layout>
    )
}
export default Sponsors

