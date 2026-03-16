import Image from "next/image"
import Link from "next/link"

const paintings = [
  { id: 1, title: "Sunset Harmony", src: "/product7.jpg", link:"https://soulofearth2111.etsy.com/listing/4441097851"},
  { id: 2, title: "Urban Rhythm", src: "/product8.jpg", link:"https://soulofearth2111.etsy.com/listing/4348220180" },
  { id: 3, title: "Floral Dreams", src: "/product9.jpg", link:"https://soulofearth2111.etsy.com/listing/4447155014" },
  { id: 4, title: "Abstract Emotions", src: "/product4.jpg", link:"https://soulofearth2111.etsy.com/listing/650118879" },
  { id: 5, title: "Coastal Serenity", src: "/product5.jpg", link:"https://soulofearth2111.etsy.com/listing/4408479472" },
  { id: 6, title: "Geometric Visions", src: "/product6.jpg", link:"https://soulofearth2111.etsy.com/listing/4429844343" },
  { id: 7, title: "Sunset Harmony", src: "/product1.jpg", link:"https://www.etsy.com/shop/soulofearth2111/?etsrc=sdt&section_id=37027087"},
  { id: 8, title: "Urban Rhythm", src: "/product2.jpg", link:"https://soulofearth2111.etsy.com/listing/4463663195" },
  { id: 9, title: "Floral Dreams", src: "/product3.jpg", link:"https://soulofearth2111.etsy.com/listing/743490924" },
]

export default function Paintings() {
  return (
    <section id="paintings" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="https://SoulofEarth2111.etsy.com" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="text-3xl text-black font-bold mb-8 text-center block">
            Paintings
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

