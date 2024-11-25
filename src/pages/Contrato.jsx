import { useState, useRef } from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dados do formulário:
Nome: ${formData.nome}
CPF: ${formData.cpf}
Email: ${formData.email}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <SectionArea>
        <SectionWrapper>
          <div className="flex flex-col items-center w-full max-w-md space-y-4">
            {/* Caixa de Termos */}
            <div
              ref={termosRef}
              onScroll={handleScroll}
              className="w-full h-64 p-4 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md"
            >
              <p>
                Insira aqui os termos de serviço que o usuário deve aceitar.
              </p>
              <p>Role até o fim para ativar o checkbox de aceitação.</p>
              {Array(50)
                .fill("Mais termos...")
                .map((term, index) => (
                  <p key={index}>{term}</p>
                ))}
            </div>

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
                Eu aceito os termos
              </label>
            </div>

            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              className="w-full p-4 space-y-4 bg-white border border-gray-300 rounded-md"
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
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
