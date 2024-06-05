import React, { useState } from "react";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import PropTypes from "prop-types";
import CardModal from "../sectionElements/CardModal";
import imgCard from "../../assets/imgs/cardModal/imgCardModal.png";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const tabs = [
    {
      label: "Pessoal",
      content: <div className="bg-red-500  h-auto "></div>,
    },
    {
      label: "Empresarial",
      content: (
        <div className="flex justify-center py-[5%] ">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px] ">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais informações:</p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              <button className="flex" onClick={abrirModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-corner-down-right"
                >
                  <polyline points="15 10 20 15 15 20" />
                  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                </svg>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              {modalAberto && (
                <CardModal
                  visible={modalAberto}
                  onClose={fecharModal}
                  header="Seguro Objetos Pessoais"
                  content={
                    <div className=" w-full flex flex-col gap-[16px]">
                      <div className="flex w-full">
                        <img className="w-[100%] " src={imgCard} alt="" />
                      </div>
                      <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                          <h2 className="flex font-bold">
                            Pra quem é esse seguro?
                          </h2>
                          <p className="flex">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </div>
                        <div className="">
                          <ButtonWithIcon
                            label="Simular Agora"
                            icon={
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                              >
                                <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                                <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                              </svg>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  }
                />
              )}

              {/*  */}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Patrimonial",
      content: 
      <div className="flex justify-center py-[5%] ">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px] ">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais wnifnheifhwerfrqfrrefqewfer :</p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              <button className="flex" onClick={abrirModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-corner-down-right"
                >
                  <polyline points="15 10 20 15 15 20" />
                  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                </svg>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              {modalAberto && (
                <CardModal
                  visible={modalAberto}
                  onClose={fecharModal}
                  header="Seguro Objetos Pessoais"
                  content={
                    <div className=" w-full flex flex-col gap-[16px]">
                      <div className="flex w-full">
                        <img className="w-[100%] " src={imgCard} alt="" />
                      </div>
                      <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                          <h2 className="flex font-bold">
                            Pra quem é esse seguro?
                          </h2>
                          <p className="flex">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </div>
                        <div className="">
                          <ButtonWithIcon
                            label="Simular Agora"
                            icon={
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                              >
                                <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                                <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                              </svg>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  }
                />
              )}

              {/*  */}
            </div>
          </div>
        </div>
    },
  ];

  return (
    <div>
      <ButtonWithIcon
        label="Ver todos"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-white bg-black px-[2%] py-[0.8%]"
      />

      <Dialog
        header="Nossos Seguros"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "384px", "426px": "90vw" }}
        contentStyle={{  padding: '1rem', paddingLeft:'', paddingRight:''}}
        
        // ajustar o tab e o breakpoints
      >
        <div className="flex flex-col w-full gap-[12px]">
          <div>
            <p className="text-[12px] font-secondFont">
              Selecione o tipo de seguro para conhecer as opções disponíveis:
            </p>
          </div>
          <div className="flex justify-center w-full">
            <TabComponent tabs={tabs} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
