import links from "./links";
import logo from "../assets/imgs/logo/logo.webp";
import logoDark from "../assets/imgs/logo/logoDark.webp";
import aboutImg1 from "../assets/imgs/about/aboutSocial.webp";
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

import aboutImgMobile1 from "../assets/imgs/about/aboutImgMobile.webp";
import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.webp";
import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";
import MotionDivDownToUp from "../components/animation/MotionDivDownToUp";
import TypewriterComponent from "../components/animation/TypeWriter";
import ButtonWithIconNavbar from "../components/interactives/ButtonWithIconNavbar";
import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import imgTestimonial1 from "../assets/imgs/testimonialsHero/imgTestimonial1.webp";
import imgTestimonial2 from "../assets/imgs/testimonialsHero/imgTestimonial2.webp";
import imgTestimonial3 from "../assets/imgs/testimonialsHero/imgTestimonial3.webp";
import imgTestimonial4 from "../assets/imgs/testimonialsHero/imgTestimonial4.webp";
import imgTestimonial5 from "../assets/imgs/testimonialsHero/imgTestimonial5.webp";
import imgTestimonial6 from "../assets/imgs/testimonialsHero/imgTestimonial6.webp";
import imgTestimonial7 from "../assets/imgs/testimonialsHero/imgTestimonial7.webp";
import imgTestimonial8 from "../assets/imgs/testimonialsHero/imgTestimonial8.webp";
import imgTestimonial9 from "../assets/imgs/testimonialsHero/imgTestimonial9.webp";
import imgTestimonial10 from "../assets/imgs/testimonialsHero/imgTestimonial10.webp";
import imgTestimonial11 from "../assets/imgs/testimonialsHero/imgTestimonial11.webp";
import imgTestimonial12 from "../assets/imgs/testimonialsHero/imgTestimonial12.webp";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logo",
      },
      logoDark: {
        img: logoDark,
        alt: "Logo",
      },
      menuItems: ["Início", "Sobre Nós", "Serviços", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      title: (
        <h1 className="">
          <span className="text-white">
            Criamos <br className="hidden tablet1:flex desktop1:hidden" />{" "}
          </span>
          <TypewriterComponent
            strings={["Sites", "Landing Pages", "Sites para Tráfego Pago"]}
            className="text-yellow-400 my-typewriter"
          />
          <p className="mt-[16px] font-medium text-paragraph4 font-secondFont leading-[28px]">
            A opinião dos nossos clientes são <br /> prova de nossa qualidade.
            Confira! 👇
          </p>
        </h1>
      ),
      subtitle: (
        <p>
          Somos especialistas em desenvolver sites modernos, que aparecem nas
          buscas no Google e funcionam bem em todos os tamanhos de tela
        </p>
      ),
      ctaButtonText: "Falar pelo WhatsApp",
      ctaButtonInstagram: "Falar pelo Instagram",
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
    features: {
      miniTag: "Serviços",
      title: "Nossas especialidades",
      subtitle:
        "Se você quer trazer o seu negócio pro mundo digital, nós te ajudamos",
      card1: {
        title: "Sites para você ou sua empresa",
        subtitle:
          "A melhor forma do seu cliente te encontrar na internet e fazer ele confiar no seu negócio",
        img: featuresImg1,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre sites.`,
      },
      card2: {
        title: "Landing Pages Institucionais",
        subtitle:
          "A forma mais moderna e objetiva de colocar seu negócio no Google e ganhar mais autoridade na internet",
        img: featuresImg2,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card3: {
        title: "Landing Pages em Geral",
        subtitle:
          "Ofereça serviços, venda cursos, ebooks e mais, combinando estratégias de anúncios em redes sociais e tráfego pago",
        img: featuresImg3,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre os serviços de vocês.`,
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
          Somos a Paper Street e somos especialistas em desenvolver páginas web.
          Os sites que fazemos passam por checagens super criteriosas em testes
          de performance e temos orgulho em dizer que entregamos sites rápidos e
          que atendem aos objetivos de nossos clientes.
          <br />
          <br />
          Levamos a experiência do usuário muito a sério, focando sempre em
          desenvolver sites que sejam bonitos e fáceis de serem utilizados,
          desde os mais jovens até os mais idosos, aplicando sempre os conceitos
          mais modernos que existem no mercado no momento.
          <br />
          <br />
          Quer saber mais sobre a gente?
          <br />
          <br />
          <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <ButtonWithIconNavbar
                className="w-[75%]"
                link={links.socialMedia.instagram}
                label="Siga a gente no Instagram"
                icon={
                  <svg
                    aria-label="Botão para Instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <ButtonWithIconNavbar
                className="w-[75%]"
                link={links.socialMedia.facebook}
                label="Siga a gente no Facebook"
                icon={
                  <svg
                    aria-label="Botão para Facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <ButtonWithIconNavbar
                className="w-[75%]"
                link={links.socialMedia.linkedin}
                label="Siga a gente no Linkedin"
                icon={
                  <svg
                    aria-label="Botão para Linkedin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div>
        </div>
      ),
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      miniTag: "Team",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor Geral",
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
            link1: "https://www.linkedin.com/in/edison-matoss/",
            arialabel1: "Link para LinkedIn",

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
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            arialabel2: "Link para GitHub",
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
            link3: "https://edisonmatos.github.io/",
            arialabel3: "Link para github.io",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Suporte ao cliente",
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
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            arialabel1: "Link para LinkedIn",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link2: "https://wa.me/+557193064270",
            arialabel2: "Link para WhatsApp",
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
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
            arialabel3: "Link para Instagram",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
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
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            arialabel1: "Link para LinkedIn",
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
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            arialabel2: "Link para GitHub",
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
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
            arialabel3: "Link para Instagram",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Esthéfane Sousa",
          },
          name: "Esthéfane Sousa",
          role: "Comercial e Vendas",
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
            link1: "http://www.linkedin.com/in/esthefane-sousa",
            arialabel1: "Link para LinkedIn",
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
            link2: "https://www.instagram.com/esthegloria/",
            arialabel2: "Link para Instagram",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+553484339190",
            arialabel3: "Link para WhatsApp",
          },
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      title: (
        <p className="">Deixa a gente cuidar da vida digital do seu negócio</p>
      ),
      subtitle: "#",
      ctaButtonText: "Fale com um atendente",
      link: "",
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
    steps: {
      miniTag: "Nosso Passo a Passo",
      title: "Como funciona?",
      subtitle:
        "Nossos processos foram pensados para você não ter nenhuma preocupação enquanto seu site é construido.",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Informações",
          cardDescription:
            "Após contratação, um agente especializado da Paper irá entrar em contato e solicitar informações. Temos imagens e textos profissionais para auxiliar caso o cliente não tenha.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Desenvolvimento do site",
          cardDescription:
            "Iniciamos a criação do site, e durante esse período, continuamos à disposição para tirar dúvidas. O prazo vai variar de acordo com o que foi acordado durante a contratação.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Site no ar!",
          cardDescription:
            "Enviamos uma prévia para o cliente e, após aprovado, explicamos o processo de escolha do nome do site, criamos os emails profissionais e colocamos no ar.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Suporte e pós-venda",
          cardDescription:
            "De brinde, entregamos uma arte personalizada para o cliente postar em suas redes sociais, anunciando o site novo. Além disso, daremos dicas de como fazer melhor uso do seu site!",
        },
      },
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas",
      miniTag: "Perguntas Frequentes",
      questions: {
        question0: {
          question: "Como escolher entre um site e uma landing page?",
          answer: (
            <p>
              Sites são mais amplos, focam mais em mostrar você ou seu negócio.
              O objetivo do site é mostrar que você é moderno e que sua empresa
              está na internet também, assim como te dar autoridade, falar sobre
              você, explicar o que você faz em geral e mostrar que você é
              confiável. Hoje em dia, muitas pessoas só fecham negócios com
              empresas que têm site, por exemplo.
              <br />
              <br />
              Já uma Landing Page tem como foco ser uma ação de marketing mais
              agressiva no convencimento sobre algum produto ou serviço que você
              presta, tanto que o foco dela é fazer o visitante executar alguma
              ação muito específica, como, por exemplo, comprar algo ou se
              inscrever em um curso. A landing page não vai falar para o cliente
              sobre informações da empresa em geral, pois esse é o papel do
              site. A landing page vai fazer de tudo para que toda a atenção do
              visitante seja direcionada para o produto ou serviço que você quer
              vender.
            </p>
          ),
        },
        question1: {
          question:
            "Gostaria de ter um site, mas não entendo sobre o assunto. O que devo fazer?",
          answer:
            "Entre em contato conosco que iremos te guiar com bastante simplicidade no processo. Para se tornar um cliente nosso, não é necessário nenhum tipo de conhecimento sobre sites ou internet. Estamos aqui exatamente para que você não tenha preocupação nenhuma.",
        },
        question2: {
          question:
            "Quero ter um site, mas não tenho fotos boas e não sei escrever bons textos. O que devo fazer?",
          answer:
            "Não se preocupe, nós também temos a solução para você. Nossa equipe irá sugerir todo material audiovisual que você precisar para ter o seu site e você não precisa ter custo com isso!",
        },
        question3: {
          question: "Já tenho um site, mas está antigo. Vocês o atualizam?",
          answer:
            "Sim, e esse é um caso muito comum. Como a internet evolui bastante, às vezes um site feito há muito tempo precisa de uma atualização. Basta falar com nossa equipe que iremos modernizar o seu site.",
        },
        question4: {
          question:
            "Quais são as formas de pagamento que a Paper Street aceita?",
          answer:
            "Aceitamos e parcelamos o seu site no cartão de crédito, assim como também trabalhamos com Pix e Boleto Bancário.",
        },
        question5: {
          question: "A Paper Street emite nota fiscal?",
          answer:
            "Sim. Somos uma empresa devidamente regularizada e emitimos nota fiscal com nosso CNPJ, conforme a legislação vigente.",
        },
        question6: {
          question: "A definir",
          answer: "A definir",
        },
      },
    },
    testimonialsHero: {
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
        img5: {
          img: imgTestimonial5,
          alt: "Imagem de feedback",
        },
        img6: {
          img: imgTestimonial6,
          alt: "Imagem de feedback",
        },
        img7: {
          img: imgTestimonial7,
          alt: "Imagem de feedback",
        },
        img8: {
          img: imgTestimonial8,
          alt: "Imagem de feedback",
        },
        img9: {
          img: imgTestimonial9,
          alt: "Imagem de feedback",
        },
        img10: {
          img: imgTestimonial10,
          alt: "Imagem de feedback",
        },
        img11: {
          img: imgTestimonial11,
          alt: "Imagem de feedback",
        },
        img12: {
          img: imgTestimonial12,
          alt: "Imagem de feedback",
        },
      },
    },
  },
};

export default content;
