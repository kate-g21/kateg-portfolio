import { Facebook, Instagram, ShoppingBag, Mail } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">KATE GRISHAKOVA</h1>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/soul.of.earth21/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Facebook size={24} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/soul_of_earth" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Instagram size={24} />
            </a>
          </Link>
          <Link href="https://SoulofEarth2111.etsy.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <ShoppingBag size={24} />
            </a>
          </Link>
          <Link  href="mailto:soulofearth2111@gmail.com"passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}