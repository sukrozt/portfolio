"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-pink-500 text-center">
    
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
      <ol className="list-inside list-decimal text-lg sm:text-xl font-[family-name:var(--font-geist-mono)]">
        <li className="mb-4 text-6xl font-bold">
          Şükriye Öztürk
        </li>
        <li className="mb-2 text-2xl text-pink-500 font-semibold">
          Welcome to my Portfolio.
        </li>
        <li className="text-xl text-pink-500">I am a junior computer science student.</li>
        <li className="text-xl text-pink-500">Also a software developer.</li>
      </ol>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div className="flex flex-col items-center">
      {/* HideButton to toggle the image */}
      <HideButton toggle={() => setIsVisible(!isVisible)} isVisible={isVisible} />

      {/* Image is only shown if isVisible is true */}
      {isVisible && (
        <Image
          src="/baby.jpg"
          alt="Hidden Image"
          width={400}
          height={300}
          className="mt-4"
        />
      )}
    </div>
        <li className="text-xl text-pink-500">Also I love flowers.</li>
      </div>
    </div>
  );
}

function HideButton({ toggle, isVisible}: { toggle: () => void; isVisible: boolean }) {
  return (
    <button
      onClick={toggle}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {isVisible ? "Let's play hide and seek!" : "Where am I?"}
    </button>
  );
}
