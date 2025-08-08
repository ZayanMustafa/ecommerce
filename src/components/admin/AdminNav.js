


import Link from 'next/link';

export default function AdminNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/admin" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl text-teal-600">
                EcoAdmin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

