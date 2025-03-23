import Image from "next/image";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold">Hello, I'm <span className="text-blue-500">John Doe</span></h1>
          <p className="text-gray
          -500">I'm a software engineer based in New York City. I specialize in building exceptional digital experiences.</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">Get in touch</button>
        </div>
        <div className="flex flex-col w-1/2">
          <Image src="/profile.jpg" alt="John Doe" width={300} height={300} />
        </div>
      </div>
    </main>

  );
}
