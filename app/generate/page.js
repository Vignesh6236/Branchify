"use client"
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Dynamically import the Generate Client Component
const Generate = dynamic(() => import("./GenerateClient"), { ssr: false });

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Generate />
        </Suspense>
    );
}
