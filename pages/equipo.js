import Layout from "../src/components/UI/Layout";
import Image from "next/image";
import Link from "next/link";
const Equipo = () => {
  return (
    <Layout title="Equipo">
      <header className="flex flex-col items-center gap-14 my-12">
        <section className="grid grid-cols-1 ">
          <h1 className="font-bold text-5xl">
            El <span className="txtDegradado">equipo</span>?
          </h1>
          <p className="my-4 text-xl font-medium w-[60rem]">
            Construir un rover en 7 semanas y lograr un reto tan grande y
            ambicioso no sería posible sin el talentoso equipo de estudiantes
            que lo hacen posible.
          </p>
        </section>
          <div className="flex items-center justify-center w-[30rem] overflow-hidden ">
          <div className="schools-container">
          <Link href="https://www.ipn.mx" target="_blank">
            <img
              src="/images/ipn.png"
              alt="Escudo del IPN"
              className="h-36 w-auto mr-36  hover:mb-6 transition-all duration-500"
            />
          </Link>
          <Link href="https://www.unam.mx" target="_blank">
            <img
              src="/images/unam.png"
              alt="Escudo de la UNAM"
              className="h-36 w-auto mr-36  hover:mb-6 transition-all duration-500"
            />
          </Link>
          <Link href="https://www.uam.mx/" target="_blank">
            <img
              src="/images/uam.png"
              alt="Escudo de la UAM"
              className="h-32 w-auto mr-40 hover:mb-6 transition-all duration-500"
            />
          </Link>
          <Link href="https://www.ipn.mx" target="_blank">
            <img
              src="/images/ipn.png"
              alt="Escudo del IPN"
              className="h-38 w-auto mr-36  hover:mb-6 transition-all duration-500"
            />
          </Link>
          <Link href="https://www.unam.mx" target="_blank">
            <img
              src="/images/unam.png"
              alt="Escudo de la UNAM"
              className="h-38 w-auto mr-36 hover:mb-6 transition-all duration-500"
            />
          </Link>
          <Link href="https://www.uam.mx/" target="_blank">
            <img
              src="/images/uam.png"
              alt="Escudo de la UAM"
              className="h-32 w-auto mr-40  hover:mb-6 transition-all duration-500"
            />
          </Link>
        </div>
      </div>
        <button
          className="bgDegradado font-medium text-white text-xl rounded-md px-7 py-1 my-3"
          type="button"
        >
          <Link href="/join">Únete al equipo</Link>
        </button>
      </header>
      <main className="">
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Growth</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Growth se encarga de gestionar recursos, patrocinadores, cuidar la
              cultura del equipo y administración de redes sociales y contenido.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
        {
          //Comienza la sección de Hardware
        }
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Hardware</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Hardware se encarga del ensamblado, diseño y fabricación de todos
              los componentes necesarios para que el robot funcione.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
        {
          //Comienza la sección de Software
        }
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Software</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Software se encarga de programar el cerebro del rover para que
              cumpla con todas las misiones de forma adecuada.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
        {
          //Biologia
        }
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Biology</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Biology se encarga de investigar métodos y crear sistemas para la
              deteccion de vida en muestras de suelo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
        {
          //Comienza la sección de Circuits
        }
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Circuits</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Growth se encarga de gestionar recursos, patrocinadores, cuidar la
              cultura del equipo y administración de redes sociales y contenido.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
        {
          //comienza la seccion de signals
        }
        <section className="grid grid-rows-1 justify-center gap-10 mb-14">
          <div className="container">
            <h2 className="font-bold text-4xl mb-6">Signals</h2>
            <p className="text-xl font-medium max-w-[40rem]">
              Growth se encarga de gestionar recursos, patrocinadores, cuidar la
              cultura del equipo y administración de redes sociales y contenido.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-20 container">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.jpg"
                alt="Card Image"
                width={250}
                height={100}
              />
              <div className="px-6 py-4 bgDegradado rounded-b-xl font-medium text-xl grid grid-cols-2">
                <p className="text-black">John Doe</p>
                <p className="font-normal text-black">Escuela</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Equipo;
