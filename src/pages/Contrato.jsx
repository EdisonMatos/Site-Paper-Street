import { useState, useRef } from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import textoContrato from "../content/textoContrato";

export default function Contrato() {
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
  });
  const termosRef = useRef(null);

  const handleScroll = () => {
    if (termosRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = termosRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setIsScrolledToEnd(true);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obter data e hora atual
    const currentDateTime = new Date().toLocaleString();

    // Obter IP público do cliente
    let clientIp = "Não disponível";
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      clientIp = data.ip;
      console.log(data);
    } catch (error) {
      console.error("Erro ao obter o IP:", error);
    }

    // Exibir dados
    alert(`Dados do formulário:
Nome: ${formData.nome}
CPF: ${formData.cpf}
Email: ${formData.email}
Data e Hora: ${currentDateTime}
IP do Cliente: ${clientIp}`);
  };

  const contrato = (
    <div
      ref={termosRef}
      onScroll={handleScroll}
      className="w-full h-[350px] p-4 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md"
    >
      {/* Conteúdo dos Termos */}
      {textoContrato}
    </div>
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <SectionArea>
        <SectionWrapper>
          <p className="mb-[20px] text-center">
            <strong> CONTRATO DE SERVIÇO DIGITAL </strong>
            <br />
            Leia os termos até o final para poder aceitar o contrato.
          </p>
          <div className="flex flex-col items-center w-full space-y-4">
            {/* Caixa de Termos */}
            {contrato}
            {/* Checkbox de Aceitação */}
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                id="accept"
                disabled={!isScrolledToEnd}
                checked={isAccepted}
                onChange={(e) => setIsAccepted(e.target.checked)}
                className="w-5 h-5 mr-2 text-blue-500 border-gray-300 rounded disabled:opacity-50"
              />
              <label
                htmlFor="accept"
                className={`text-gray-700 ${
                  !isScrolledToEnd ? "opacity-50" : ""
                }`}
              >
                Li e aceito os termos.
              </label>
            </div>

            {/* Formulário */}
            {isAccepted && (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-4 space-y-4 bg-white border border-gray-300 rounded-md"
              >
                <div>
                  <label className="block text-gray-700">Nome:</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">CPF:</label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isAccepted}
                  className={`w-full p-2 rounded-md text-white font-semibold transition-all ${
                    isAccepted
                      ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
