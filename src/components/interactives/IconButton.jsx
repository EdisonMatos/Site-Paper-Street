export default function IconButton(props, className) {
  const { icon, label } = props;

  return (
    <button className="flex flex-row items-center justify-center transition rounded-[10px] px-[14px] py-[10px] bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-solid border-[1px] border-primary">
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col justify-end">{icon}</div>
      </div>
    </button>
  );
}
