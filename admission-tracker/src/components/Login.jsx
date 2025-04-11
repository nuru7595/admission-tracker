import { useState } from "react";

export default function Login({ onLogin }) {
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === "secretplan") {
            localStorage.setItem("loggedIn", "true");
            onLogin();
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <div className="section-container">
            <p className="text-center text-green-600 mb-3">
                🔒 Please log in to see the full execution breakdown.
            </p>
            <form onSubmit={handleLogin}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password . . ."
                    className="w-full block border-y-2 border-white rounded-lg p-1 outline-none text-center"
                    required
                />
                <button
                    type="submit"
                    className="w-full block border-y-2 border-white rounded-lg p-1 mt-3 cursor-pointer select-none"
                >
                    Log In
                </button>
            </form>
        </div>
    );
}
