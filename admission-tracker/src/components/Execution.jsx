import { data } from "../data/data";
import Login from "./Login";

export default function Execution({ daysLeft, isLoggedIn, onLogin }) {
    const subjects = {
        b1: { name: "Ban. 1", planned: 80 },
        b2: { name: "Ban. 2", planned: 76 },
        en: { name: "Eng.", planned: 90 },
        cv: { name: "Civics", planned: 18 },
        ec: { name: "Eco.", planned: 20 },
        sc: { name: "Socio.", planned: 14 },
        py: { name: "Psyc.", planned: 14 },
        gk: { name: "GK", planned: 50 },
    };

    const getPageArray = (pages) =>
        pages
            ?.split(",")
            .map((x) => x.trim())
            .filter((x) => x !== "") || [];

    const totalRead = {};
    const totalRevision = {};

    Object.keys(subjects).forEach((key) => {
        const pageCount = {};
        data.forEach((entry) => {
            getPageArray(entry[key]).forEach((page) => {
                pageCount[page] = (pageCount[page] || 0) + 1;
            });
        });

        totalRead[key] = Object.keys(pageCount).length;
        totalRevision[key] = Object.values(pageCount)
            .filter((count) => count > 1)
            .reduce((sum, count) => sum + (count - 1), 0);
    });

    const totalPlanned = Object.values(subjects).reduce(
        (sum, { planned }) => sum + planned,
        0
    );
    const totalReadSum = Object.values(totalRead).reduce(
        (sum, read) => sum + read,
        0
    );
    const progressPercentage = Math.min(
        Math.round((totalReadSum / totalPlanned) * 100),
        100
    );

    const getBg = (read, target) =>
        read >= target ? "bg-green-600" : "bg-red-600";

    return (
        <section>
            <h2 className="section-title !border-b-0">The Execution</h2>
            {/* Progress Bar */}
            <div className="w-full bg-white h-4 overflow-hidden">
                <div
                    className="bg-green-600 h-full text-xs font-bold text-center text-white"
                    style={{ width: `${progressPercentage}%` }}
                >
                    {progressPercentage}%
                </div>
            </div>

            {!isLoggedIn ? (
                <Login onLogin={onLogin} />
            ) : (
                <div className="section-container p-2 sm:p-4 mt-1">
                    {/* Summary Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center text-sm sm:text-base">
                            <thead>
                                <tr>
                                    <th className="p-2">Subject</th>
                                    <th className="p-2">Read / Planned</th>
                                    <th className="p-2">Revisions</th>
                                    <th className="p-2">Daily Target</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(subjects).map(
                                    ([key, { name, planned }]) => {
                                        const read = totalRead[key];
                                        const revision = totalRevision[key];
                                        const remaining = Math.max(
                                            0,
                                            planned - read
                                        );
                                        const dynamicDaily = Math.ceil(
                                            remaining / (daysLeft || 1)
                                        );

                                        return (
                                            <tr key={key}>
                                                <td className="p-2">{name}</td>
                                                <td
                                                    className={`${getBg(
                                                        read,
                                                        planned
                                                    )} text-white p-2`}
                                                >
                                                    {read} / {planned}
                                                </td>
                                                <td className="p-2">
                                                    {revision}
                                                </td>
                                                <td className="p-2">
                                                    {dynamicDaily}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Daily Breakdown */}
                    {data.map((entry, index) => (
                        <div key={index} className="overflow-x-auto my-4">
                            <table className="min-w-full text-center text-sm sm:text-base table-fixed">
                                <caption className="font-bold text-base sm:text-xl my-2">
                                    {entry.id}
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="p-2">Subject</th>
                                        <th className="p-2">Pages Read</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(subjects)
                                        .filter(([key]) => entry[key])
                                        .map(([key, { name, planned }]) => {
                                            const pagesRead = getPageArray(
                                                entry[key]
                                            ).length;
                                            const remaining = Math.max(
                                                0,
                                                planned - totalRead[key]
                                            );
                                            const dynamicDaily = Math.ceil(
                                                remaining / (daysLeft || 1)
                                            );

                                            return (
                                                <tr key={key}>
                                                    <td className="p-2">
                                                        {name}
                                                    </td>
                                                    <td
                                                        className={`${getBg(
                                                            pagesRead,
                                                            dynamicDaily
                                                        )} text-white p-2`}
                                                    >
                                                        {entry[key]}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
