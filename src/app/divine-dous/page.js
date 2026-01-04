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
import { redirect } from "next/navigation";

export default function Page() {
    // This sends the user to the matches page immediately
    redirect("/divine-dous/matches");
    return null;
}
// import Navbar from "@/DivineComponents/Navbar";
// import ProfileCard from "@/DivineComponents/ProfileCard";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function page() {
//     const router = useRouter();
//     useEffect(() => {
//         router.push("/divine-dous/matches");
//     }, []);

//     return <>
    
//     </>;
// }
