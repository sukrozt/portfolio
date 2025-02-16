export default function Page() {
    return(
    <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist text-pink-500 text-center">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
      <ul className="list-inside sm:text-xl font-mono">
      <li className="mb-4 text-3xl text-orange-950 font-bold">
        About Me
        </li>
        <li className="mb-4 text-xl text-orange-950 ">
        I am Şükriye Öztürk, a junior Computer Engineering student at 
        Hacettepe University with a passion for software development, 
        data analysis, and digitalization. I have experience in database 
        management (PostgreSQL, MySQL) and have worked on game 
        development projects using Unity. Additionally, I hold a CCNA-1 
        certification, giving me a strong foundation in network systems 
        and security. I am always eager to learn, improve my skills, and 
        contribute to innovative projects. You can check out my work on 
        GitHub and connect with me on LinkedIn through the links in my CV.   
        </li>
        </ul>
        <ol className="list-none sm:text-xl font-mono">
        <li className="mb-4 text-3xl text-orange-950 font-bold">
        Skills
        </li>
        {[
          {
            title: "Programming Languages",
            content: "Python, Java, C++, C#, SQL, Javascript, HTML, CSS, TypeScript"
          },
          {
            title: "Frameworks and Libraries",
            content: "Git, MySQL, PostgreSQL, SymmetricDs, Unity, Next.js, Tailwind, React, clsx"
          },
          {
            title: "Areas of Expertise",
            content: "Network Systems, Cybersecurity, Game Development, Web Development"
          },
          {
            title: "Languages",
            content: "Turkish (Native), English (Advanced), French (Beginner)"
          }
        ].map((item, index) => (
          <li key={index} className="relative before:content-['🌺'] before:absolute before:-left-6 before:top-0 pl-6 mb-4 text-xl text-orange-950 ">
            {item.title}: {item.content}
          </li>
        ))}
        </ol>
        </main>
        </div>
        );
        
    
}