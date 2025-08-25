"use client";

import { SignIn, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push("/"); // redirect home if already signed in
        }
    }, [isSignedIn, router]);

    return (
        <main className="flex items-center justify-center min-h-screen">
            <SignIn forceRedirectUrl="/" />
        </main>
    );
}
