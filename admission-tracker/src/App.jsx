import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Login from "./components/Login";
import Execution from "./components/Execution";
import Footer from "./components/Footer";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    const targetDate = useMemo(() => new Date("2025-05-02"), []);

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
                <section>
                    <h2 className="section-title">The Timer</h2>
                    <Timer />
                </section>

                {!isLoggedIn ? (
                    <Login onLogin={() => setIsLoggedIn(true)} />
                ) : (
                    <section>
                        <h2 className="section-title">The Execution</h2>
                        <Execution daysLeft={daysLeft} />
                    </section>
                )}
            </main>
            <Footer name="Nuru" />
        </>
    );
}
