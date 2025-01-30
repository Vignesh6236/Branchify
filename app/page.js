"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <>
      <section className=" h-screen  bg-purple-500 grid  xl:grid-cols-2 ">
        <div className="flex  justify-center flex-col mx-auto w-[90vw] xl:pl-[10vw] gap-12 min-[380px]:gap-20 md:gap-24 text-center xl:text-start  min-[800px]:gap-30  min-[1000px]:gap-36 min-[1500px]:gap-16">
          <div className="flex flex-col gap-2 min-[400px]:gap-4">
            <p className="text-yellow-300 font-bold text-4xl min-[380px]:text-5xl md:text-7xl xl:text-7xl  min-[800px]:text-8xl min-[1500px]:text-7xl ">
              Everything you{" "}
            </p>
            <p className="text-yellow-300 font-bold text-4xl min-[380px]:text-5xl md:text-7xl xl:text-7xl  min-[800px]:text-8xl min-[1500px]:text-7xl ">
              are, in 1{" "}
            </p>
            <p className="text-yellow-300 font-bold text-4xl min-[380px]:text-5xl md:text-7xl xl:text-7xl  min-[800px]:text-8xl min-[1500px]:text-7xl ">
              simple link in{" "}
            </p>
            <p className="text-yellow-300 font-bold text-4xl min-[380px]:text-5xl md:text-7xl xl:text-7xl  min-[800px]:text-8xl min-[1500px]:text-7xl ">
              {" "}
              bio.
            </p>
          </div>
          <p className="text-yellow-300 text-2xl min-[400px]:text-3xl md:text-4xl  min-[800px]:text-5xl min-[1500px]:text-3xl xl:max-w-[40vw] text-wrap">
            One link to help you share everything you create from your
            Instagram, Twitter, Youtube, Patreon and other social media
            profiles.{" "}
          </p>
          <div>
            <div className=" flex flex-col xl:flex-row gap-4 focus:outline-purple-300  min-[380px]:text-xl md:text-2xl min-[1000px]:text-3xl min-[1500px]:text-lg">
              <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="branchify/yourname"
                className="p-2 rounded"
              />

              <button
                onClick={() => createTree()}
                className="bg-yellow-300 p-2 rounded font-semibold disabled:cursor-not-allowed"
                disabled={text.length === 0}
              >
                Claim your Branch
              </button>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center flex-col mr-[10vw]">
          <Image src="/boot.png" height={3200} width={1300} alt="boot.png" />
        </div>
      </section>
    </>
  );
}
