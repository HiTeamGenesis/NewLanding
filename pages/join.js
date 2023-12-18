import Layout from "../src/components/UI/Layout"
const Join = () => {
  return (
    <Layout title="Únete">
        <header className="bg-[url('/images/equipo.jpg')] h-[40rem] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
            <div className=" bg-opacity-40 bg-black text-center h-full w-full flex flex-col justify-center gap-4">
                <h1 className="txtDegradado text-6xl font-bold">Únete al equipo</h1>
                <p className="text-xl font-medium">En génesis somos creyentes de que el talento no siempre <br/>
                    tiene la oportunidad de ser descubierto y <br />
                    que no muchas personas son conscientes de lo mucho que pueden lograr
                </p>
            </div>
        </header>
        <main className="container mt-7 flex flex-col  items-center px-12 h-screen">
            <section className="container text-left flex flex-col gap-3 my-10">
            <h2 className="font-bold text-5xl"><span className="txtDegradado">Te buscamos</span> a ti</h2>
            <p className="font-medium text-xl">Estamos buscando gente con ideas locas y sin miedo a cometer errores.</p>
            <p className="font-medium text-xl">Forma parte de un equipo en el que el deseo de aprender, <br />
                superarse, generar un cambio, inspirar y 
                ser los mejores es el común denominador.
            </p>
            </section>
            
            <div className="my-5 h-full w-full">
            <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfS5m7kTceZWwNJatyrJYDCwZzkmG4Y6_xJkqjkD-pHJ4nl1w/viewform?embedded=true"
            frameborder="0"
            width="100%"
            height="100%"
            ></iframe>
            </div>
        </main>
    </Layout>
  )
}

export default Join