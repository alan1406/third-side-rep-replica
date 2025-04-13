import { useState } from "react";

export function useAuth() {
    const [user, setUser] = useState(null);

    const signInWithCredentials = async ({
        email,
        password,
        callbackUrl,
        redirect,
    }) => {
        // Simulate an API call for signing in with email and password
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    email === "test@example.com" &&
                    password === "password123"
                ) {
                    setUser({ email });
                    if (redirect) {
                        window.location.href = callbackUrl;
                    }
                    resolve();
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 1000);
        });
    };

    const signInWithGoogle = async ({ callbackUrl, redirect }) => {
        // Simulate an API call for Google sign-in
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true; // Simulate success or failure
                if (success) {
                    setUser({ email: "googleuser@example.com" });
                    if (redirect) {
                        window.location.href = callbackUrl;
                    }
                    resolve();
                } else {
                    reject(new Error("Google sign-in failed"));
                }
            }, 1000);
        });
    };

    return {
        user,
        signInWithCredentials,
        signInWithGoogle,
    };
}
