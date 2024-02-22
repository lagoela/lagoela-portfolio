import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Linkedin, Github } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between text-white">
      <div className="font-inter flex gap-24 m-1 pl-[6%] p-2 items-center">
        <a className="" href="/">
          home
        </a>
        <a className="" href="/blog">
          blog
        </a>
        <a className="" href="/projects">
          work
        </a>
        <Dialog>
          <DialogTrigger asChild>
            <a className="cursor-pointer">contact</a>
          </DialogTrigger>
          <DialogContent className="bg-zinc-800 border-none text-white">
            <DialogHeader>
              <DialogTitle>Contact</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <div className="flex flex-col gap-4 p-4">
            </div>
            </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-row justify-center items-center gap-16 p-2 pr-20">
        <a href="https://www.linkedin.com/in/enzolagoela" target="_blank">
          <Linkedin />
        </a>
        <a href="https://www.github.com/lagoela" target="_blank">
          <Github />
        </a>
      </div>
    </header>
  );
}
