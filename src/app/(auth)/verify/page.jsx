"use client";
import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import notify from "@/helpers/notify";

// This page is used to verify user email from token
export function VerifyPage() {
    const [token, setToken] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const searchParams = useSearchParams();
    const urlToken = searchParams.get("token");

    useEffect(() => {
        setToken(urlToken);
    }, [urlToken]);

    const verifyUserEmail = async () => {
        try {
            if (!token) {
                throw new Error("Token is missing");
            }
            const response = await axios.post("/api/users/verify", {
                token,
            });
            if (response && response.status === 200) {
                notify("Your email is verified", "success");
                router.push("/login");
            }
        } catch (error) {
            setError(true);
            notify(error.response.data.error, "error");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-4">
                Please click following btton to verify your email
            </h1>
            <button
                className="p-2 bg-red-400 text-white rounded w-40"
                onClick={verifyUserEmail}
            >
                Verify
            </button>
            {error && (
                <div className="mt-4">
                    <h2 className="text-2xl text-red-400">
                        Error verifying your account
                    </h2>
                </div>
            )}
        </div>
    );
}

export default function page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <VerifyPage />
        </Suspense>
    );
}
