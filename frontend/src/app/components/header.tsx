export function Header() {
    return (
        <header className="sticky top-0 flex justify-around items-center border-b-[1px] border-zinc-700">
        <h1 className="text-3xl font-bold p-2">Lagoela</h1>
        <div className="font-inter flex gap-2 m-1 p-2 items-center">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
        </div>
        </header>
    );
}