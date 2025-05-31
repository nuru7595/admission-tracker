import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Execution from "./components/Execution";
import Footer from "./components/Footer";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    const targetDate = useMemo(() => new Date("2025-05-31"), []);

    useEffect(() => {
        const updateDaysLeft = () => {
            const now = new Date();
            const diff = targetDate - now;
            setDaysLeft(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
        };

        updateDaysLeft();
        const interval = setInterval(updateDaysLeft, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>
            <Header text="Admission Tracker" />

            <main className="container">
                <section className="p-3 flex justify-center font-bold">
                    <p>
                        <span className="text-red-600 text-2xl">!! </span>
                        The exam was held on 31 May 2025 from 11:00 AM to 12:00
                        PM
                        <span className="text-red-600 text-2xl"> !!</span>
                    </p>
                </section>

                <Execution
                    daysLeft={daysLeft}
                    isLoggedIn={isLoggedIn}
                    onLogin={() => setIsLoggedIn(true)}
                />
            </main>

            <Footer name="Nuru" />
        </>
    );
}
