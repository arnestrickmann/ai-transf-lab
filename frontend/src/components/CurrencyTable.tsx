import { useEffect, useState } from "react";

interface Currency { currency: string; normalizedRate: number; }

export default function CurrencyTable() {
  const [rates, setRates] = useState<Currency[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/convert")
      .then(r => r.json())
      .then(data => setRates(data.data));
  }, []);

  return (
    <div className="w-full max-w-md bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Currency Rates</h2>
      <table className="table-auto w-full">
        <thead><tr><th>Currency</th><th>Rate</th></tr></thead>
        <tbody>
          {rates.map((r,i)=>(
            <tr key={i} className="text-gray-700">
              <td className="border px-2 py-1">{r.currency}</td>
              <td className="border px-2 py-1">{r.normalizedRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
