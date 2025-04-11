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
                    <h3 className="section-title">The Timer</h3>
                    <Timer />
                </section>

                <section>
                    <h3 className="section-title">Exam Essentials</h3>
                    <div className="section-container">
                        <p>
                            1.{" "}
                            <span className="font-bold text-green-600">
                                Admit Card
                            </span>{" "}
                            (You will get it 7 days before the exam.)
                        </p>
                        <p>
                            2. HSC{" "}
                            <span className="font-bold text-green-600">
                                Registration Card
                            </span>
                        </p>
                        <p>
                            3. Up to 3-4 Black{" "}
                            <span className="font-bold text-green-600">
                                Ballpoint Pens
                            </span>
                        </p>
                        <p>
                            4. A Scientific{" "}
                            <span className="font-bold text-green-600">
                                Calculator
                            </span>{" "}
                            (Optional)
                        </p>
                    </div>

                    <h3 className="section-title">Times to Notice</h3>
                    <div className="section-container">
                        <p>
                            1. Get Ready By:{" "}
                            <span className="font-bold text-green-600">
                                8:00 AM
                            </span>
                        </p>
                        <p>
                            2. Start Your Journey:{" "}
                            <span className="font-bold text-green-600">
                                9:00 AM
                            </span>
                        </p>
                        <p>
                            3. Be Seated By:{" "}
                            <span className="font-bold text-green-600">
                                10:30 AM
                            </span>
                        </p>
                        <p>
                            4. Exam Time:{" "}
                            <span className="font-bold text-green-600">
                                11:00 AM – 12:00 PM
                            </span>
                        </p>
                    </div>
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
