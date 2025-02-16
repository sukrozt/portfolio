import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Smart Home System",
    image: "/projects/smart home.png",
    link: "https://github.com/sukrozt/bbm104/tree/main/assignments/as2",
    description:
      "A Smart Home System which has adjustable components and with an energy consume calculator. Used all OOP elements.",
    language: "Java",
  },
  {
    id: 2,
    name: "GRC Software",
    image: "/projects/GRC cyber.png",
    link: "https://github.com/sukrozt/GRC-Software",
    description:
      "A GRC Software which applies all cyber security protocols suitable with the companies. Still in development with NoSQL DBMS, Python.",
    language: "Python",
  },
  {
    id: 3,
    name: "Pizza Delivery System",
    image: "/projects/pizza.png",
    link: "https://github.com/sukrozt/Global-AI-Hub-Bootcamp",
    description:
      "A mini pizza delivery system that has ingredients of a pizza. There is an UI for the purchases.",
    language: "Python",
  },
  {
    id: 4,
    name: "Flappy Game",
    image: "/projects/bird.png",
    link: "https://github.com/sukrozt/flappy",
    description:
      "A mini 2D Unity game which is the endless fly of characters in a map with columns.",
    language: "C#, Platform: Unity",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto flex flex-row items-start justify-start gap-10 text-orange-950 text-xl mt-10">
      {projects.map((project) => (
        <div key = {project.id} className="flex flex-col items-center w-60">
          <Link href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={project.name}
              width={200}
              height={180}
              className="opacity-100 transition-opacity hover:opacity-50"
            />
          </Link>
          <p className="mt-2 text-center text-lg">{project.description}</p>
          {project.language &&
          (<p className="mt-2 text-center text-lg">
            Language: {project.language}</p>
            )}
        </div>
      ))}
    </div>
  );
}
