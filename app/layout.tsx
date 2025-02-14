import SideNav from '@/app/ui/dashboard/sidenav';
import './globals.css'; // This is important for Tailwind to work!
import React from 'react';
import SocialLinks from '@/components/SocialLinks'; // Import the component


/** @type {import('tailwindcss').Config} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-rose-200 text-red min-h-screen"> {/* Move bg-rose-300 here */}
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            {children}
          </main>
          <SocialLinks /> {/* Add the component here */}
        </div>
      </body>
    </html>
  );
}
