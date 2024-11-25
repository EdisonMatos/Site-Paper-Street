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

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <SectionArea>
        <SectionWrapper>
          <p className="mb-[20px]">
            Leia o contrato até o final para poder aceitar
          </p>
          <div className="flex flex-col items-center w-full max-w-md space-y-4">
            {/* Caixa de Termos */}
            <div
              ref={termosRef}
              onScroll={handleScroll}
              className="w-full h-64 p-4 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md"
            >
              {/* Conteúdo dos Termos */}
              <h2 class="text-2xl font-bold text-left mb-6">
                CONTRATO DE DESENVOLVIMENTO E MANUTENÇÃO DE WEBSITE POR
                ASSINATURA PROMOCIONAL
              </h2>

              <p class="mb-4">
                Pelo presente instrumento particular, as partes:
              </p>

              <p class="font-semibold">
                CONTRATANTE: [NOME], [CPF/CNPJ], [EMAIL], doravante denominada
                como CONTRATANTE.
              </p>
              <p class="font-semibold">
                CONTRATADA: PAPER STREET SOFTWARES E MARKETING DIGITAL LTDA ME,
                CNPJ: 54.143.106/0001-73, contato@paperstreet.com.br, situada no
                CAM 41, 18 - Hernani Sá - Ilhéus - BA, CEP 45656572, neste ato
                representada por Edison Pinto de Matos, CPF: 032.868.825-85,
                doravante denominada CONTRATADA.
              </p>

              <p class="mt-4">
                Têm entre si justo e contratado o seguinte, com base nas
                cláusulas e condições abaixo:
              </p>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 1 - OBJETO DO CONTRATO
              </h3>
              <p class="mb-4">
                O presente contrato tem por objeto a prestação, pela CONTRATADA
                à CONTRATANTE, dos seguintes serviços:
              </p>
              <ul class="list-disc ml-8">
                <li>
                  <strong>Serviço:</strong> Desenvolvimento de página para
                  internet
                </li>
                <li>
                  <strong>Quantidade:</strong> 1 Página Institucional de
                  Advogado / Escritório de Advocacia
                </li>
                <li>
                  <strong>Valor:</strong> R$ 89,00 mensais
                </li>
                <li>
                  <strong>Forma:</strong> Assinatura mensal
                </li>
                <li>
                  <strong>Vencimento:</strong> Todo dia 25 de cada mês (de
                  acordo com a data de assinatura)
                </li>
                <li>
                  <strong>Layout:</strong> Baseado em modelo previamente
                  apresentado
                </li>
                <li>
                  <strong>Manutenção:</strong> Gratuita uma vez por mês, para
                  substituição de textos e fotos
                </li>
                <li>
                  <strong>Domínio:</strong> Fornecido o 1º ano pela CONTRATADA
                </li>
              </ul>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 2 - DAS OBRIGAÇÕES DAS PARTES
              </h3>
              <p class="mb-4">
                Desenvolvimento de Website: A CONTRATADA desenvolverá uma ou
                mais páginas para a internet (vide quantidade constante na
                cláusula 1), que devem ser acessíveis por meio de um navegador
                de internet, tanto em computadores como em dispositivos móveis
                como celulares e tablets.
              </p>

              <p class="mb-4">
                Promoção de domínio grátis pelo 1º ano: A CONTRATADA terá
                propriedade do domínio fornecido e concederá o uso para a
                CONTRATANTE durante o primeiro ano, ou, enquanto o presente
                contrato estiver vigente caso seja encerrado antes do primeiro
                ano. Findado o primeiro ano, a posse do domínio será transferida
                para a CONTRATANTE, que será a responsável pelo custo de
                registro deste ponto em diante.
              </p>

              <p class="mb-4">
                Emails Profissionais: A CONTRATADA criará e disponibilizará
                acesso de até 5 emails profissionais, com a extensão do domínio
                escolhido pela CONTRATANTE, durante o período que o contrato
                estiver vigente.
              </p>

              <p class="mb-4">
                Hospedagem do Website: A CONTRATADA fará a hospedagem do site e
                email em servidores de terceiros de alta confiabilidade, sendo
                escolhidas para isso, as maiores empresas do ramo no território
                nacional. A empresa escolhida para hospedagem ficará a cargo da
                CONTRATADA.
              </p>

              <p class="mb-4">
                Manutenção Mensal: Se solicitada, a CONTRATADA realizará, uma
                vez por mês, atualização no conteúdo do site (troca de textos e
                imagens) sem custo adicional, com prazo de entrega de até 3 dias
                úteis.
              </p>

              <p class="mb-4">
                Informações necessárias: A CONTRATANTE deve fornecer todos os
                textos, imagens e demais materiais e informações solicitadas
                para o desenvolvimento do site e registro do domínio. Em caso de
                necessidade de edição ou manipulação de imagem ou de logomarca,
                será necessário um orçamento separado uma vez que este serviço
                não é da área de Desenvolvimento de Páginas para Internet. A
                CONTRATADA não se responsabiliza pelas informações apresentadas
                no site.
              </p>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 3 - DO PROCESSO DE ENTREGA DO SITE
              </h3>
              <ul class="list-decimal ml-8 mb-4">
                <li>
                  <strong>Coleta de informações:</strong> Em até 2 dias úteis
                  após a assinatura, a CONTRATADA entrará em contato para
                  solicitar as informações da CONTRATANTE.
                </li>
                <li>
                  <strong>Desenvolvimento e aprovação:</strong> Após a
                  CONTRATANTE fornecer todas as informações solicitadas,
                  iniciará o prazo de 3 dias úteis para que a CONTRATADA
                  apresente a prévia do site.
                </li>
                <li>
                  <strong>Escolha do nome (domínio):</strong> A CONTRATADA
                  solicitará o nome do domínio desejado pela CONTRATANTE e
                  buscará por disponibilidade no órgão de registro.
                </li>
                <li>
                  <strong>Entrega do site no ar:</strong> Após definido o
                  domínio, a CONTRATADA tem até 2 dias úteis para entregar o
                  site no ar.
                </li>
              </ul>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 4 - DO PAGAMENTO E REAJUSTE
              </h3>
              <ul class="list-disc ml-8 mb-4">
                <li>
                  <strong>Valor dos Serviços:</strong> A CONTRATANTE pagará à
                  CONTRATADA o valor descrito na cláusula 1, sendo este valor
                  reajustado anualmente, exclusivamente para correção da
                  inflação, conforme índice IPCA.
                </li>
                <li>
                  <strong>Forma de Pagamento:</strong> O pagamento deverá ser
                  realizado até a data especificada como vencimento na cláusula
                  1, por meio de boleto bancário, chave Pix 54143106000173
                  (CNPJ) em nome da CONTRATADA, cartão de crédito ou outra forma
                  de pagamento acordada entre as partes.
                </li>
              </ul>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 5 - DO MODELO E MODIFICAÇÕES
              </h3>
              <ul class="list-disc ml-8 mb-4">
                <li>
                  <strong>Aceite de modelo:</strong> O site será desenvolvido de
                  acordo com modelo(s) previamente enviado e aprovado pela
                  CONTRATANTE.
                </li>
                <li>
                  <strong>Modificações Estruturais:</strong> Caso seja
                  solicitado criação de seção nova, será feita uma avaliação de
                  viabilidade.
                </li>
              </ul>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 6 - LIMITAÇÕES DE RESPONSABILIDADE
              </h3>
              <p class="mb-4">
                A CONTRATADA garante o funcionamento adequado do website nos
                principais navegadores e dispositivos atuais. No entanto,
                adaptações ou otimizações futuras para novas tecnologias ou
                mudanças nos navegadores não estão inclusas neste contrato.
              </p>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 7 - PRAZO E CONDIÇÕES DE RESCISÃO
              </h3>
              <ul class="list-decimal ml-8 mb-4">
                <li>
                  <strong>Vigência:</strong> O presente contrato entra em vigor
                  na data de sua assinatura e tem duração por tempo
                  indeterminado.
                </li>
                <li>
                  <strong>Rescisão por Inadimplência:</strong> O não pagamento
                  implicará na suspensão dos serviços após 15 dias corridos.
                </li>
              </ul>

              <h3 class="text-xl font-semibold mt-6 mb-2">
                CLÁUSULA 8 - FORO E DISPOSIÇÕES FINAIS
              </h3>
              <p class="mb-4">
                Fica eleito o foro da comarca de São Bernardo do Campo - SP, com
                renúncia expressa de qualquer outro, por mais privilegiado que
                seja, para dirimir quaisquer controvérsias oriundas deste
                contrato.
              </p>
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
