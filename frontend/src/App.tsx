import CurrencyTable from "./components/CurrencyTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Agentic Integration Hub</h1>
      <CurrencyTable />
    </div>
  );
}
