import { data } from "../data/data";

export default function Execution() {
    const subjects = {
        b1: { name: "Ban. 1", planned: 80, weekly: 16, daily: 3 },
        b2: { name: "Ban. 2", planned: 76, weekly: 15, daily: 3 },
        en: { name: "Eng.", planned: 90, weekly: 18, daily: 3 },
        cv: { name: "Civics", planned: 18, weekly: 4, daily: 1 },
        ec: { name: "Eco.", planned: 20, weekly: 4, daily: 1 },
        sc: { name: "Socio.", planned: 14, weekly: 3, daily: 1 },
        py: { name: "Phyc.", planned: 14, weekly: 3, daily: 1 },
        gk: { name: "GK", planned: 50, weekly: 10, daily: 2 },
    };

    const calculatePagesStudied = (pageString) => {
        if (!pageString) return 0;
        return pageString.split(",").length;
    };

    const calculateTotals = (days) => {
        return Object.keys(subjects).reduce((totals, key) => {
            totals[key] = (days ? data.slice(0, days) : data).reduce(
                (sum, entry) => sum + calculatePagesStudied(entry[key]),
                0
            );
            return totals;
        }, {});
    };

    const totals = {
        all: calculateTotals(),
        week: calculateTotals(7),
    };

    const getBgColor = (studied, planned) =>
        studied >= planned ? "bg-green-600" : "bg-red-600";

    return (
        <div className="section-container">
            <table className="w-full text-center text-xs sm:text-base">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Total</th>
                        <th>Weekly</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(subjects).map(
                        ([key, { name, planned, weekly }]) => (
                            <tr key={key}>
                                <td>{name}</td>
                                <td
                                    className={`${getBgColor(
                                        totals.all[key],
                                        planned
                                    )} text-white p-2`}
                                >
                                    {totals.all[key]}
                                </td>
                                <td
                                    className={`${getBgColor(
                                        totals.week[key],
                                        weekly
                                    )} text-white p-2`}
                                >
                                    {totals.week[key]}
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            {data.map((x, i) => (
                <table
                    key={i}
                    className="my-3 w-full text-center text-xs sm:text-base table-fixed"
                >
                    <caption className="font-bold text-xl my-2">{x.id}</caption>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Pages Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(subjects)
                            .filter(([key]) => x[key])
                            .map(([key, { name, daily }]) => (
                                <tr key={key}>
                                    <td>{name}</td>
                                    <td
                                        className={`${getBgColor(
                                            calculatePagesStudied(x[key]),
                                            daily
                                        )} text-white p-2`}
                                    >
                                        {x[key]}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
