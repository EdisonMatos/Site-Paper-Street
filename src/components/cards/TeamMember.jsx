export default function TeamMember({
  img,
  alt,
  name,
  role,
  icon1 = true,
  link1 = true,
  icon2 = true,
  link2 = true,
  icon3 = true,
  link3 = true,
  arialabel1 = true,
  arialabel2 = true,
  arialabel3 = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center p-[20px] w-full tablet1:w-[45%] desktop1:w-[22%]">
      <img
        alt={alt}
        src={img}
        className="w-[215px] h-[215px] desktop1:min-w-[200px] mb-[24px] bg-black object-cover rounded-full"
      />

      <h1 className="mb-[8px] text-title1 font-bold">{name}</h1>

      <div className="desktop2:h-[48px] desktop2:mb-[20px] flex justify-center">
        <p className="text-center text-paragraphLight desktop2:mb-[20px] tablet1:w-[80%]">
          {role}
        </p>
      </div>

      <div className="flex gap-[16px] mt-[12px] desktop2:mt-[0px]">
        {icon1 !== true && link1 !== true && (
          <a
            aria-label={arialabel1}
            href={link1}
            target="_blank"
            className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-white"
          >
            {icon1}
          </a>
        )}

        {icon2 !== true && link2 !== true && (
          <a
            aria-label={arialabel2}
            href={link2}
            target="_blank"
            className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-white"
          >
            {icon2}
          </a>
        )}

        {icon3 !== true && link3 !== true && (
          <a
            aria-label={arialabel3}
            href={link3}
            target="_blank"
            className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-white"
          >
            {icon3}
          </a>
        )}
      </div>
    </div>
  );
}
