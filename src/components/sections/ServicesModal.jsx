import React, { useState } from "react";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import Faq from "./Faq";
import PropTypes from "prop-types";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);

  const tabs = [
    {
      label: "Pessoal",
      content: (
        <div className="bg-red-500 h-60 ">
          <Faq />
        </div>
      ),
    },
    {
      label: "Empresarial",
      content: <div className="bg-green-500 h-60 "></div>,
    },
    {
      label: "Patrimonial",
      content: <div className="bg-red-500 h-60"></div>,
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
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <div className="flex flex-col gap-[12px]">
          <div>
            <p className="text-[12px]">
              Selecione o tipo de seguro para conhecer as opções disponíveis:
            </p>
          </div>
          <div>
            <TabComponent tabs={tabs} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

//define que receba como propriedades (`props`), para aceitar as informações que eu quero de forma externa
ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
