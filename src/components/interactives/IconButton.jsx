export default function IconButton(props, className) {
  const { icon, label } = props;

  return (
    <button className="flex flex-row items-center justify-center transition rounded-[10px] px-[12px] py-[10px] bg-white hover:bg-black text-black hover:text-white hover:border-white hover:border-solid border-[1px] border-black">
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col justify-end">{icon}</div>
      </div>
    </button>
  );
}
