import logo from "../assets/imgs/logo/logo.png";
import aboutImg1 from "../assets/imgs/about/aboutImg.webp";
import trustedByImg1 from "../assets/imgs/trustedBy/item1.webp";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.webp";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.webp";
import trustedByImg4 from "../assets/imgs/trustedBy/item4.webp";
import trustedByImg5 from "../assets/imgs/trustedBy/item5.webp";
import trustedByImg6 from "../assets/imgs/trustedBy/item6.webp";
import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.webp";
import featuresImg1 from "../assets/imgs/features/featuresImg1.webp";
import featuresImg2 from "../assets/imgs/features/featuresImg2.webp";
import featuresImg3 from "../assets/imgs/features/featuresImg3.webp";
import featuresImg4 from "../assets/imgs/features/featuresImg4.webp";
import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.webp";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logo URM Corretora de Seguros",
      },
      menuItems: ["Início", "Sobre Nós", "Serviços", "Perguntas Frequentes"],
      ctaButtonText: "Simule agora seu seguro",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      title: (
        <div>
          Proteja o que <br />
          <span className="text-primary">mais</span> importa
        </div>
      ),
      subtitle:
        "Protegendo o seu veículo, para que cada viagem seja uma experiência tranquila e segura.",
      ctaButtonText: "Fazer simulação",
      images: {
        background: {},
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    trustedBy: {
      title: "Parceria com as maiores seguradoras",
      subtitle: "Confiabilidade e excelência em proteção",
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "Seguradora Porto Seguro",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "Seguradora Bradesco",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "Seguradora Liberty",
        },
        img4: {
          img: { trustedByImg4 },
          alt: "Seguradora Allianz",
        },
        img5: {
          img: { trustedByImg5 },
          alt: "Seguradora SulAmérica",
        },
        img6: {
          img: { trustedByImg6 },
          alt: "Seguradora Tokio Marine",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 30,
      number1Description: "Anos no mercado",
      number2: 650,
      number2Description: "Apólices geridas anualmente",
      number3: 96,
      number3Description: "De índice de renovação",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Pessoas em negociação",
      },
      title: "Sobre nós 👋",
      paragraph: (
        <div>
          Após 15 anos de dedicação em diversas corretoras e acumulando valiosas
          experiências na solução dos problemas de seus clientes, o Sr.
          Uellinton Rodrigues de Matos fundou a URM Seguros.
          <br />
          <br />
          Com mais de 30 anos de história, a URM Seguros se consolidou como
          referência no mercado de seguros, compreendendo profundamente o que é
          necessário para garantir a sua proteção.
          <br />
          <br />
          Nosso compromisso é oferecer segurança e tranquilidade para você, sua
          família e seus bens mais preciosos.
        </div>
      ),
    },
    features: {
      card1: {
        title: "Cotação de Seguros",
        subtitle: "Melhores cotações para suas necessidades",
        img: featuresImg1,
      },
      card2: {
        title: "Gestão de Apólices",
        subtitle: "Administração completa das suas apólices",
        img: featuresImg2,
      },
      card3: {
        title: "Apoio em Sinistros",
        subtitle: "Assistência eficiente na resolução de sinistros",
        img: featuresImg3,
      },
      card4: {
        title: "Análise de Risco",
        subtitle: "Avaliação detalhada dos riscos para proteção ideal",
        img: featuresImg4,
      },
      title: "Nossas especialidades",
      subtitle: "Serviços personalizados para sua tranquilidade",
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      title: (
        <p className="">
          Simule e contrate agora mesmo
          <br />o seu <strong>seguro</strong>
        </p>
      ),
      subtitle: "#",
      ctaButtonText: "Fazer simulação",
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle:
        "Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!",
      questions: {
        question1: {
          question: "Qual é o tipo de seguro mais adequado para mim?",
          answer:
            "A resposta a essa pergunta depende muito das suas necessidades específicas. Nossa equipe de corretores está aqui para ajudá-lo a entender suas opções e recomendar o tipo de seguro que melhor se adapta à sua situação. Isso pode incluir seguro de vida, seguro de saúde, seguro de automóvel, seguro residencial, entre outros. Entre em contato conosco para uma consulta personalizada.",
        },
        question2: {
          question: "Como posso economizar dinheiro no meu seguro?",
          answer:
            "Existem várias maneiras de economizar dinheiro no seguro. Uma delas é agrupar várias apólices de seguro sob o mesmo provedor, o que geralmente resulta em descontos. Além disso, manter um bom histórico de condução, um histórico de saúde sólido ou instalar dispositivos de segurança em sua casa ou veículo pode diminuir os custos do seguro. Nossos corretores podem revisar suas opções e oferecer conselhos sobre como maximizar sua cobertura enquanto economiza dinheiro.",
        },
        question3: {
          question: "O que devo fazer em caso de sinistro?",
          answer:
            "Em caso de sinistro, é importante nos contatar imediatamente para iniciar o processo de reivindicação. Nosso objetivo é tornar o processo o mais simples possível para você. Coletaremos todas as informações necessárias e orientaremos você em cada etapa do processo de reivindicação, garantindo que você receba a assistência de que precisa o mais rápido possível.",
        },
        question4: {
          question: "Como faço para entender minha apólice de seguro?",
          answer:
            "Compreender os termos e condições de sua apólice de seguro pode parecer complicado, mas estamos aqui para ajudar. Nossos corretores estão à disposição para explicar todos os detalhes da sua apólice, incluindo cobertura, exclusões, limites e quaisquer outros aspectos importantes. Não hesite em nos contatar se tiver alguma dúvida sobre sua cobertura ou qualquer aspecto do seu seguro.",
        },
      },
    },
  },
};

export default content;
