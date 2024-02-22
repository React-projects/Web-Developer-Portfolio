import Hero from "./Components/Main/Hero";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[830px]">
        <Hero />
      </div>
    </main>
  );
}
