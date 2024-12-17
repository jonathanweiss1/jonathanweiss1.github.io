import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary items-center justify-between">
      <div className="mt-20 md:w-2/3 w-5/6 text-primary bg-white rounded md:p-16 p-10 grid grid-cols-1 md:grid-cols-3">
      <div className="text-9xl md:order-last mb-16 md:mb-0 text-center">🚧</div>
      <div className="col-span-2 flex-col">
        <h1 className="text-5xl font-bold">Hi! My website is currently under construction.</h1>
        <h2 className="text-lg mt-2">Contact me here: jonathanweiss@posteo.de</h2>
      </div>
      </div>
    </main>
  );
}
