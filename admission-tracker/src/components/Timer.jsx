import { useState, useEffect, useMemo } from "react";

const Timer = () => {
    const [time, setTime] = useState({});
    const targetDate = useMemo(() => new Date("2025-05-02"), []);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0)
                return setTime({ d: "00", h: "00", m: "00", s: "00" });

            const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
                2,
                "0"
            );
            const h = String(
                Math.floor((diff / (1000 * 60 * 60)) % 24)
            ).padStart(2, "0");
            const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
                2,
                "0"
            );
            const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

            setTime((prev) => {
                const newTime = { d, h, m, s };
                return JSON.stringify(prev) === JSON.stringify(newTime)
                    ? prev
                    : newTime;
            });
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="section-container text-center space-y-3">
            <div className="flex justify-center items-center flex-col sm:flex-row font-bold gap-4 sm:gap-6 bg-black py-3 rounded-md">
                {[
                    { label: "Days", value: time.d },
                    { label: "Hours", value: time.h },
                    { label: "Minutes", value: time.m },
                    { label: "Seconds", value: time.s },
                ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col items-center">
                        <span className="text-4xl text-green-600">{value}</span>
                        <span>{label}</span>
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
