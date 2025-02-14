import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-end justify-start gap-6 text-orange-950 text-xl mt-10">
      {/* LinkedIn */}
      <div className="flex items-center gap-2n">
        <Link href="https://www.linkedin.com/in/%C5%9F%C3%BCkriye-%C3%B6zt%C3%BCrk-8a0394225/" target="_blank">
          <Image
            src="/linkedin.png"
            alt="LinkedIn Account"
            width={50}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
            />
        </Link>
      </div>

      {/* GitHub */}
      <div className="flex items-center gap-2">
        <Link href="https://github.com/sukrozt" target="_blank">
          <Image
            src="/github.png"
            alt="GitHub Account"
            width={50}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
            />
        </Link>
      </div>

      {/* E-Mail */}
      <div className="flex items-center gap-2">
        <Link href="mailto:sukriyeo13@gmail.com">
          <Image
            src="/mail.png"
            alt="E-Mail Address"
            width={50}
            height={50}
            className="opacity-100 transition-opacity hover:opacity-50"
            />
        </Link>
      </div>
    </div>
  );
}
