import Image from "next/image"
import Link from "next/link"

const paintings = [
  { id: 1, title: "Sunset Harmony", src: "/product1.jpg", link:"https://soulofearth2111.etsy.com"},
  { id: 2, title: "Urban Rhythm", src: "/product2.jpg", link:"https://soulofearth2111.etsy.com/listing/1849175344" },
  { id: 3, title: "Floral Dreams", src: "/product3.jpg", link:"https://soulofearth2111.etsy.com/listing/713414243" },
  { id: 4, title: "Abstract Emotions", src: "/product4.jpg", link:"https://soulofearth2111.etsy.com" },
  { id: 5, title: "Coastal Serenity", src: "/product5.jpg", link:"https://soulofearth2111.etsy.com/listing/1850314383" },
  { id: 6, title: "Geometric Visions", src: "/product6.jpg", link:"https://soulofearth2111.etsy.com/listing/1847507415" },
]

export default function Paintings() {
  return (
    <section id="paintings" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="https://SoulofEarth2111.etsy.com" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-8 text-center block">
            Obrazy
          </a>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.map((painting) => (
             <Link href={painting.link} passHref legacyBehavior key={painting.id}>
             <a target="_blank" rel="noopener noreferrer" className="block">
               <div className="bg-white rounded-lg shadow-md overflow-hidden">
                 <Image
                   src={painting.src || "/placeholder.svg"}
                   alt={painting.title}
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover"
                 />
               </div>
             </a>
           </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

