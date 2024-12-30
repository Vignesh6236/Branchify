import React from "react";

const Generate = () => {
    return (
        <>
            <div className="bg-green-400 min-h-screen grid grid-cols-2 mt-16 text-gray-800">
                <div className="col1 flex  flex-col justify-center items-center gap-10">
                    <h1 className="font-bold text-4xl">Create your Branch</h1>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-semibold text-xl">Step 1: Claim your Handle</h2>
                        <div className="mx-4">
                        <input className="px-4 py-1 rounded-md focus:outline-green-300" type="text" placeholder="branchify/yourname" />

                        </div>
                        <h2 className="font-semibold text-xl">Step 2: Add your Links</h2>
                        <div className="mx-4 flex gap-4">

                        <input className="px-4 py-1 rounded-md focus:outline-green-300" type="text" placeholder="Enter Title" />
                      
                        <input className="px-4 py-1 rounded-md focus:outline-green-300" type="text" placeholder="Enter URL" />
                        <button className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold border border-black">Add</button>
                        </div>
                        <h2 className="font-semibold text-xl">Step 3: Personalize your Branch</h2>
                        <div className="mx-4 flex flex-col gap-4 ">
                        <input className="px-4 py-1 rounded-md focus:outline-green-300 w-fit" type="text" placeholder="Link your picture" />
 
                        <button className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold w-fit my-5 border border-black">Create Branch</button>
                        </div>
                    </div>
                </div>
                <div className="col2 bg-[rgba(233,192,233,255)]  w-full h-screen flex justify-center items-center">
                    <img
                        className="h-full object-contain"
                        src="/generate.png"
                        alt="generate your links"
                    />
                </div>
            </div>
        </>
    );
};

export default Generate;
