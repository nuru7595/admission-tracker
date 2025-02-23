import Execution from "./components/Execution";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";

export default function App() {
    return (
        <>
            <Header text="Current Single Target" />
            <main className="container">
                <section>
                    <h2 className="section-title">The Timer</h2>
                    <Timer />
                </section>
                <section>
                    <h2 className="section-title">The Plan</h2>
                    <div className="section-container">
                        <table className="w-full text-center text-xs sm:text-base">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Total (Page)</th>
                                    <th>Monthly (Page)</th>
                                    <th>Weekly (Page)</th>
                                    <th>Daily (Page)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ban. 1</td>
                                    <td>80</td>
                                    <td>{Math.ceil(80 / 2)}</td>
                                    <td>{Math.ceil(80 / 8)}</td>
                                    <td>{Math.ceil(80 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Ban. 2</td>
                                    <td>76</td>
                                    <td>{Math.ceil(76 / 2)}</td>
                                    <td>{Math.ceil(76 / 8)}</td>
                                    <td>{Math.ceil(76 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Eng.</td>
                                    <td>90</td>
                                    <td>{Math.ceil(90 / 2)}</td>
                                    <td>{Math.ceil(90 / 8)}</td>
                                    <td>{Math.ceil(90 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Civics</td>
                                    <td>18</td>
                                    <td>{Math.ceil(18 / 2)}</td>
                                    <td>{Math.ceil(18 / 8)}</td>
                                    <td>{Math.ceil(18 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Eco.</td>
                                    <td>20</td>
                                    <td>{Math.ceil(20 / 2)}</td>
                                    <td>{Math.ceil(20 / 8)}</td>
                                    <td>{Math.ceil(20 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Socio.</td>
                                    <td>14</td>
                                    <td>{Math.ceil(14 / 2)}</td>
                                    <td>{Math.ceil(14 / 8)}</td>
                                    <td>{Math.ceil(14 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>Psyc.</td>
                                    <td>14</td>
                                    <td>{Math.ceil(14 / 2)}</td>
                                    <td>{Math.ceil(14 / 8)}</td>
                                    <td>{Math.ceil(14 / 66)}</td>
                                </tr>
                                <tr>
                                    <td>GK</td>
                                    <td>50</td>
                                    <td>{Math.ceil(50 / 2)}</td>
                                    <td>{Math.ceil(50 / 8)}</td>
                                    <td>{Math.ceil(50 / 66)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section>
                    <h2 className="section-title">The Execution</h2>
                    <Execution />
                </section>
            </main>
            <Footer name="Nuru" />
        </>
    );
}
