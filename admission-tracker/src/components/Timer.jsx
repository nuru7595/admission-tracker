import { useState, useEffect, useMemo } from "react";

const Timer = () => {
    const [time, setTime] = useState({});
    const [animateSec, setAnimateSec] = useState(false);

    const targetDate = useMemo(() => new Date(2025, 4, 31, 11, 0, 0), []);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0)
                return setTime({ h: "00", m: "00", s: "00" });

            const totalHours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
            const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

            setTime((prev) => {
                const newTime = { h: totalHours, m: minutes, s: seconds };
                if (prev.s !== newTime.s) {
                    setAnimateSec(true);
                    setTimeout(() => setAnimateSec(false), 500); // duration of animation
                }
                return JSON.stringify(prev) === JSON.stringify(newTime) ? prev : newTime;
            });
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="!bg-black">
            <h3 className="section-title">Exam Starts In:</h3>
            <div className="flex justify-center items-center flex-col sm:flex-row font-bold gap-8 sm:gap-12 py-10 rounded-md">
                {[
                    { label: "Hours", value: time.h },
                    { label: "Minutes", value: time.m },
                    { label: "Seconds", value: time.s },
                ].map(({ label, value }) => {
                    const isSeconds = label === "Seconds";
                    const animatedClass = isSeconds && animateSec ? "animate-ping text-red-600" : "text-green-600";

                    return (
                        <div key={label} className="flex flex-col items-center">
                            <span className={`text-5xl ${animatedClass}`}>
                                {value}
                            </span>
                            <span>{label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Timer;
