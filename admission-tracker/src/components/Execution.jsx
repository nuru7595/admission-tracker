import { data } from "../data/data";

export default function Execution({ daysLeft }) {
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

    const getPagesCount = (pages) =>
        pages?.split(",").filter((x) => x.trim() !== "").length || 0;

    // Calculate total pages read
    const totalRead = Object.keys(subjects).reduce((acc, key) => {
        acc[key] = data.reduce((sum, entry) => sum + getPagesCount(entry[key]), 0);
        return acc;
    }, {});

    // Calculate total planned pages
    const totalPlanned = Object.values(subjects).reduce((sum, { planned }) => sum + planned, 0);

    // Calculate percentage progress
    const totalReadSum = Object.values(totalRead).reduce((sum, read) => sum + read, 0);
    const progressPercentage = Math.min(
        Math.round((totalReadSum / totalPlanned) * 100),
        100
    );

    const getBg = (read, target) =>
        read >= target ? "bg-green-600" : "bg-red-600";

    return (
        <div className="section-container">
            {/* Summary Table */}
            <table className="w-full text-center text-xs sm:text-base mb-4">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Total Read / Planned</th>
                        <th>Daily Target</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(subjects).map(([key, { name, planned }]) => {
                        const read = totalRead[key];
                        const remaining = Math.max(0, planned - read);
                        const dynamicDaily = Math.ceil(remaining / (daysLeft || 1));

                        return (
                            <tr key={key}>
                                <td>{name}</td>
                                <td className={`${getBg(read, planned)} text-white p-2`}>
                                    {read} / {planned}
                                </td>
                                <td>{dynamicDaily}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
                <div
                    className="bg-green-600 h-full text-xs text-center text-white rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                >
                    {progressPercentage}%
                </div>
            </div>

            {/* Daily Breakdown Table */}
            {data.map((entry, index) => (
                <table
                    key={index}
                    className="my-3 w-full text-center text-xs sm:text-base table-fixed"
                >
                    <caption className="font-bold text-xl my-2">{entry.id}</caption>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Pages Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(subjects)
                            .filter(([key]) => entry[key])
                            .map(([key, { name, planned }]) => {
                                const pagesRead = getPagesCount(entry[key]);
                                const remaining = Math.max(0, planned - totalRead[key]);
                                const dynamicDaily = Math.ceil(remaining / (daysLeft || 1));

                                return (
                                    <tr key={key}>
                                        <td>{name}</td>
                                        <td className={`${getBg(pagesRead, dynamicDaily)} text-white p-2`}>
                                            {entry[key]}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
