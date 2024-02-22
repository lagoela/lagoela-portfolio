import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen m-0 p-0 bg-zinc-900">
      <Header />
      <main className="h-screen flex flex-col">
        <div className="flex flex-row h-[100%]">
          <div className="flex flex-col justify-center h-[100%] w-[50%]">
            <div className="flex flex-col pl-24">
              <span className="text-white text-[60px] font-space-mono mb-0 pb-0 leading-10">
                Hi, I'm{" "}
                <span className="font-bold text-[65px] bg-gradient-to-r from-purple-800 to-indigo-400 text-transparent bg-clip-text">
                  Enzo!
                </span>
              </span>
              <span className="text-white text-[60px] font-space-mono">
                A Developer
              </span>
              <div className="flex flex-col mt-4">
                <p className="text-zinc-500 text-lg pr-32">
                  I'm a software developer who enjoys coding and building
                  websites.
                </p>
                <p className="text-zinc-500 text-lg pr-32">
                  When I'm not working, you can find me tinkering with cars,
                  soloing on my guitar, or playing video games.
                </p>
                <p className="text-zinc-500 text-lg pr-32">
                  These hobbies keep me balanced and inspired, adding fun to my
                  life outside of work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </main>
    </div>
  );
}
