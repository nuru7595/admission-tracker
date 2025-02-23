import Header from "./components/Header";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Execution from "./components/Execution";

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
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Total</th>
                                    <th>Monthly</th>
                                    <th>Weekly</th>
                                    <th>Daily</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bangla 1st</td>
                                    <td>80 Pages</td>
                                    <td>{`${Math.ceil(80 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(80 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(80 / 67)} Pages`}</td>
                                </tr>
                                <tr>
                                    <td>Bangla 2nd</td>
                                    <td>76 Pages</td>
                                    <td>{`${Math.ceil(76 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(76 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(76 / 67)} Pages`}</td>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>90 Pages</td>
                                    <td>{`${Math.ceil(90 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(90 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(90 / 67)} Pages`}</td>
                                </tr>
                                <tr>
                                    <td>Civics</td>
                                    <td>18 Pages</td>
                                    <td>{`${Math.ceil(18 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(18 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(18 / 67)} Page`}</td>
                                </tr>
                                <tr>
                                    <td>Economics</td>
                                    <td>20 Pages</td>
                                    <td>{`${Math.ceil(20 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(20 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(20 / 67)} Page`}</td>
                                </tr>
                                <tr>
                                    <td>Sociology</td>
                                    <td>14 Pages</td>
                                    <td>{`${Math.ceil(14 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(14 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(14 / 67)} Page`}</td>
                                </tr>
                                <tr>
                                    <td>Psychology</td>
                                    <td>14 Pages</td>
                                    <td>{`${Math.ceil(14 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(14 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(14 / 67)} Page`}</td>
                                </tr>
                                <tr>
                                    <td>GK</td>
                                    <td>50 Pages</td>
                                    <td>{`${Math.ceil(50 / 2)} Pages`}</td>
                                    <td>{`${Math.ceil(50 / 4)} Pages`}</td>
                                    <td>{`${Math.ceil(50 / 67)} Page`}</td>
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
