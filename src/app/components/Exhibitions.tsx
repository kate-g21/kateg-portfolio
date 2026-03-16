'use client'
import { useState } from "react"
import Image from "next/image"

const exhibitions = [
 
  { id: 2, title: "Collective exhibition «Salon 2026 COMPARATION»", image: "/exhibition2.jpg", description: "Exhibition of West Slovak Artists’ Association (ZVUZS).", date: "March 21 - April 20, 2026", venue: "Levice Castle, Slovakia" },
  { id: 1, title: "International Art Festival Fineness", image: "/exhibition3.jpg", description: "International group exhibition 'Where matter becomes emotion'", date: "April 17 - 19, 2026", venue: "Zabytkowa Kopalnia Ignacy, Rybnik, Poland" },
  { id: 3, title: "Unity Art Nations", image: "/exhibition1.jpg", description: "Group exhibition in Gallery Contemplor.", date: "May 11 - 23, 2026", venue: "Vienna, Austria" },
  { id: 4, title: "Japan Nadeshiko Watercolor Triennale", image: "/exhibition4.jpg", description: "International watercolor festival and group exhibition", date: "May 11 - June 8, 2026", venue: "Kobe Port Tower, Kobe, Japan" },

]

export default function Exhibitions() {
  const [selected, setSelected] = useState<typeof exhibitions[0] | null>(null)

  return (
    <section id="exhibitions" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Current exhibitions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exhibitions.map((exhibition) => (
            <article
              key={exhibition.id}
              className="cursor-pointer bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              onClick={() => setSelected(exhibition)}
            >
              <Image
                src={exhibition.image || "/exhibition1.jpg"}
                alt={exhibition.title}
                width={200}
                height={350}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-xl text-black font-semibold mb-2">{exhibition.title}</h3>
              <p className="text-gray-600 mb-4">{exhibition.description}</p>
              <p className="text-sm text-gray-500">{exhibition.date}</p>
              <p className="text-sm text-gray-500">{exhibition.venue}</p>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="flex items-start justify-between border-b px-6 py-4">
              <div>
                <h3 className="text-xl font-semibold text-black">{selected.title}</h3>
                <p className="text-sm text-gray-600">{selected.date} · {selected.venue}</p>
              </div>
              <button
                className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-black hover:bg-gray-300"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto p-6">
              <Image
                src={selected.image || "/exhibition1.jpg"}
                alt={selected.title}
                width={1600}
                height={900}
                className="mx-auto max-h-[70vh] w-auto object-contain"
              />
              <p className="mt-4 text-sm text-gray-700">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}