import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    image: "/linkedin.png",
    link: "https://www.linkedin.com/in/%C5%9F%C3%BCkriye-%C3%B6zt%C3%BCrk-8a0394225/",
    alt: "LinkedIn Account",
  },
  {
    id: 2,
    name: "GitHub",
    image: "/github.png",
    link: "https://github.com/sukrozt",
    alt: "GitHub Account",
  },
  {
    id: 3,
    name: "E-Mail",
    image: "/mail.png",
    link: "mailto:sukriyeo13@gmail.com",
    alt: "E-Mail Address",
  },
];


export default function Contact() {
  return (
    <div className="flex flex-col items-end justify-start gap-6 text-orange-950 text-xl mt-10 sm:flex-row sm:flex-wrap sm:justify-center">
      {contacts.map((contact) => (
      <div key={contact.id} className="flex flex-col items-center w-60">
        <Link href={contact.link} target="_blank">
        <Image
          src={contact.image}
          alt={contact.name}
          width={50}
          height={50}
          className="opacity-100 transition-opacity hover:opacity-50"
        />  
        </Link>
      </div>
      ))}
    </div>
  );
}