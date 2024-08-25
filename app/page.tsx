import Image from "next/image";
import { FileUploadDemo } from "./components/upload";
import { InfiniteMovingCardsDemo } from "./components/cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileUploadDemo />
      <InfiniteMovingCardsDemo />
    </main>
  );
}
