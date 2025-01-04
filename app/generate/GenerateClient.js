"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const Generate = () => {
    const searchParams = useSearchParams();
    const [links, setLinks] = useState([{ link: "", linktext: "" }]);
    const [handle, setHandle] = useState(searchParams.get("handle"));
    const [pic, setPic] = useState("");
    const [desc, setDesc] = useState("");

    const handleChange = (index, link, linktext) => {
        setLinks((prevLinks) => {
            return prevLinks.map((item, i) => {
                if (i === index) {
                    return { link, linktext };
                }
                return item;
            });
        });
    };

    const addLink = () => {
        setLinks([...links, { link: "", linktext: "" }]);
    };

    const submitLinks = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                links,
                handle,
                pic,
                desc,
            }),
        };

        try {
            const res = await fetch("http://localhost:3000/api/add", requestOptions);
            const result = await res.json();

            if (result.success) {
                toast.success(result.message);
                setLinks([]);
                setHandle("");
                setPic("");
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-green-400 min-h-screen grid grid-cols-2 mt-16 text-gray-800">
            <div className="col1 flex flex-col justify-center items-center gap-10">
                <h1 className="font-bold text-4xl">Create your Branch</h1>
                <div className="flex flex-col gap-5">
                    <h2 className="font-semibold text-xl">Step 1: Claim your Handle</h2>
                    <div className="mx-4">
                        <input
                            value={handle || ""}
                            onChange={(e) => setHandle(e.target.value)}
                            className="px-4 py-1 rounded-md focus:outline-green-300"
                            type="text"
                            placeholder="branchify/yourname"
                        />
                    </div>
                    <h2 className="font-semibold text-xl">Step 2: Add your Links</h2>
                    {links.map((item, index) => (
                        <div key={index} className="mx-4 flex gap-4">
                            <input
                                value={item.linktext || ""}
                                onChange={(e) => handleChange(index, item.link, e.target.value)}
                                className="px-4 py-1 rounded-md focus:outline-green-300"
                                type="text"
                                placeholder="Enter Title"
                            />
                            <input
                                value={item.link || ""}
                                onChange={(e) => handleChange(index, e.target.value, item.linktext)}
                                className="px-4 py-1 rounded-md focus:outline-green-300"
                                type="text"
                                placeholder="Enter URL"
                            />
                        </div>
                    ))}
                    <button
                        onClick={addLink}
                        className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold border border-black w-fit mx-4"
                    >
                        + Add Link
                    </button>
                    <h2 className="font-semibold text-xl">Step 3: Personalize your Branch</h2>
                    <div className="mx-4 flex flex-col gap-4">
                        <input
                            value={pic || ""}
                            onChange={(e) => setPic(e.target.value)}
                            className="px-4 py-1 rounded-md focus:outline-green-300 w-fit"
                            type="text"
                            placeholder="Link your picture"
                        />
                        <input
                            value={desc || ""}
                            onChange={(e) => setDesc(e.target.value)}
                            className="px-4 py-1 rounded-md focus:outline-green-300 w-fit"
                            type="text"
                            placeholder="Add a description"
                        />
                        <button
                            disabled={!pic || !handle || !links[0].linktext}
                            onClick={submitLinks}
                            className="bg-[rgba(233,192,233,255)] px-4 py-1 rounded-md font-semibold w-fit my-5 border border-black"
                        >
                            Create Branch
                        </button>
                    </div>
                </div>
            </div>
            <div className="col2 bg-[rgba(233,192,233,255)] w-full h-full flex justify-center">
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
    );
};

export default Generate;
