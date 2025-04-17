import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export function LoginPage() {
  const { setName } = useUser();
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (inputName.trim()) {
      setName(inputName.trim());
      navigate("/dashboardpage");
    }
  }

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-xl lg:max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">EducaOnline</h1>
        <p className="mb-4 text-gray-600">Entre com seu nome para continuar:</p>
        <input
          type="text"
          placeholder="Seu nome"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleLogin}
          className="bg-purple-600 text-white px-4 py-2 rounded-md w-full hover:bg-purple-700 transition"
        >
          Entrar
        </button>
        <button
        className="mt-8 underline text-purple-700"
        onClick={() => navigate("/TeacherLogin")}
      >
        Entrar como professor
      </button>
      </div>

    </div>
  );
}
