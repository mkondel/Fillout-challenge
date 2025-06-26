import { IconPlus } from "./Icons";

const Dashes = ({ showPlus = true, onClickPlus = () => {} }) => {
  return (
    <div className="w-fit text-gray-500/50 font-bold flex justify-center items-center group relative">
      {showPlus && (
        <div
          onClick={onClickPlus}
          className="transition duration-200 bg-white border w-fit flex items-center justify-center opacity-0 group-hover:opacity-100 absolute rounded-full cursor-pointer"
        >
          <IconPlus classNameCustom={"p-0.5"} />
        </div>
      )}
      <div
        className={`-mx-5 ${
          showPlus && "group-hover:m-0"
        } -z-[1] relative -top-0.5`}
      >
        ----------
      </div>
    </div>
  );
};

export default Dashes;
