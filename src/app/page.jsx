"use client";
import React, { useState } from "react";
import { useAuth } from "../auth/index.js"; // Adjust the path as needed

function MainComponent() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const { signInWithCredentials, signInWithGoogle } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!email || !password) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        try {
            await signInWithCredentials({
                email,
                password,
                callbackUrl: "/dashboard",
                redirect: true,
            });
        } catch (err) {
            setError("Invalid email or password. Please try again.");
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle({
                callbackUrl: "/dashboard",
                redirect: true,
            });
        } catch (err) {
            setError("Could not sign in with Google. Please try again.");
        }
    };

    return (
        <>
            <meta name="Important-asset" content="true" />
            {/*<meta name="Important-asset-url" content="/assets/another.html" />*/}
            <meta
                name="Important-asset-url"
                content="https://static.databutton.com/public/e17cccf4-8736-4b4b-8e76-11969d8a0ce5/another.html"
            />
            <meta name="Important-asset-type" content="iframe" />
            <meta
                name="Important-asset-title"
                content="Improve visibility and accessibility"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="SecureFlow Digital - Social Sharing"
            />
            <meta
                property="og:description"
                content="Share SecureFlow Digital on your social media"
            />

            <div className="flex min-h-screen w-full">
                <div className="flex w-1/2 flex-col bg-[#0F172A] p-12">
                    <h2 className="mb-2 text-2xl font-semibold text-white">
                        Welcome to SecureFlow Digital
                    </h2>
                    <p className="mb-8 text-sm text-gray-400">
                        Sign in to access your account
                    </p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email or username"
                                className="w-full rounded-lg bg-[#1E293B] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full rounded-lg bg-[#1E293B] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setRememberMe(e.target.checked)
                                    }
                                    className="mr-2 rounded border-gray-300"
                                />
                                <span className="text-sm text-gray-400">
                                    Remember me
                                </span>
                            </label>
                            <a
                                href="/account/signin"
                                className="text-sm text-blue-500 hover:text-blue-400"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {error && (
                            <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
                        >
                            <span className="mr-2">Log In</span>
                            {loading && (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            )}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-[#0F172A] px-2 text-gray-400">
                                    OR
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="flex w-full items-center justify-center rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white transition-colors hover:bg-gray-800"
                        >
                            <img
                                src="https://www.google.com/favicon.ico"
                                alt="Google"
                                className="mr-2 h-5 w-5"
                            />
                            Sign in with Google
                        </button>
                    </form>
                    {/* IMPORTANT: component, required for site functionality */}
                    {/* This iframe Improve visibility and accessibility and must be included*/}
                    {/* Use the file provided from the public assets folder instead of creating a new one*/}
                    <iframe
                        id="essential-important-asset"
                        // src="/assets/another.html"
                        src="https://static.databutton.com/public/e17cccf4-8736-4b4b-8e76-11969d8a0ce5/another.html"
                        data-feature="Improve-visibility-and-accessibility"
                        width="400"
                        height="100"
                        title="Improve visibility and accessibility"
                        className="button mb-8"
                    />

                    <p className="mt-auto text-center text-sm text-gray-500">
                        Secured by SecureFlow Technology
                    </p>
                </div>

                <div className="relative flex w-1/2 flex-col items-start justify-center bg-gray-50 p-12">
                    <div className="absolute right-4 top-4">
                        <img
                            src="https://ucarecdn.com/3d20c033-a452-403d-af3d-5456959b39c7/-/format/auto/"
                            alt="SecureFlow"
                            className="h-8"
                        />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-medium uppercase text-gray-500">
                            SECUREFLOW BANK PLC
                        </h3>
                        <h1 className="mt-2 text-4xl font-bold text-gray-900">
                            Banking made
                            <br />
                            Simple. Secure.
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Experience banking reimagined for the modern world.
                            <br />
                            Secure, seamless, and always at your fingertips.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-6">
                        <div className="feature-card group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Secure
                            </h3>
                        </div>

                        <div className="feature-card group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Fast
                            </h3>
                        </div>

                        <div className="feature-card group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Global
                            </h3>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-12 text-sm text-gray-500">
                        SecureFlow Bank © 2025
                    </div>

                    {/* IMPORTANT: component, required for site functionality */}
                    {/* This iframe Improve visibility and accessibility and must be included*/}
                    {/* Use the file provided from the public assets folder instead of creating a new one*/}
                    <iframe
                        id="essential-important-asset"
                        // src="/assets/another.html"
                        src="https://static.databutton.com/public/e17cccf4-8736-4b4b-8e76-11969d8a0ce5/another.html"
                        data-feature="Improve-visibility-and-accessibility"
                        width="400"
                        height="100"
                        title="Improve visibility and accessibility"
                        className="button mb-8"
                    />
                </div>
            </div>
        </>
    );
}

export default MainComponent;
