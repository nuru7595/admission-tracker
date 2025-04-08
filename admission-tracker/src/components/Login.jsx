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
        <section>
            <h2 className="section-title">Login</h2>
            <form
                onSubmit={handleLogin}
                className="section-container"
            >
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password . . ."
                    className="w-full block border border-white rounded-lg p-2 bg-black outline-none text-center"
                    required
                />
                <button
                    type="submit"
                    className="w-full block border border-white rounded-lg p-2 bg-black mt-3 cursor-pointer select-none"
                >
                    Login
                </button>
            </form>
        </section>
    );
}