import React from "react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="logo bg-white w-[80vw] left-[10vw]  p-3 rounded-xl sticky top-8 flex justify-between items-center ">
            <div className="flex items-center gap-8">
                <div className="logo flex items-center">
                    <Link href="/">
                        <Image src="/Branchify.png" width={50} height={50} alt="Logo" />
                    </Link>
                    <Link href="/">
                        <h1 className="font-bold text-lg">Branchify</h1>
                    </Link>
                </div>

            </div>
            <div className="flex gap-5 items-center">
                <Link href="https://github.com/Vignesh6236/Branchify.git">
                    <button className="rounded p-2 text-sm">
                        <img className="w-10" src="github.svg" alt="github icon" />
                    </button>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
