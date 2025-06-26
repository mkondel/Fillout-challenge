import { IconHamburger } from "./Icons";

const Button = ({ text, Icon }) => (
  <button className={`btn btn--complete group`}>
    <div className={`stroke-[#8C93A1] group-focus:stroke-[#F59D0E]`}>
      <Icon />
    </div>
    {text}
    <div className="hidden group-focus:block">
      <IconHamburger />
    </div>
  </button>
);

export default Button;
