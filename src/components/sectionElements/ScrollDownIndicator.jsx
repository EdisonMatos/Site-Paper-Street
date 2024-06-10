import "./scrollDownIndicator.css";

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-[22px] opacity-80 font-secondFont">
          Deslize para baixo
        </p>
        <div className="scrollDown">
          <span></span>
        </div>
      </div>
    </div>
  );
}
