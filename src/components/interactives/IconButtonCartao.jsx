import React from "react";

function IconButtonCartao({ icon, label, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className="flex gap-2 w-[95px] items-center justify-center p-2 rounded-md  bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-solid border-[1px] border-primary "
    >
      {icon}
      {label && (
        <span className="text-paragraph1 mt-1 text-center">{label}</span>
      )}
    </button>
  );
}

export default IconButtonCartao;
