import { useState, useEffect } from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        months: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const [totalDays, setTotalDays] = useState(0); // Add totalDays to state

    useEffect(() => {
        const targetDate = new Date("2025-05-02T00:00:00");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    months: "00",
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                setTotalDays(0); // Reset totalDays when time's up
                return;
            }

            // Calculate time left
            const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(
                (difference % (1000 * 60 * 60 * 24 * 30)) /
                    (1000 * 60 * 60 * 24)
            );
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update time left
            setTimeLeft({
                months: String(months).padStart(2, "0"),
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });

            // Update totalDays
            setTotalDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section-container text-center">
            <h4>
                Exam Date:{" "}
                <span className="text-green-600 font-bold">03 May 2025</span>{" "}
                Saturday
            </h4>
            <h4>
                Off Day:{" "}
                <span className="text-green-600 font-bold">02 May 2025</span>{" "}
                Friday
            </h4>
            <h2 className="mt-4 font-bold">Times Left:</h2>
            <div className="flex justify-center items-center flex-col sm:flex-row sm:space-x-6 font-bold bg-black rounded-xl py-2">
                <div className="flex flex-col items-center">
                    <span className="text-4xl text-green-600">
                        {timeLeft.months}
                    </span>
                    <span>Months</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl text-green-600">
                        {timeLeft.days}
                    </span>
                    <span>Days</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl text-green-600">
                        {timeLeft.hours}
                    </span>
                    <span>Hours</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl text-green-600">
                        {timeLeft.minutes}
                    </span>
                    <span>Minutes</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl text-green-600">
                        {timeLeft.seconds}
                    </span>
                    <span>Seconds</span>
                </div>
            </div>
            <h2 className="font-bold mt-4">
                Total: <span className="text-green-600">{totalDays}</span> Days
            </h2>
        </div>
    );
};

export default Timer;
