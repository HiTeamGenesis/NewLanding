import Layout from "../src/components/UI/Layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => { 
    const observer = new IntersectionObserver((entries) => {  
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 

          if(entry.target.classList.contains("hiddenText")){
            entry.target.classList.add("show");
          } else entry.target.classList.add("sponsors");
        }else{
          if(entry.target.classList.contains("hiddenText"))
            entry.target.classList.remove("show");
          else entry.target.classList.remove("sponsors")
        }
      });
    })
    const ocultos = document.querySelectorAll(".hiddenInY");
    ocultos.forEach((oculto) => observer.observe(oculto) )
    const ocultosX = document.querySelectorAll(".hiddenInX");
    ocultosX.forEach(o=>observer.observe(o))
    
  }, []);
  return (
    <Layout title="Home">
      <main className="my-4  overflow-hidden">
        <section className="h-screen flex flex-col items-center justify-center px-5">
            <h1 className=" text-white  font-bold text-6xl mb-8 hiddenInY">Génesis</h1>
            <p className="md:flex md:flex-col text-center text-xl mb-12 hiddenInY">Estamos inspirando a la nueva generación de jóvenes a 
              <span>crear cosas que jamás creyeron posibles</span>
            </p>
            <Link href="/inicio" className="hiddenText">
               <p className="animacionTextoHover text-white font-medium">Descubre cómo</p>
            </Link>
        </section>
        <section className="px-5 flex flex-col items-center h-screen">
          <h2 className="text-center  text-white font-bold text-5xl hiddenInY">Estamos creando un rover</h2>
          <div className="relative">
            <Image 
            src="/images/rover/rov.png"
            alt="Modelo del rover"
            width={600}
            height={600}
            />
            <div className="flex flex-col-reverse justify-center items-center absolute top-0 -right-[8rem] hiddenInY rovAni">
              <Image 
                src="/images/rover/flecha_derecha_up.png"
                alt="flecha"
                width={150}
                height={150}
              />
              <p className="text-center text-2xl ml-16 text-white">Brazo robotico</p>
            </div>
            <div className="flex flex-col justify-center items-center absolute bottom-[13rem] -right-[10rem] hiddenInY rovAni">
              <Image 
                src="/images/rover/flecha_derecha_below.png"
                alt="flecha"
                width={150}
                height={150}
              />
              <p className="text-center text-2xl ml-16 text-white">Laboratorio de biología</p>
            </div>
            <div className="flex flex-col-reverse justify-center  top-[5rem] -left-[10rem] items-center absolute hiddenInY rovAni">
              <Image 
                src="/images/rover/flecha_izquierda_up.png"
                alt="flecha"
                width={150}
                height={150}
              />
              <p className="text-center text-2xl mr-16 text-white">Navegación autónoma</p>
            </div>
            <div className="flex flex-col justify-center items-center absolute  bottom-[16rem] -left-[12rem] hiddenInY transition rovAni">
              <Image 
                src="/images/rover/flecha_izquierda_below.png"
                alt="flecha"
                width={150}
                height={150}
              />
              <p className="text-center text-2xl mr-16 text-white">Comunicación a distancia</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5 mb-14">
          <h2 className="text-center text-white font-bold text-4xl">Conoce al talento detrás de génesis</h2>
            <section className=" w-max relative">
                <div className="flex gap-4 moveImagesRight">
                  <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                  </div>
                  <div className="w-full flex gap-4 absolute top-0 right-[118.5rem] moveImagesRight">
                  <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                  </div>
            </section>
            <section className="w-max relative">
                <div className="flex gap-4 moveImagesLeft">
                  <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                  </div>
                  <div className="w-full flex gap-4 absolute top-0 left-[118.5rem] moveImagesLeft">
                  <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link>
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                <Link href="">
                  <Image src="/images/equipo.jpg" className="rounded-2xl" width={300} height={50} />
                </Link> 
                  </div>
            </section>
          <Link href="" >
            <p className="animacionTextoHover text-white font-medium text-center text-4xl mt-5">Conoce más</p>
          </Link>
        </section>
        <section className="px-5  flex flex-col items-center justify-center">
          <h2 className="text-center text-white font-bold text-4xl">Nuestos patrocinadores</h2>
          <div className="md:flex items-center md:justify-evenly grid grid-cols-3 gap-6 md:gap-0 w-full my-12">
            <Link href="" className="sponsor hiddenInX" target="_blank">
              <Image 
                src="/images/sponsors/datarebels.png"
                alt="patrocinador datarebels"
                width={100}
                height={100}
              />
            </Link>
            <Link href="https://www.platzi.com.mx/" className="sponsor hiddenInX" target="_blank">
              <Image 
                src="/images/sponsors/platzi.png"
                alt="patrocinador platzi"
                width={100}
                height={100}
              />
            </Link>
            <Link href="" className="sponsor hiddenInX" target="_blank">
              <Image 
                src="/images/sponsors/kat.png"
                alt="patrocinador Fundación Kat"
                width={100}
                height={100}
              />
            </Link>
            <Link href="" className="sponsor hiddenInX" target="_blank">
              <Image 
                src="/images/sponsors/rappi.png"
                alt="patrocinador rappi"
                width={100}
                height={100}
              />
            </Link>
            <Link href="" className="sponsor hiddenInX" target="_blank">
              <Image 
                src="/images/sponsors/patro1.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
          <p className="text-center text-xl">Descubre la historia de cada uno de nuestros patrocinadores</p>
        </section>
      </main>
      <footer className="text-center py-10">
        <p className="text-xl">Hecho con 	&lt;3 por Génesis</p>
      </footer>
      <div className="circle-container">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
        <div className="circle-6"></div>
      </div>
    </Layout>
  );
}
