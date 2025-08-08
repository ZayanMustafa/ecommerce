


import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The eco-friendly product you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link 
        href="/" 
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}