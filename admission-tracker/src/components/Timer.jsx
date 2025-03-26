import { useState, useEffect, useMemo } from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const targetDate = useMemo(() => new Date("2025-05-02T00:00:00"), []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft((prev) => {
                const newTime = {
                    days: String(days).padStart(2, "0"),
                    hours: String(hours).padStart(2, "0"),
                    minutes: String(minutes).padStart(2, "0"),
                    seconds: String(seconds).padStart(2, "0"),
                };
                return JSON.stringify(prev) === JSON.stringify(newTime)
                    ? prev
                    : newTime;
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="section-container text-center space-y-3">
            <div className="flex justify-center items-center flex-col sm:flex-row font-bold gap-4 sm:gap-6 bg-black py-3 rounded-md">
                {Object.entries(timeLeft).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <span className="text-4xl text-green-600">{value}</span>
                        <span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                    </div>
                ))}
            </div>
            <h4>
                Off Day:{" "}
                <span className="text-green-600 font-bold">02 May 2025</span>{" "}
                Friday
            </h4>
            <h4>
                Exam Date:{" "}
                <span className="text-green-600 font-bold">03 May 2025</span>{" "}
                Saturday
            </h4>
        </div>
    );
};

export default Timer;
