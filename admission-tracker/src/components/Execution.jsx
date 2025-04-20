import { data } from "../data/data";
import Login from "./Login";

const subjects = {
  b1: ["Ban. 1", 61], b2: ["Ban. 2", 95], en: ["Eng.", 90],
  cv: ["Civics", 18], ec: ["Eco.", 20], sc: ["Socio.", 14],
  py: ["Psyc.", 14], gk: ["GK", 50],
};

const getPages = (val) => val?.split(",").map(x => x.trim()).filter(Boolean) || [];

const analyzeData = () => {
  const totalRead = {}, totalRevision = {};
  Object.keys(subjects).forEach((key) => {
    const counts = {};
    data.forEach(entry => getPages(entry[key]).forEach(p => counts[p] = (counts[p] || 0) + 1));
    totalRead[key] = Object.keys(counts).length;
    totalRevision[key] = Object.values(counts).reduce((a, c) => a + (c > 1 ? c - 1 : 0), 0);
  });
  return [totalRead, totalRevision];
};

const Execution = ({ daysLeft, isLoggedIn, onLogin }) => {
  const [totalRead, totalRevision] = analyzeData();
  const totalPlanned = Object.values(subjects).reduce((sum, [_, planned]) => sum + planned, 0);
  const totalReadSum = Object.values(totalRead).reduce((a, b) => a + b, 0);
  const totalRevSum = Object.values(totalRevision).reduce((a, b) => a + b, 0);

  const percent = (val) => Math.min(Math.round((val / totalPlanned) * 100), 100);
  const getBg = (val, target) => val >= target ? "bg-green-600" : "bg-red-600";

  return (
    <section>
      <h3 className="section-title !border-b-0">The Execution</h3>

      <div className="space-y-2 text-center">
        {/* Reading Progress */}
        <div>
          {/* <div className="text-sm mb-1">Reading Progress</div> */}
          <div className="w-full bg-white h-4 overflow-hidden">
            <div
              className="bg-green-600 h-full text-xs font-bold text-center text-white"
              style={{ width: `${percent(totalReadSum)}%` }}
            >
              {percent(totalReadSum)}%
            </div>
          </div>
        </div>

        {/* Revision Progress (conditionally shown) */}
        {totalRevSum > 0 && (
          <div>
            <div className="text-sm mb-1">Revision Progress</div>
            <div className="w-full bg-white h-4 overflow-hidden">
              <div
                className="bg-green-600 h-full text-xs font-bold text-center text-white"
                style={{ width: `${percent(totalRevSum)}%` }}
              >
                {percent(totalRevSum)}%
              </div>
            </div>
          </div>
        )}
      </div>

      {!isLoggedIn ? <Login onLogin={onLogin} /> : (
        <div className="section-container p-2 sm:p-4 mt-1">
          <div className="overflow-x-auto">
            <table className="min-w-full text-center text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="p-2">Subject</th>
                  <th className="p-2">Read / Planned</th>
                  <th className="p-2">Revisions / Planned</th>
                  <th className="p-2">Daily Target</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(subjects).map(([key, [name, planned]]) => {
                  const read = totalRead[key], rev = totalRevision[key];
                  const daily = Math.ceil(Math.max(0, planned - read) / (daysLeft || 1));
                  return (
                    <tr key={key}>
                      <td className="p-2">{name}</td>
                      <td className={`${getBg(read, planned)} text-white p-2`}>{read} / {planned}</td>
                      <td className={`${getBg(rev, planned)} text-white p-2`}>{rev} / {planned}</td>
                      <td className="p-2">{daily}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {data.map((entry, idx) => (
            <div key={idx} className="overflow-x-auto my-4">
              <table className="min-w-full text-center text-sm sm:text-base table-fixed">
                <caption className="font-bold text-base sm:text-xl my-2">{entry.id}</caption>
                <thead>
                  <tr><th className="p-2">Subject</th><th className="p-2">Pages Read</th></tr>
                </thead>
                <tbody>
                  {Object.entries(subjects).filter(([key]) => entry[key]).map(([key, [name, planned]]) => {
                    const count = getPages(entry[key]).length;
                    const remain = Math.max(0, planned - totalRead[key]);
                    const daily = Math.ceil(remain / (daysLeft || 1));
                    return (
                      <tr key={key}>
                        <td className="p-2">{name}</td>
                        <td className={`${count >= daily ? "bg-green-600" : "bg-red-600"} text-white p-2`}>
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
};

export default Execution;