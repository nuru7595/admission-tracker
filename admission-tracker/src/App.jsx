import Execution from "./components/Execution";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";

const subjects = [
    { name: "Ban. 1", total: 80 }, { name: "Ban. 2", total: 76 }, { name: "Eng.", total: 90 },
    { name: "Civics", total: 18 }, { name: "Eco.", total: 20 }, { name: "Socio.", total: 14 },
    { name: "Psyc.", total: 14 }, { name: "GK", total: 50 }
];

export default function App() {
    return (
        <>
            <Header text="Admission Tracker" />
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
                                    <th>Total</th>
                                    <th>Monthly</th>
                                    <th>Weekly</th>
                                    <th>Daily</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects.map(({ name, total }) => (
                                    <tr key={name}>
                                        <td>{name}</td>
                                        <td>{total}</td>
                                        <td>{Math.ceil(total / 2)}</td>
                                        <td>{Math.ceil(total / 8)}</td>
                                        <td>{Math.ceil(total / 66)}</td>
                                    </tr>
                                ))}
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
