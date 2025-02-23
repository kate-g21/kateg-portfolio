import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image src="/kate-grishakova.jpg" alt="Kate Grishakova" layout="fill" objectFit="cover" quality={100} priority />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Kate Grishakova</h1>
        <p className="text-xl sm:text-2xl">Artist & Painter</p>
      </div>
    </section>
  )
}

