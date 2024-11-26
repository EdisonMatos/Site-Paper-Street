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

  const contrato = (
    <div
      ref={termosRef}
      onScroll={handleScroll}
      className="w-full h-[350px] p-4 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md"
    >
      {/* Conteúdo dos Termos */}
      <h1>
        CONTRATO DE DESENVOLVIMENTO E MANUTENÇÃO DE WEBSITE POR ASSINATURA
      </h1>
      <h2>PROMOCIONAL COM 1º ANO DE DOMÍNIO GRÁTIS</h2>

      <p>Pelo presente instrumento particular, as partes:</p>

      <h3>CONTRATANTE:</h3>
      <p>[NOME], [CPF/CNPJ], [EMAIL], doravante denominada como CONTRATANTE.</p>

      <h3>CONTRATADA:</h3>
      <p>
        PAPER STREET SOFTWARES E MARKETING DIGITAL LTDA ME, CNPJ:
        54.143.106/0001-73,
        <a href="mailto:contato@paperstreet.com.br">
          contato@paperstreet.com.br
        </a>
        , situada no CAM 41, 18 - Hernani Sá - Ilhéus - BA, CEP 45656572, neste
        ato representada por Edison Pinto de Matos, CPF: 032.868.825-85,
        doravante denominada CONTRATADA.
      </p>

      <p>
        Têm entre si justo e contratado o seguinte, com base nas cláusulas e
        condições abaixo:
      </p>

      <h2>CLÁUSULA 1 - OBJETO DO CONTRATO</h2>
      <p>
        O presente contrato tem por objeto a prestação, pela CONTRATADA à
        CONTRATANTE, dos seguintes serviços:
      </p>
      <ul>
        <li>Serviço: Desenvolvimento de página para internet</li>
        <li>
          Quantidade: 1 Página Institucional de Advogado / Escritório de
          Advocacia
        </li>
        <li>Valor: R$ 89,00 mensais</li>
        <li>Forma: Assinatura mensal</li>
        <li>
          Vencimento: Todo dia 25 de cada mês (de acordo com a data de
          assinatura)
        </li>
        <li>Layout: Baseado em modelo previamente apresentado</li>
        <li>
          Manutenção: Gratuita uma vez por mês, para substituição de textos e
          fotos
        </li>
        <li>Domínio: Fornecido o 1º ano pela CONTRATADA</li>
      </ul>

      <h2>CLÁUSULA 2 - DAS OBRIGAÇÕES DAS PARTES</h2>
      <ol>
        <li>
          <strong>Desenvolvimento de Website:</strong>A CONTRATADA desenvolverá
          uma ou mais páginas para a internet (vide quantidade constante na
          cláusula 1), que devem ser acessíveis por meio de um navegador de
          internet, tanto em computadores como em dispositivos móveis como
          celulares e tablets.
        </li>
        <li>
          <strong>Promoção de domínio grátis pelo 1º ano:</strong>A CONTRATADA
          terá propriedade do domínio fornecido e concederá o uso para a
          CONTRATANTE durante o primeiro ano, ou, enquanto o presente contrato
          estiver vigente caso seja encerrado antes do primeiro ano. Findado o
          primeiro ano, a posse do domínio será transferida para a CONTRATANTE,
          que será a responsável pelo custo de registro deste ponto em diante.
          Caso a CONTRATANTE deseje que a propriedade continue sendo da
          CONTRATADA após o primeiro ano, ela deverá arcar com os custos do
          registro que será informado pela CONTRATADA no momento de renovação.
          <p>
            <em>Parágrafo único:</em> Caso a CONTRATANTE deseje obter a
            propriedade do domínio no período anterior ao primeiro ano, ou em
            caso de rescisão deste contrato, deve solicitar orçamento à
            CONTRATADA para tal aquisição.
          </p>
        </li>
        <li>
          <strong>Emails Profissionais:</strong>A CONTRATADA criará e
          disponibilizará acesso de até 5 emails profissionais, com a extensão
          do domínio escolhido pela CONTRATANTE, durante o período que o
          contrato estiver vigente.
        </li>
        <li>
          <strong>Hospedagem do Website:</strong>A CONTRATADA fará a hospedagem
          do site e email em servidores de terceiros de alta confiabilidade,
          sendo escolhidas para isso, as maiores empresas do ramo no território
          nacional. A empresa escolhida para hospedagem ficará a cargo da
          CONTRATADA.
        </li>
        <li>
          <strong>Manutenção Mensal:</strong>
          Se solicitada, a CONTRATADA realizará, uma vez por mês, atualização no
          conteúdo do site (troca de textos e imagens) sem custo adicional, com
          prazo de entrega de até 3 dias úteis. Mudanças que alterem a estrutura
          do site ou criação de seções novas ou novas funcionalidades serão
          avaliadas e poderão ser cobradas separadamente e o prazo será
          informado após análise da complexidade.
        </li>
        <li>
          <strong>Informações necessárias:</strong>A CONTRATANTE deve fornecer
          todos os textos, imagens e demais materiais e informações solicitadas
          para o desenvolvimento do site e registro do domínio. Em caso de
          necessidade de edição ou manipulação de imagem ou de logomarca, será
          necessário um orçamento separado uma vez que este serviço não é da
          área de Desenvolvimento de Páginas para Internet. A CONTRATADA não se
          responsabiliza pelas informações apresentadas no site.
        </li>
      </ol>
      <h2>CLÁUSULA 3 - DO PROCESSO DE ENTREGA DO SITE</h2>
      <ol>
        <li>
          <strong>Coleta de informações:</strong>
          Em até 2 dias úteis após a assinatura, a CONTRATADA entrará em contato
          para solicitar as informações da CONTRATANTE.
        </li>
        <li>
          <strong>Desenvolvimento e aprovação:</strong>
          Após a CONTRATANTE fornecer todas as informações solicitadas, iniciará
          o prazo de 3 dias úteis para que a CONTRATADA apresente a prévia do
          site através de um link provisório que a CONTRATANTE conseguirá
          acessar. Se forem solicitadas alterações, um novo prazo será acordado,
          baseado nas alterações solicitadas.
        </li>
        <li>
          <strong>Escolha do nome (domínio):</strong>
          Assim que a prévia for aceita pela CONTRATANTE, a CONTRATADA irá
          solicitar o nome do domínio desejado pela CONTRATANTE e buscará por
          disponibilidade no órgão de registro.
        </li>
        <li>
          <strong>Entrega do site no ar:</strong>
          Após definido o domínio, a CONTRATADA tem até 2 dias úteis para
          entregar o site no ar, através do envio do link para acesso ao site já
          no domínio escolhido pelo cliente e as credenciais para pelo menos uma
          conta de email criada para a CONTRATANTE, configurando assim o serviço
          do desenvolvimento do site como entregue.
        </li>
      </ol>

      <h2>CLÁUSULA 4 - DO PAGAMENTO E REAJUSTE</h2>
      <ol>
        <li>
          <strong>Valor dos Serviços:</strong>A CONTRATANTE pagará à CONTRATADA
          o valor descrito na cláusula 1, sendo este valor reajustado
          anualmente, exclusivamente para correção da inflação, conforme índice
          IPCA.
        </li>
        <li>
          <strong>Forma de Pagamento:</strong>O pagamento deverá ser realizado
          até a data especificada como vencimento na cláusula 1, por meio de
          boleto bancário, chave Pix <strong>54143106000173</strong> (CNPJ) em
          nome da CONTRATADA, cartão de crédito ou outra forma de pagamento
          acordada entre as partes.
        </li>
      </ol>

      <h2>CLÁUSULA 5 - DO MODELO E MODIFICAÇÕES</h2>
      <ol>
        <li>
          <strong>Aceite de modelo:</strong>O site será desenvolvido de acordo
          com modelo(s) previamente enviado e aprovado pela CONTRATANTE. Serão
          substituídas imagens, textos e cores, para atender às preferências da
          CONTRATANTE. A assinatura deste contrato representa a aceitação do
          modelo enviado como base para o desenvolvimento.
        </li>
        <li>
          <strong>Modificações Estruturais:</strong>
          Caso seja solicitada a criação de seção nova, diferente do que foi
          apresentado, será feita uma avaliação de viabilidade, e caso aceita,
          poderá ser executada sem custo, ou mediante orçamento apresentado à
          CONTRATANTE.
        </li>
      </ol>

      <h2>CLÁUSULA 6 - LIMITAÇÕES DE RESPONSABILIDADE</h2>
      <ol>
        <li>
          <strong>Garantias e Limitações:</strong>A CONTRATADA garante o
          funcionamento adequado do website nos principais navegadores e
          dispositivos atuais. No entanto, adaptações ou otimizações futuras
          para novas tecnologias ou mudanças nos navegadores não estão inclusas
          neste contrato.
        </li>
        <li>
          <strong>Oscilações e Instabilidades:</strong>
          Em caso de site fora do ar por tempo superior a 24 horas, a
          CONTRATANTE pode solicitar desconto na mensalidade proporcional ao
          período que o site ficou inacessível, com exceção de situações que
          possam ocorrer devido a fatores extraordinários, como fatores
          climáticos (tempestades, catástrofes e forças naturais).
        </li>
        <li>
          <strong>Responsabilidade por Serviços de Terceiros:</strong>A
          CONTRATADA não se responsabiliza por falhas ou modificações feitas por
          terceiros em ferramentas integradas ao site (exemplo: A empresa
          responsável pelo WhatsApp encerrar suas atividades e o link para o
          WhatsApp parar de funcionar), plugins de terceiros ou plataformas
          externas. Nesses casos, usaremos o serviço de manutenção já incluído
          no pacote para executar qualquer eventual reparo causado por serviços
          de terceiros que deixaram de funcionar.
        </li>
      </ol>

      <h2>CLÁUSULA 7 - PRAZO E CONDIÇÕES DE RESCISÃO</h2>
      <ol>
        <li>
          <strong>Vigência:</strong>O presente contrato entra em vigor na data
          de sua assinatura, tem duração por tempo indeterminado e pode ser
          rescindido por qualquer uma das partes, não existindo, portanto, prazo
          mínimo de fidelidade.
        </li>
        <li>
          <strong>Rescisão por Inadimplência:</strong>O não pagamento de
          qualquer valor previsto no presente contrato implicará na suspensão
          dos serviços após 15 dias corridos, podendo o contrato ser rescindido
          unilateralmente pela CONTRATADA após 30 dias de inadimplência.
        </li>
        <li>
          <strong>Rescisão por Inexecução:</strong>A parte que deixar de cumprir
          qualquer das obrigações aqui previstas poderá ter o contrato
          rescindido, sem prejuízo da reparação por perdas e danos.
        </li>
        <li>
          <strong>Conteúdo do site e emails:</strong>
          Em caso de rescisão de contrato, a CONTRATANTE será notificada via
          email ou WhatsApp/rede social sobre o prazo de 15 dias corridos para
          realizar o backup das caixas de emails que serão removidas da nossa
          base de dados após esta data. Após esta data também será removido o
          conteúdo do site.
        </li>
      </ol>

      <h2>CLÁUSULA 8 - FORO E DISPOSIÇÕES FINAIS</h2>
      <ol>
        <li>
          <strong>Foro:</strong>
          Fica eleito o foro da comarca de São Bernardo do Campo - SP, com
          renúncia expressa de qualquer outro, por mais privilegiado que seja,
          para dirimir quaisquer controvérsias oriundas deste contrato.
        </li>
        <li>
          <strong>Disposições Finais:</strong>
          Este contrato é firmado em caráter irrevogável e irretratável,
          obrigando as partes e seus sucessores a cumprir com suas disposições.
          Eventuais aditivos a este contrato somente terão validade se forem
          celebrados por escrito e assinados por ambas as partes.
        </li>
      </ol>
    </div>
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <SectionArea>
        <SectionWrapper>
          <p className="mb-[20px]">
            Leia o contrato até o final para poder aceitar
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
                Eu aceito os termos
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
