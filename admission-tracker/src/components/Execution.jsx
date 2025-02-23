import { data } from "../data/data";

export default function Execution() {
    return data.map((x, i) => (
        <div key={i} className="section-container">
            <table className="w-full text-center text-xs sm:text-base">
                <caption className="text-xl font-bold mb-1">{x.date}</caption>
                <thead>
                    <th>Subject</th>
                    <th>Monthly (Page)</th>
                    <th>Weekly (Page)</th>
                    <th>Daily (Page)</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Ban. 1</td>
                        <td
                            className={x.mb1 ? "bg-green-600" : "bg-red-600"}
                        >{x.mb1}</td>
                        <td
                            className={x.wb1 ? "bg-green-600" : "bg-red-600"}
                        >{x.wb1}</td>
                        <td
                            className={x.db1 ? "bg-green-600" : "bg-red-600"}
                        >{x.db1}</td>
                    </tr>
                    <tr>
                        <td>Ban. 2</td>
                        <td
                            className={x.mb2 ? "bg-green-600" : "bg-red-600"}
                        >{x.mb2}</td>
                        <td
                            className={x.wb2 ? "bg-green-600" : "bg-red-600"}
                        >{x.wb2}</td>
                        <td
                            className={x.db2 ? "bg-green-600" : "bg-red-600"}
                        >{x.db2}</td>
                    </tr>
                    <tr>
                        <td>Eng.</td>
                        <td
                            className={x.men ? "bg-green-600" : "bg-red-600"}
                        >{x.men}</td>
                        <td
                            className={x.wen ? "bg-green-600" : "bg-red-600"}
                        >{x.wen}</td>
                        <td
                            className={x.den ? "bg-green-600" : "bg-red-600"}
                        >{x.den}</td>
                    </tr>
                    <tr>
                        <td>Civics</td>
                        <td
                            className={x.mc ? "bg-green-600" : "bg-red-600"}
                        >{x.mc}</td>
                        <td
                            className={x.wc ? "bg-green-600" : "bg-red-600"}
                        >{x.wc}</td>
                        <td
                            className={x.dc ? "bg-green-600" : "bg-red-600"}
                        >{x.dc}</td>
                    </tr>
                    <tr>
                        <td>Eco.</td>
                        <td
                            className={x.me ? "bg-green-600" : "bg-red-600"}
                        >{x.me}</td>
                        <td
                            className={x.we ? "bg-green-600" : "bg-red-600"}
                        >{x.we}</td>
                        <td
                            className={x.de ? "bg-green-600" : "bg-red-600"}
                        >{x.de}</td>
                    </tr>
                    <tr>
                        <td>Socio.</td>
                        <td
                            className={x.ms ? "bg-green-600" : "bg-red-600"}
                        >{x.ms}</td>
                        <td
                            className={x.ws ? "bg-green-600" : "bg-red-600"}
                        >{x.ws}</td>
                        <td
                            className={x.ds ? "bg-green-600" : "bg-red-600"}
                        >{x.ds}</td>
                    </tr>
                    <tr>
                        <td>Phyc.</td>
                        <td
                            className={x.mp ? "bg-green-600" : "bg-red-600"}
                        >{x.mp}</td>
                        <td
                            className={x.wp ? "bg-green-600" : "bg-red-600"}
                        >{x.wp}</td>
                        <td
                            className={x.dp ? "bg-green-600" : "bg-red-600"}
                        >{x.dp}</td>
                    </tr>
                    <tr>
                        <td>GK</td>
                        <td
                            className={x.mgk ? "bg-green-600" : "bg-red-600"}
                        >{x.mgk}</td>
                        <td
                            className={x.wgk ? "bg-green-600" : "bg-red-600"}
                        >{x.wgk}</td>
                        <td
                            className={x.dgk ? "bg-green-600" : "bg-red-600"}
                        >{x.dgk}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ));
}
