import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-12 flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-10 flex h-20 items-start justify-center rounded-md bg-red-900 p-4 md:h-40"
        href="/"
      >
        <button className="opacity-100 transition-opacity duration-300 px-4 py-2 text-orange-200 md:w-40 hover:opacity-50">
        Main Menu
        </button>
      </Link>
      <Link
        className="mb-10 flex h-20 items-end justify-start rounded-md bg-red-900 p-4 md:h-40"
        href="/homepage/about"
      >
        <button className="opacity-100 transition-opacity px-4 py-2 text-orange-200 md:w-40 hover:opacity-50">
          About
        </button>
      </Link>
      <Link
        className="mb-10 flex h-20 items-end justify-start rounded-md bg-red-900 p-4 md:h-40"
        href="/homepage/projects"
      >
        <button className="opacity-100 transition-opacity px-4 py-2 text-orange-200 md:w-40 hover:opacity-50">
        Projects
        </button>
      </Link>
      <Link
        className="mb-10 flex h-20 items-end justify-start rounded-md bg-red-900 p-4 md:h-40"
        href="/homepage/contact"
      >
        <button className="opacity-100 transition-opacity px-4 py-2 text-orange-200 md:w-40 hover:opacity-50">
        Contact
        </button>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-blue-50 md:block"></div>
      </div>
    </div>
  );
}
