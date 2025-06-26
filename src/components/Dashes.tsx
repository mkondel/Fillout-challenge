import { IconPlus } from "./Icons";

const Dashes = () => {
  return (
    <div className="transition duration-500 w-fit -mx-5 hover:m-0 text-gray-500/50 font-bold flex justify-center items-center group relative">
      <div className="transition duration-300 bg-white border w-fit flex items-center justify-center opacity-0 group-hover:opacity-100 absolute rounded-full">
        <IconPlus classNameCustom={"p-0.5"} />
      </div>
      <div className="-z-[1] relative -top-0.5">----------</div>
    </div>
  );
};

export default Dashes;
