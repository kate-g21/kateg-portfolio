import Image from "next/image"
import Link from "next/link"

const workshops = [
  {
    id: 1,
    title: "Making your own sketchbook",
    description:
      "In this workshop, you will learn how to create your own sketchbook from scratch. We will provide all the materials and guidance you need. It will be a lot of fun and creativity. You will leave with a unique sketchbook that you made yourself!",
    image: "/fabriano.jpg",
    date: "April 22, 2026 from 10:00 a.m. to 12:00 p.m.",
    link: "https://www.facebook.com/share/p/186kHZRMyx/?mibextid=wwXIfr",
  },
]

export default function Workshops() {
  return (
    <section id="workshops" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Workshops</h2>
        <div className="flex flex-col gap-8">
          {workshops.map((workshop) => (
            <Link href={workshop.link} key={workshop.id} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <article className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="flex flex-col justify-center p-8 lg:w-1/3">
                    <h3 className="text-2xl text-black font-semibold mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{workshop.description}</p>
                    <p className="text-sm text-gray-500">{workshop.date}</p>
                  </div>
                  <div className="relative w-full lg:w-2/3 h-64 lg:h-[28rem]">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      fill
                      className="object-cover object-top"
                    />
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