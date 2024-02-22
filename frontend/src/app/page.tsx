import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen m-0">
      <Header />
    </div>
  );
}
