import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-end justify-start min-h-screen gap-6 text-orange-950 text-xl">
      {}
      <div className="flex items-end gap-2">
      <h1 className="mb-2 text-2xl text-orange-950 font-bold">
      Contact me:
        </h1>
        <Link href="mailto:sukriyeo13@gmail.com" className="mb-2 text-2xl text-orange-950 font-semibold  hover:text-orange-800">
        sukriyeo13@gmail.com
        </Link>
      </div>
    </div>
  );
}
