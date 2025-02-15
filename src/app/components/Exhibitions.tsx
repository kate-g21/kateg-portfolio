import Link from "next/link"
import Image from "next/image"


const exhibitions = [
  {
    id: 1,
    title: "Kate Grishakova. Keď sa plnia sny",
    image: "/exhibition1.png",
    description: "Autorska výstava Kate Grishakovej, ktorá predstavuje jej najnovšie diela.",
    date: "Februar 18 - Marec 9, 2025",
    venue: "Umelka:  centrum moderného umenia a komunity - Slovenská výtvarná únia",
    link: "https://www.facebook.com/events/s/vernisaz-vystavy-kate-grishako/865466575595201/?mibextid=wwXIfr&rdid=usEJ9FXC5qre0bPB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DP3CdkWuK%2F%3Fmibextid%3DwwXIfr",
  },
  {
    id: 2,
    title: "Malebny Tomasov",
    image: "/exhibition2.jpg",
    description: "Kolekcia krajinomalieb inšpirovaných krásou Tomášova.",
    date: "November 6 2024 - April 1, 2025",
    venue: "Kastiel Tomasov, Tomasov",
    link: "https://turukartcollective.com/vystavy/malebny-tomasov/",
  },
  {
    id: 3,
    title: "Verifikacia",
    image:"/exhibition3.jpg",
    description: "Výstava Zdruzenia Vytvarnych Umelcov Zapadneho Slovenska (ZVUZS)",
    date: "Februar 1 2025 - April 14 2025",
    venue: "Levicky Hrad, Levice",
    link: "https://www.facebook.com/share/1ABJvU1orV/?",
  },
]

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Aktualne Vystavy</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exhibitions.map((exhibition) => (
            // <Link href={`/exhibitions/${exhibition.id}`} key={exhibition.id} className="block">
          
            <Link href={exhibition.link} key={exhibition.id} passHref legacyBehavior className="block">
                <a target="_blank" rel="noopener noreferrer" className="block">
              <article className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <Image
                              src={ exhibition.image || "/exhibition1.jpg"}
                              alt={exhibition.title}
                              width={200}
                              height={150}
                              className="w-full h-48 object-cover"
                            />
                <h3 className="text-xl text-black font-semibold mb-2">{exhibition.title}</h3>
                <p className="text-gray-600 mb-4">{exhibition.description}</p> 
                <p className="text-sm text-gray-500">{exhibition.date}</p>
                <p className="text-sm text-gray-500">{exhibition.venue}</p>
              </article>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

