"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
    const [links, setLinks] = useState([{ link: "", linkText: "" }]);
    const [handle, sethandle] = useState("");
    const [pic, setpic] = useState("");

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext };
                } else {
                    return item;
                }
            });
        });
    };

    const addLink = () => {
        setLinks(links.concat([{ link: "", linkText: "" }]));
    };

    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            links: links,
            handle: handle,
            pic: pic,
        });

        console.log(raw);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions);
        const result = await r.json();
        toast(result.message);
    };

    return (
        <>
            <div className="bg-green-400 min-h-screen grid grid-cols-2 mt-16 text-gray-800">
                <div className="col1 flex  flex-col justify-center items-center gap-10">
                    <h1 className="font-bold text-4xl">Create your Branch</h1>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-semibold text-xl">Step 1: Claim your Handle</h2>
                        <div className="mx-4">
                            <input
                                value={handle || ""}
                                onChange={(e) => {
                                    sethandle(e.target.value);
                                }}
                                className="px-4 py-1 rounded-md focus:outline-green-300"
                                type="text"
                                placeholder="branchify/yourname"
                            />
                        </div>
                        <h2 className="font-semibold text-xl">Step 2: Add your Links</h2>
                        {links &&
                            links.map((item, index) => {
                                return (
                                    <div key={index} className="mx-4 flex gap-4">
                                        <input
                                            value={item.linktext || ""}
                                            onChange={(e) => {
                                                handleChange(index, item.link, e.target.value);
                                            }}
                                            className="px-4 py-1 rounded-md focus:outline-green-300"
                                            type="text"
                                            placeholder="Enter Title"
                                        />

                                        <input
                                            value={item.link || ""}
                                            onChange={(e) => {
                                                handleChange(index, e.target.value, item.linktext);
                                            }}
                                            className="px-4 py-1 rounded-md focus:outline-green-300"
                                            type="text"
                                            placeholder="Enter URL"
                                        />
                                    </div>
                                );
                            })}
                        <button
                            onClick={() => addLink()}
                            className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold border border-black w-fit mx-4"
                        >
                            + Add Link
                        </button>
                        <h2 className="font-semibold text-xl">
                            Step 3: Personalize your Branch
                        </h2>
                        <div className="mx-4 flex flex-col gap-4 ">
                            <input
                                value={pic || ""}
                                onChange={(e) => {
                                    setpic(e.target.value);
                                }}
                                className="px-4 py-1 rounded-md focus:outline-green-300 w-fit"
                                type="text"
                                placeholder="Link your picture"
                            />

                            <button
                                onClick={() => {
                                    submitLinks();
                                }}
                                className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold w-fit my-5 border border-black"
                            >
                                Create Branch
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col2 bg-[rgba(233,192,233,255)]  w-full h-full flex justify-center ">
                    <img
                        className="h-screen object-contain"
                        src="/generate.png"
                        alt="generate your links"
                    />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            </div>
        </>
    );
};

export default Generate;
