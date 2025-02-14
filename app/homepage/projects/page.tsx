import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-row items-start justify-start gap-10 text-orange-950 text-xl mt-10">
      {/* Smart Home System */}
      <div className="flex flex-col items-center">
        <Link href="https://github.com/sukrozt/bbm104/tree/main/assignments/as2" target="_blank">
          <Image
            src="/projects/smart home.png"
            alt="Smart Home System"
            width={150}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
          />
        </Link>
        <p className="mt-2 text-center text-lg">A Smart Home System which has adjustable components and with a energy consume calculator. Used all OOP elements.</p>
        <p className="mt-2 text-center text-lg">Language: Java</p>
      </div>

      {/* GRC Software */}
      <div className="flex flex-col items-center">
        <Link href="https://github.com/sukrozt/GRC-Software" target="_blank">
          <Image
            src="/projects/GRC cyber.png"
            alt="GRC Software"
            width={150}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
          />
        </Link>
        <p className="mt-2 text-center text-lg">A GRC Software which applies all cyber security protocols suitable with the companies. Been developing still with NoSQL DBMS, Python language.</p>
      </div>

      {/* Pizza Delivery System */}
      <div className="flex flex-col items-center">
        <Link href="https://github.com/sukrozt/Global-AI-Hub-Bootcamp" target="_blank">
          <Image
            src="/projects/pizza.png"
            alt="Pizza Delivery System"
            width={250}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
          />
        </Link>
        <p className="mt-2 text-center text-lg">A mini pizza delivery system that has ingredients of a pizza. There is an UI for the purchases.</p>
        <p className="mt-2 text-center text-lg">Language: Python</p>
      </div>

      {/* Flappy Game */}
      <div className="flex flex-col items-center">
        <Link href="https://github.com/sukrozt/flappy" target="_blank">
          <Image
            src="/projects/bird.png"
            alt="Flappy Game"
            width={200}
            height={200}
            className="opacity-100 transition-opacity hover:opacity-50"
          />
        </Link>
        <p className="mt-2 text-center text-lg">A mini 2D Unity game which is the endless fly of characters in a map with columns.</p>
        <p className="mt-2 text-center text-lg">Language: C#, Platform: Unity</p>
      </div>
    </div>
  );
}
