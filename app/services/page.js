import Navbar from '@/components/Header'

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="h-[40vh] bg-cover bg-center">
        <div className="h-[calc(50vh-3rem)] bg-white flex flex-col items-center justify-center text-center">
          <h1 className="text-black text-4xl font-bold mb-4">
            Nos Services
          </h1>
          <p className="text-black text-lg max-w-xl">
            Découvrez ce que nous pouvons faire pour vous !
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          NextVibe vous proposons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p>Une description courte du service numéro 1.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p>Une description courte du service numéro 2.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p>Une description courte du service numéro 3.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
