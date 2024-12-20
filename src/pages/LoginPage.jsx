import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username) {
            navigate("/home"); // Navigate to Home page on sucessful Login.
        } else {
            setError("Please enter both username and password");
        }
    };

    return (
        <div className="bg-[#001423] h-screen flex items-center justify-center p-6">
            <div className="bg-[#8b5c29] p-8 rounded-lg shadow-2xl w-full max-w-sm text-[#ffe1ba]">
                <h1 className="text-3xl font-bold text-center mb-4 text-[#ffe1ba]">
                    Good Morning App
                </h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-lg font-semibold mb-2 text-[#ffe1ba]"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-3 bg-[#0066b1] text-[#ffe1ba] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#fff773] text-lg"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#fff773] text-[#001423] rounded-md text-xl font-semibold hover:bg-[#ffe1ba] transition duration-300">
                            Login
                        </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-[#ffe1ba]">
                        Don't have an account? <a href="#" className="text-[#0066b1]">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;