// import Navbar from '@/DivineComponents/Navbar'
// import ProfileCard from '@/DivineComponents/ProfileCard'
// import React from 'react'

// export default function page() {
//   return (
//     <>

//     </>
//   )
// }

"use client";
import Navbar from "@/DivineComponents/Navbar";
import ProfileCard from "@/DivineComponents/ProfileCard";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
    const router = useRouter();
    useEffect(() => {
        router.push("/divine-dous/matches");
    }, []);

    return <>
    
    </>;
}
