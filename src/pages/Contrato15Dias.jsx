import { useState, useRef } from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import textoContrato15Dias from "../content/textoContrato15Dias";
import emailjs from "@emailjs/browser";
import ReactDOMServer from "react-dom/server";
import { useNavigate } from "react-router-dom";

export default function Contrato15Dias() {
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
  });
  const termosRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (termosRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = termosRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setIsScrolledToEnd(true);
      }
    }
  };

  // Função para formatar CPF
  const formatCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for número
    if (cpf.length <= 3) return cpf;
    if (cpf.length <= 6) return cpf.replace(/(\d{3})(\d{1,})/, "$1.$2");
    if (cpf.length <= 9)
      return cpf.replace(/(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3-$4");
  };

  // Função para formatar CNPJ
  const formatCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/\D/g, ""); // Remove tudo que não for número
    // Aplica a formatação gradativa conforme o comprimento
    if (cnpj.length <= 2) return cnpj; // Até 2 dígitos: sem formatação
    if (cnpj.length <= 5) return cnpj.replace(/(\d{2})(\d{1,})/, "$1.$2"); // 3-5 dígitos
    if (cnpj.length <= 8)
      return cnpj.replace(/(\d{2})(\d{3})(\d{1,})/, "$1.$2.$3"); // 6-8 dígitos
    if (cnpj.length <= 12)
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3/$4"); // 9-12 dígitos

    // Formato completo após 12 dígitos
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,})/,
      "$1.$2.$3/$4-$5"
    );
  };
  //Constante para validar cpf & cnpj
  const isValidCPF = (cpf) => {
    const cleanedCPF = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedCPF.length === 11;
  };

  const isValidCNPJ = (cnpj) => {
    const cleanedCNPJ = cnpj.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedCNPJ.length === 14;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      let formattedValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos

      // Se o número de dígitos for 11 (CPF), formate como CPF
      if (formattedValue.length <= 11) {
        // Se o número de dígitos for 11 ou menos, formate como CPF
        formattedValue = formatCPF(formattedValue);
      } else {
        // Se o número de dígitos for mais de 11, formate como CNPJ
        formattedValue = formatCNPJ(formattedValue);
      }

      setFormData((prevState) => ({
        ...prevState,
        cpf: formattedValue, // Atualiza o campo com o valor formatado
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedCPF = formData.cpf.replace(/\D/g, ""); // Remove a formatação

    // Validações específicas
    if (cleanedCPF.length === 11) {
      if (!isValidCPF(formData.cpf)) {
        alert("CPF inválido!");
        return;
      }
    } else if (cleanedCPF.length === 14) {
      if (!isValidCNPJ(formData.cpf)) {
        alert("CNPJ inválido!");
        return;
      }
    } else {
      alert("CPF ou CNPJ incompleto!");
      return;
    }

    // Obter data e hora atual
    const currentDateTime = new Date().toLocaleString();

    setIsSubmitting(true); // Atualiza o estado para 'Enviando...'

    // Obter IP público do cliente
    let clientIp = "Não disponível";
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      clientIp = data.ip;
      console.log("IP do cliente:", clientIp);
    } catch (error) {
      console.error("Erro ao obter o IP:", error);
    }
    //Primeiro converte o jsx em string html
    const contratoHtml = ReactDOMServer.renderToStaticMarkup(contratoTeste);

    // Segundo, remove as tags HTML para pegar apenas o texto
    const contratoTextoSemTags = contratoHtml
      .replace(/<\/?h[1-6]>/g, "\n\n") // Quebras para títulos (h1, h2, etc.)
      .replace(/<\/?p>/g, "\n") // Quebras para parágrafos (p)
      .replace(/<br\s*\/?>/g, "") // Quebras para <br> tags
      .replace(/<\/?strong>/g, "") // Remove <strong>, mas mantém o texto
      .replace(/<[^>]+>/g, ""); // Remove qualquer outra tag restante

    console.log("Contrato sem tags HTML:", contratoTextoSemTags);

    // Definir os parâmetros para o envio do email
    const templateParams = {
      to_name: formData.nome,
      nome: formData.nome,
      cpf: formData.cpf,
      email: formData.email,
      currentDateTime: currentDateTime,
      clientIp: clientIp,
      contrato: contratoTextoSemTags,
      to_email: `${formData.email}, seuemail@exemplo.com`,
    };

    // Enviar o e-mail usando o EmailJS
    const response = await emailjs.send(
      "service_uf0dao9", // ID do seu serviço
      "template_qlytqdl", // ID do seu template
      templateParams,
      "EYzqc9Ig48Qet4LTh" // Sua chave pública
    );
    console.log(
      "Mensagem enviada com sucesso:",
      response.status,
      response.text
    );

    // Exibir dados no console ou alert
    alert(`
      Termos assinados com sucesso!
      Resumo:
      Nome: ${formData.nome}
      CPF: ${formData.cpf}
      Email: ${formData.email}
      Data e Hora: ${currentDateTime}
      IP do Cliente: ${clientIp}
      \n
      Texto concordado: Será enviada uma cópia dos termos para o email preenchido.
      \n
      Seja bem vindo à Paper Street! 
      Essa página já pode ser fechada.
      Você será redirecionado para o nosso site. Até mais!
    `);
    navigate("/"); //Redireciona novamente a página principal
  };

  const contratoTeste = textoContrato15Dias;

  const contrato = (
    <div
      ref={termosRef}
      onScroll={handleScroll}
      className="w-full max-h-[350px] p-4 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md"
    >
      {/* Conteúdo dos Termos */}
      {textoContrato15Dias}
    </div>
  );
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-50">
      <SectionArea>
        <SectionWrapper className="absolute top-[10%] flex justify-center h-auto pb-8">
          <p className="mb-[20px] text-center">
            <strong> CONTRATO DE SERVIÇO DIGITAL</strong>
            <br />
            Visualize os termos até o final para poder aceitá-los.
            <br />
            Versão 1.0.3 - Última modificação: 26/11/2024, 10:54h.
          </p>
          <div className="flex flex-col items-center w-full space-y-4 ">
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
                className="w-5 h-5 mr-2 text-blue-500 border-gray-300 rounded cursor-pointer disabled:opacity-50"
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
                className="w-full max-w-md p-4 space-y-4 bg-white border border-gray-300 rounded-md relative bottom-[-80%]"
              >
                <div>
                  <label className="block text-gray-700">
                    Nome ou Razão Social:
                  </label>
                  <input
                    type="text"
                    name="nome"
                    minLength={5}
                    value={formData.nome}
                    onChange={(e) => {
                      const regex = /^[A-Za-zÀ-ÿ\s\-']*$/; // Expressão regular que permite letras, espaços, acentos, hífens e apóstrofos
                      if (regex.test(e.target.value) || e.target.value === "") {
                        const value = e.target.value;
                        // Capitaliza a primeira letra de cada palavra
                        const updatedValue = value
                          .toLowerCase() // Converte todo o texto para minúsculas
                          .split(" ") // Divide o texto em palavras
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          ) // Capitaliza a primeira letra de cada palavra
                          .join(" "); // Junta as palavras de volta com espaços
                        handleChange({
                          target: { name: e.target.name, value: updatedValue },
                        });
                      }
                    }}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">CPF ou CNPJ:</label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf || ""}
                    onChange={handleChange}
                    maxLength={18}
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
                  disabled={!isAccepted || isSubmitting}
                  className={`w-full p-2 rounded-md text-white font-semibold transition-all ${
                    isAccepted
                      ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
