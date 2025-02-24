import { data } from "../data/data";

export default function Execution() {
    const subjects = {
        b1: { name: "Ban. 1", planned: 80, monthly: 40, weekly: 10, daily: 2 },
        b2: { name: "Ban. 2", planned: 76, monthly: 38, weekly: 9, daily: 2 },
        en: { name: "Eng.", planned: 90, monthly: 45, weekly: 11, daily: 2 },
        cv: { name: "Civics", planned: 18, monthly: 9, weekly: 3, daily: 1 },
        ec: { name: "Eco.", planned: 20, monthly: 10, weekly: 3, daily: 1 },
        sc: { name: "Socio.", planned: 14, monthly: 7, weekly: 2, daily: 1 },
        py: { name: "Phyc.", planned: 14, monthly: 7, weekly: 2, daily: 1 },
        gk: { name: "GK", planned: 50, monthly: 25, weekly: 6, daily: 1 }
    };

    const calculateTotals = (days) => {
        return Object.keys(subjects).reduce((totals, key) => {
            totals[key] = (days ? data.slice(0, days) : data)
                .reduce((sum, entry) => sum + (parseInt(entry[key], 10) || 0), 0);
            return totals;
        }, {});
    };

    const totals = {
        all: calculateTotals(),
        month: calculateTotals(30),
        week: calculateTotals(7),
    };

    const getBgColor = (studied, planned) => studied >= planned ? "bg-green-600" : "bg-red-600";

    return (
        <div className="section-container">
            <table className="w-full text-center text-xs sm:text-base">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Total</th>
                        <th>Monthly</th>
                        <th>Weekly</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(subjects).map(([key, { name, planned, monthly, weekly }]) => (
                        <tr key={key}>
                            <td>{name}</td>
                            <td className={`${getBgColor(totals.all[key], planned)} text-white p-2`}>{totals.all[key]}</td>
                            <td className={`${getBgColor(totals.month[key], monthly)} text-white p-2`}>{totals.month[key]}</td>
                            <td className={`${getBgColor(totals.week[key], weekly)} text-white p-2`}>{totals.week[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.map((x, i) => (
                <table key={i} className="my-3 w-full text-center text-xs sm:text-base">
                    <caption className="font-bold text-xl my-2">{x.id}</caption>
                    <thead>
                        <tr><th>Subject</th><th>Studied</th></tr>
                    </thead>
                    <tbody>
                        {Object.entries(subjects).map(([key, { name, daily }]) => (
                            <tr key={key}>
                                <td>{name}</td>
                                <td className={`${getBgColor(x[key], daily)} text-white p-2`}>
                                    {x[key] || "0"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
