import Image from "next/image"
import Link from "next/link"

const workshops = [
  {
    id: 1,
    title: "Zážitkové maľovanie od profesionálnej maliarky",
    description: "Naučíte sa základy miešania farieb a techniky maľovania. Vytvoríte si vlastné umelecké dielo pod mojim vedením. Všetky materiály budú k dispozícii (plátno, farby, štetcе a pod.). Príjemná atmosféra kaviarni a možnosť získať nové skúsenosti.",
    image: "/IMG_3309.jpg",
    date: "Februar 22 2025. 15:00",
    link: "https://www.facebook.com/events/620700634230327/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22calendar_tab_event%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
  },
//   {
//     id: 2,
//     title: "Color Theory Masterclass",
//     description: "Explore the psychology of color and its application in painting.",
//     image: "/placeholder.svg?height=150&width=200",
//     date: "August 12-13, 2023",
//   },
//   {
//     id: 3,
//     title: "Plein Air Painting Retreat",
//     description: "Experience the joy of outdoor painting in beautiful natural settings.",
//     image: "/placeholder.svg?height=150&width=200",
//     date: "September 16-17, 2023",
//   },
]

export default function Workshops() {
  return (
    <section id="workshops" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Workshopy</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <Link href={workshop.link} key={workshop.id}  passHref legacyBehavior className="block">
            <a target="_blank" rel="noopener noreferrer" className="block">
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={200}
                  height={150}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-black font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <p className="text-sm text-gray-500">{workshop.date}</p>
                </div>
              </article>
          </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

