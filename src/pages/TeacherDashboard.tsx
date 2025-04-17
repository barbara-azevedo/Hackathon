import React, { useState } from "react";
import { NavbarProf } from "../components/NavbarProf";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function TeacherDashboard() {
  const navigate = useNavigate();

  const simulations = [
    { title: "🧲 Circuito Elétrico", path: "/dashboard/professor" },
    { title: "🧪 Química Interativa", path: "/dashboard/professor" },
    { title: "⚙️ Desafio de Física", path: "/dashboard/professor" },
  ];

  const allStudentsData = [
    { nome: "Ana", turma: "Turma A", nota: 8.5, tempoMedio: 10, frequencia: 90, dificuldade: 3 },
    { nome: "Carlos", turma: "Turma A", nota: 6.2, tempoMedio: 12, frequencia: 80, dificuldade: 2 },
    { nome: "Fernanda", turma: "Turma A", nota: 5.4, tempoMedio: 15, frequencia: 70, dificuldade: 4 },
    { nome: "João", turma: "Turma B", nota: 7.0, tempoMedio: 14, frequencia: 85, dificuldade: 3 },
    { nome: "Mariana", turma: "Turma B", nota: 9.2, tempoMedio: 9, frequencia: 95, dificuldade: 2 },
    { nome: "Pedro", turma: "Turma B", nota: 4.8, tempoMedio: 20, frequencia: 65, dificuldade: 5 },
    { nome: "Lucas", turma: "Turma C", nota: 9.0, tempoMedio: 8, frequencia: 100, dificuldade: 2 },
    { nome: "Julia", turma: "Turma C", nota: 8.0, tempoMedio: 11, frequencia: 90, dificuldade: 3 },
  ];

  const turmas = ["Turmas", "Turma A", "Turma B", "Turma C"];
  const desempenhoOptions = ["Desempenho", "Abaixo da média", "Na média", "Acima da média"];
  const dificuldadeOptions = ["Simulação", "🧲 Circuito Elétrico", "🧪 Química Interativa", "⚙️ Desafio de Física"];

  const [search, setSearch] = useState("");
  const [selectedTurma, setSelectedTurma] = useState("Turmas");
  const [selectedDesempenho, setSelectedDesempenho] = useState("Desempenho");
  const [selectedDificuldade, setSelectedDificuldade] = useState("Simulação");
  const [selectedTempoMedio, setSelectedTempoMedio] = useState(0);

  const filteredData = allStudentsData.filter((student) => {
    const matchesNome = student.nome.toLowerCase().includes(search.toLowerCase());
    const matchesTurma = selectedTurma === "Turmas" || student.turma === selectedTurma;
    const matchesDesempenho =
      selectedDesempenho === "Desempenho" ||
      (selectedDesempenho === "Abaixo da média" && student.nota < 6) ||
      (selectedDesempenho === "Na média" && student.nota >= 6 && student.nota <= 8) ||
      (selectedDesempenho === "Acima da média" && student.nota > 8);
    const matchesDificuldade =
      selectedDificuldade === "Simulação" || 
      (selectedDificuldade === "🧲 Circuito Elétrico" && student.dificuldade <= 2) ||
      (selectedDificuldade === "🧪 Química Interativa" && student.dificuldade === 3) ||
      (selectedDificuldade === "⚙️ Desafio de Física" && student.dificuldade >= 4);
    const matchesTempoMedio = selectedTempoMedio === 0 || student.tempoMedio <= selectedTempoMedio;

    return (
      matchesNome && 
      matchesTurma && 
      matchesDesempenho && 
      matchesDificuldade && 
      matchesTempoMedio
    );
  });

  const classes = [
    {
      name: "Turma A",
      alunos: ["Ana", "Carlos", "Fernanda"],
    },
    {
      name: "Turma B",
      alunos: ["João", "Mariana", "Pedro"],
    },
    {
      name: "Turma C",
      alunos: ["Lucas", "Julia"],
    },
  ];

  return (
    <div>
      <NavbarProf />
      <div className="p-8 bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen min-w-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Painel do Professor</h1>

        {/* Simulações disponíveis */}
        <section className="mb-10 w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Simulações disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {simulations.map((sim, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(sim.path)}
              >
                <h3 className="text-lg font-medium text-gray-800">{sim.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Filtros */}
        <section className="mb-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Buscar aluno"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 rounded border shadow"
            />
            <select
              value={selectedTurma}
              onChange={(e) => setSelectedTurma(e.target.value)}
              className="p-2 rounded border shadow"
            >
              {turmas.map((turma, i) => (
                <option key={i}>{turma}</option>
              ))}
            </select>
            <select
              value={selectedDesempenho}
              onChange={(e) => setSelectedDesempenho(e.target.value)}
              className="p-2 rounded border shadow"
            >
              {desempenhoOptions.map((op, i) => (
                <option key={i}>{op}</option>
              ))}
            </select>
            <select
              value={selectedDificuldade}
              onChange={(e) => setSelectedDificuldade(e.target.value)}
              className="p-2 rounded border shadow"
            >
              {dificuldadeOptions.map((op, i) => (
                <option key={i}>{op}</option>
              ))}
            </select>
            <select
              value={selectedTempoMedio}
              onChange={(e) => setSelectedTempoMedio(Number(e.target.value))}
              className="p-2 rounded border shadow"
            >
              <option value={0}>Tempo médio (todos)</option>
              <option value={10}>Até 10 min</option>
              <option value={15}>Até 15 min</option>
              <option value={20}>Até 20 min</option>
            </select>
          </div>
        </section>

        {/* Gráfico */}
        <section className="mb-10 w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Estatísticas de desempenho</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <XAxis dataKey="nome" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="nota" fill="#6D28D9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          {filteredData.length === 0 && (
            <p className="mt-4 text-red-700 font-medium">Nenhum dado encontrado com os filtros aplicados.</p>
          )}
        </section>

        {/* Turmas */}
        <section className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Turmas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classes.map((turma, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow border">
                <h3 className="font-semibold text-lg text-purple-700">{turma.name}</h3>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                  {turma.alunos.map((aluno, i) => (
                    <li key={i}>{aluno}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
