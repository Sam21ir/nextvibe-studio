import Navbar from '@/components/Header'

export default function Home() {
  return (
    <main>

      <Navbar />

      <section
        className="h-[calc(100vh-3rem)] bg-cover bg-center"
        style={{ backgroundImage: "url('/home.jpg')" }}
      >
        <div className="h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-4">
            Bienvenue sur ma vitrine !
          </h1>
          <p className="text-lg max-w-xl">
            Découvrez nos services et explorez notre univers.
          </p>
        </div>
      </section>

    </main>
  )
}
