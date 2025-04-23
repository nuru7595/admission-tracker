import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Execution from "./components/Execution";
import Footer from "./components/Footer";
import Preparation from "./components/Preparation";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    const targetDate = useMemo(() => new Date("2025-05-23"), []);

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
                <Timer />

                <Preparation />

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
