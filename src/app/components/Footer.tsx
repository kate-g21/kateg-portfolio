import { Facebook, Instagram, ShoppingBag, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://www.facebook.com/soul.of.earth21/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook size={32} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/soul_of_earth" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={32} />
              </a>
            </Link>
            <Link href="https://SoulofEarth2111.etsy.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <ShoppingBag size={32} />
              </a>
            </Link>
            <Link href="mailto:soulofearth2111@gmail.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Mail size={32} />
              </a>
            </Link>
          </div>
          <p>&copy; 2025 Kate Grishakova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}