import React, { useState } from "react";

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <div className="flex justify-between w-full">
      <button
        className={`flex w-full py-2 focus:outline-none border overflow-hidden text-[10px] h-[48px] ${
          isActive
            ? " border-b-2 border-blue-500 text-blue-500 font-bold font-secondFont bg-blue-500 bg-opacity-20"
            : "border-gray-300 text-gray-600 font-bold font-secondFont flex justify-center items-center hover:border-blue-500 hover:border-opacity-50"
        } flex justify-center items-center`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

const TabContent = ({ content }) => {
  return <div className="">{content}</div>;
};

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const activeContent = tabs.find((tab) => tab.label === activeTab).content;

  return (
    <div className=" flex justify-center phone1:w-full">
      <div className="flex flex-col border border-gray-300 w-full h-auto rounded-[1%]">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              label={tab.label}
              isActive={activeTab === tab.label}
              onClick={() => setActiveTab(tab.label)}
            />
          ))}
        </div>
        <TabContent content={activeContent} />
      </div>
    </div>
  );
}; // continuar a estilização aqui

export default TabComponent;
