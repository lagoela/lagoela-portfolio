import { Header } from "@/app/components/header";

export default function firstPost() {
  return (
    <div className="h-screen flex flex-col m-0 p-0">
      <Header />
      <main className="mx-24 lg:mx-72">
        <article>
          <div className="flex flex-col text-white items-start mt-12 pb-2 border-zinc-500">
            <p className="text-zinc-400 pt-2">January 1, 2024</p>
            <h1 className="font-bold text-7xl font-space-mono">First Post</h1>
          </div>
          <div className="lg:border-t-[1px] border-zinc-500 lg:grid lg:grid-cols-4 pt-4 space-y-2 lg:space-x-6 lg:space-y-0">
            <div className="flex flex-row items-center gap-4">
              <img
                src="/enzo-cropped-bgs.jpg"
                alt="Enzo Lagoela"
                className="w-[48px] min-w-[48px] h-[48px] min-h-[48px] m-0 rounded-full object-cover"
              />
              <div className="">
              <p className="text-white text-lg lg:col-span-1 text-center">Enzo Lagoela</p>
              <p className="text-zinc-400 text-xs lg:col-span-1 text-center">Software Developer</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nisl ac tincidunt ultrices, velit nunc tincidunt nunc,
                nec tincidunt nisl nunc id nunc. Sed auctor, mauris id aliquet
                tincidunt, velit nunc tincidunt nunc, nec tincidunt nisl nunc id
                nunc. Sed auctor, mauris id aliquet tincidunt, velit nunc
                tincidunt nunc, nec tincidunt nisl nunc id nunc. Sed auctor,
                mauris id aliquet tincidunt, velit nunc tincidunt nunc, nec
                tincidunt nisl nunc id nunc. Sed auctor, mauris id aliquet
                tincidunt, velit nunc tincidunt nunc, nec tincidunt nisl nunc id
                nunc.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
