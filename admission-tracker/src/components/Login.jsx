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
            <p className="border-y-2 border-red-600 rounded-lg p-1 text-center mb-3 text-red-600">
                Unknown Device !!
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
                    Submit
                </button>
            </form>
        </div>
    );
}
