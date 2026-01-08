import Navbar from '@/components/Header'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="min-h-screen bg-[#3974B8] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Bienvenue sur NextVibe !
        </h1>
      </div>
    </div>
  )
}