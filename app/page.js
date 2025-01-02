"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("branchify/")
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }


  return (
    <>
      <section className=" h-screen  bg-purple-500 grid grid-cols-2">
        <div className="flex  justify-center flex-col ml-[10vw] gap-10 ">
          <div>
            <p className="text-yellow-300 font-bold  text-7xl">
              Everything you{" "}
            </p>
            <p className="text-yellow-300 font-bold  text-7xl">are, in 1 </p>
            <p className="text-yellow-300 font-bold  text-7xl">
              simple link in{" "}
            </p>
            <p className="text-yellow-300 font-bold  text-7xl"> bio.</p>
          </div>
          <p className="text-yellow-300 text-2xl">
            One link to help you share everything you create from your
            Instagram, Twitter, Youtube, Patreon and other social media
            profiles.{" "}
          </p>
          <div>
            <div className=" flex gap-4 focus:outline-purple-300">
              <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="branchify/yourname"
                className="p-2 rounded"
              />

              <button onClick={() => createTree()} className="bg-yellow-300 p-2 rounded font-semibold">
                Claim your Branch
              </button>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <Image src="/boot.png" height={3200} width={1300} alt="boot.png" />
        </div>
      </section>
    </>
  );
}
