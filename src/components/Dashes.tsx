import { IconPlus } from "./Icons";

// The dashes that connect each page button on the screen. Handles displaying the add page buttons when a user hovers mouse over the dashes.
const Dashes = ({ showPlus = true, onClickPlus = () => {} }) => {
  return (
    <div className="w-fit h-full text-gray-500/50 font-bold flex justify-center items-center group relative">
      {showPlus && (
        <div
          onClick={onClickPlus}
          className="transform duration-100 bg-white border w-fit flex items-center justify-center opacity-0 group-hover:opacity-100 absolute rounded-full cursor-pointer"
        >
          <IconPlus classNameCustom={"p-0.5"} />
        </div>
      )}
      <div
        className={`-mx-5 ${
          showPlus && "transform duration-300 group-hover:-m-2"
        } -z-[1] relative -top-0.5`}
      >
        ----------
      </div>
    </div>
  );
};

export default Dashes;
