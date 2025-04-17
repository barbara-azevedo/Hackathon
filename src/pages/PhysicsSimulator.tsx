import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PhysicsSimulator() {
  const navigate = useNavigate();

  const [mass, setMass] = useState(10); // kg
  const [force, setForce] = useState(0); // N
  const [result, setResult] = useState("");
  const [moved, setMoved] = useState(false);

  const friction = 20; // Força de atrito constante

  const simulate = () => {
    if (force <= friction) {
      setResult("❌ A força aplicada não supera o atrito. A caixa não se move.");
      setMoved(false);
    } else {
      const netForce = force - friction;
      const acceleration = (netForce / mass).toFixed(2);
      setResult(`✅ A caixa se move! Aceleração: ${acceleration} m/s²`);
      setMoved(true);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-300 to-green-300 min-h-screen min-w-screen items-center justify-center place-content-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center justify-center">
        ⚙️ Simulador de Física - Desafio das Forças
      </h2>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
        <label className="flex flex-col">
          Massa do objeto (kg)
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="border p-2 rounded w-48"
          />
        </label>

        <label className="flex flex-col">
          Força aplicada (N)
          <input
            type="number"
            value={force}
            onChange={(e) => setForce(Number(e.target.value))}
            className="border p-2 rounded w-48"
          />
        </label>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 md:mt-6"
          onClick={simulate}
        >
          Aplicar Força
        </button>
      </div>

      <div className="mt-6 text-lg font-medium text-blue-800 text-center">
        {result && <p>{result}</p>}
      </div>

      <div className="mt-6 h-24 border rounded bg-gray-300 relative overflow-hidden">
        <div
          className={`relative top-8 left-5 transition-all duration-2500 ${
            moved ? "translate-x-9/10" : "translate-x-0"
          }`}
        >
          📦
        </div>
      </div>

      <button
        className="mt-8 underline text-white items-center justify-center flex m-auto"
        onClick={() => navigate("/simulador")}
      >
        ← Voltar ao menu
      </button>
    </div>
  );
}
