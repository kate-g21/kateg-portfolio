import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <li>
            <Link href="#about" className="text-lg text-gray-600 hover:text-gray-900 font-medium block py-1">
              About
            </Link>
          </li>
          <li>
            <Link href="#paintings" className="text-lg text-gray-600 hover:text-gray-900 font-medium block py-1">
              Paintings
            </Link>
          </li>
          <li>
            <Link href="#exhibitions" className="text-lg text-gray-600 hover:text-gray-900 font-medium block py-1">
              Exhibitions
            </Link>
          </li>
          <li>
            <Link href="#workshops" className="text-lg text-gray-600 hover:text-gray-900 font-medium block py-1">
              Workshops
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

