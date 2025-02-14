"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    
    <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist text-pink-500 text-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <ul className="list-inside sm:text-xl font-mono">
          <li className="mb-4 text-6xl text-orange-950 font-bold">
            It's Şükriye Öztürk.
          </li>
          <li className="mb-2 text-2xl text-orange-950 font-semibold">
            Welcome to my Portfolio.
          </li>
          <li className="text-xl text-orange-950 ">I am a junior computer science student.</li>
          <li className="text-xl text-orange-950">Also a software developer.</li>
        </ul>
      </main>
      
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex flex-col items-center">
          {/* HideButton to toggle the image */}
          <HideButton toggle={() => setIsVisible(!isVisible)} isVisible={isVisible} />

          {/* Image is only shown if isVisible is true */}
          {isVisible && (
            <Image
              src="/kederli.jpg"
              alt="Hidden Image"
              width={450}
              height={300}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function HideButton({ toggle, isVisible }: { toggle: () => void; isVisible: boolean }) {
  return (
    <button
      onClick={toggle}
      className="opacity-100 transition-opacity px-4 py-2 bg-red-900 text-orange-200 rounded-md hover:opacity-50"
    >
      {isVisible ? "Let's play hide and seek!" : "Where am I?"}
    </button>
  );
}


