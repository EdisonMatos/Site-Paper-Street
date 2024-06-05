import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionArea({ children, className }) {
  SectionArea.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div
      className={`w-full flex flex-col items-center py-[40px] tablet1:py-[64px] desktop1:py-[96px] ${className}`}
    >
      {childrenArray}
    </div>
  );
}
