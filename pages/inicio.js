import Layout from "../src/components/UI/Layout";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Layout title="Inicio">
      <header className="container flex  justify-evenly items-center my-12">
        <section className="flex flex-col px-9">
          <h1 className="font-bold text-5xl">
            ¿Qué es <span className="txtDegradado">génesis</span>?
          </h1>
          <p className="my-4 text-xl font-medium">
            Génesis equipo de estudiantes
            locos de las universidades 
            públicas más grandes de México 
            con el objetivo de inspirar a los 
            jóvenes a construir cosas que nunca creyeron posibles
          </p>
          <button
            className="bgDegradado font-medium text-white text-xl rounded-md px-7 py-1 self-start my-3"
            type="button"
          >
            <Link href="/join">Conócenos</Link>
          </button>
        </section>
        <Image
          src="/images/genesisLogo.jpg"
          alt="Logo de genesis team"
          width={100}
          height={300}
        />
      </header>
      <main className="my-4">
        <section className="bg-[url('/images/equipo.jpg')] h-[50rem]  bg-cover bg-center bg-fixed bg-no-repeat my-12">
          <span className="hidden">Equipo genesis team gráfico</span>
        </section>
        <section className="flex flex-col items-center px-12">
          <div className="flex flex-col gap-5  font-medium text-lg md:text-xl">
            <h2 className="font-bold text-3xl md:text-4xl self-start">
              El gran <span className="txtDegradado">reto</span>
            </h2>
            <p>
              Estamos participando en la competencia más <br />
              importante y retadora de robótica <br />a nivel mundial: Univesity
              Rover Challenge 2023.
            </p>
            <p>
              Construiremos un rover capaz de manejarse solo, <br />
              hacer pruebas de laboratorio para detectar vida <br />y con un
              brazo robótico con ultra precisión.
            </p>
            <p>
              Competiremos contra grandes universidades y <br />
              pondremos en alto lo que el talento mexicano es capaz de hacer.
            </p>
          </div>
          <iframe
            className="my-10 max-w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RPBcIJdRx98"
            title="Video genesis"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture"
          ></iframe>
          <button
            className="bgDegradado font-medium text-white text-xl rounded-md px-7 py-1"
            type="button"
          >
            <Link href="/join">Conoce al equipo</Link>
          </button>
        </section>
        
        <section className="flex flex-col md:flex-row justify-evenly my-16 px-12 gap-8 md:gap-0">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl flex flex-col mb-8 self-baseline">
              Pongamos en alto el
              <span className="txtDegradado block">talento mexicano</span>
            </h2>
            <section className="flex flex-col gap-5">
              <h3 className="text-3xl font-bold">Únete al equipo</h3>
              <p className="max-w-xs font-medium text-xl">
                Estamos buscando gente con ideas locas y sin miedo a cometer
                errores para construir lo imposible para algunos, pero lo
                posible para nosotros
              </p>
              <button
                className="bgDegradado font-medium text-white text-xl rounded-md px-7 py-1 self-start"
                type="button"
              >
                <Link href="/join">Únete</Link>
              </button>
            </section>
          </div>

          <section className="flex flex-col gap-5 md:self-end ">
            <h3 className="text-3xl font-bold">Patrocínanos</h3>
            <p className="max-w-xs font-medium text-xl">
              Un gran equipo no solo se conforma por los integrantes, también se
              conforma por aquellos que hacen posible construir este sueño.
            </p>
            <button
              className="bgDegradado font-medium text-white text-xl rounded-md px-7 py-1 self-start"
              type="button"
            >
              <Link href="/sponsors">Patrocínanos</Link>
            </button>
          </section>

        </section>
      </main>
    </Layout>
  );
}
