import logo from "../assets/imgs/logo/logo.png";
import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutImgMobile1 from "../assets/imgs/about/aboutImgMobile.jpg";
import trustedByImg1 from "../assets/imgs/trustedBy/item1.webp";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.webp";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.webp";
import trustedByImg4 from "../assets/imgs/trustedBy/item4.webp";
import trustedByImg5 from "../assets/imgs/trustedBy/item5.webp";
import trustedByImg6 from "../assets/imgs/trustedBy/item6.webp";
import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.webp";
import featuresImg1 from "../assets/imgs/features/featuresImg1.jpg";
import featuresImg2 from "../assets/imgs/features/featuresImg2.jpg";
import featuresImg3 from "../assets/imgs/features/featuresImg3.jpg";
import featuresImg4 from "../assets/imgs/features/featuresImg4.webp";
import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";
import teamMemberImg1 from "../assets/imgs/team/team1.jpg";
import teamMemberImg2 from "../assets/imgs/team/team2.jpg";
import teamMemberImg3 from "../assets/imgs/team/team3.jpg";
import teamMemberImg4 from "../assets/imgs/team/team4.jpg";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logo URM Corretora de Seguros",
      },
      menuItems: ["Início", "Sobre Nós", "Serviços", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Fale Conosco",
    },
    hero: {
      title: (
        <h1>
          Traga o seu negócio
          <br />
          para o <span className="text-yellow-400">mundo digital</span>
        </h1>
      ),
      subtitle: (
        <p>
          Satisfazer os clientes não é mais o suficiente: é preciso encantá-los.
          <br />- Philip Kotler
        </p>
      ),
      ctaButtonText: "Faça seu site com a gente",
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
      imagemMobile: {
        img: aboutImgMobile1,
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
          Nosso compromisso é oferecer segurança e tranquilidade para você, sua
          família e seus bens mais preciosos.
        </div>
      ),
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "link1",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "link2",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "link3",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "link1",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "link2",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "link3",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Adans",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "link1",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "link2",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "link3",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "link1",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "link2",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "link3",
          },
        },
      },
    },
    features: {
      card1: {
        title: "Sites e Landing Pages",
        subtitle: "A melhor forma do seu cliente te encontrar na internet",
        img: featuresImg1,
      },
      card2: {
        title: "Marketing Digital",
        subtitle:
          "Diversas estratégias digitais eficientes pra alavancar seus resultados",
        img: featuresImg2,
      },
      card3: {
        title: "Identidade Digital",
        subtitle:
          "Ter uma imagem do seu negócio atualizada é crucial nos dias de hoje",
        img: featuresImg3,
      },
      card4: {
        title: "Sistemas em nuvem",
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
          Deixa a gente cuidar da vida digital
          <br />
          do seu negócio
        </p>
      ),
      subtitle: "#",
      ctaButtonText: "Fale com um atendente agora mesmo",
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
