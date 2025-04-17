import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ChemistrySimulator() {
  const navigate = useNavigate();

  const substances = ["Água", "Vinagre", "Bicarbonato", "Óleo", "Sal"];
  const reactions: Record<string, string> = {
    "Vinagre+Bicarbonato": "💥 Efervescência! Gás liberado!",
    "Água+Sal": "🧂 Sal dissolvido na água",
    "Água+Óleo": "⚠️ Não se misturam!",
  };

  const [substance1, setSubstance1] = useState("");
  const [substance2, setSubstance2] = useState("");
  const [reaction, setReaction] = useState("");

  const handleMix = () => {
    if (!substance1 || !substance2 || substance1 === substance2) {
      setReaction("❌ Selecione duas substâncias diferentes.");
      return;
    }

    const key1 = `${substance1}+${substance2}`;
    const key2 = `${substance2}+${substance1}`;

    const result = reactions[key1] || reactions[key2] || "🤷‍♀️ Nenhuma reação visível.";
    setReaction(result);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen min-w-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        🧪 Simulador de Química Interativa
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <select
          className="p-2 border rounded w-64"
          value={substance1}
          onChange={(e) => setSubstance1(e.target.value)}
        >
          <option value="">Escolha a 1ª substância</option>
          {substances.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-64"
          value={substance2}
          onChange={(e) => setSubstance2(e.target.value)}
        >
          <option value="">Escolha a 2ª substância</option>
          {substances.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleMix}
        >
          Misturar
        </button>
      </div>

      <div className="mt-6 text-lg text-center font-medium text-purple-800">
        {reaction && <p>{reaction}</p>}
      </div>

      <button
        className="mt-8 underline text-white"
        onClick={() => navigate("/simulador")}
      >
        ← Voltar ao menu
      </button>
    </div>
  );
}
