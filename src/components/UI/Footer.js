import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading mb-4">EcoGadget</h3>
            <p className="text-gray-400">Sustainable tech for a brighter future</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">hello@ecogadget.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EcoGadget. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

