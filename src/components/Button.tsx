import { useState } from "react";
import { IconHamburger } from "./Icons";
import ContextMenu from "./ContextMenu";

const Button = ({
  title,
  Icon,
  onFirst = () => {},
  onRename = () => {},
  onCopy = () => {},
  onDuplicate = () => {},
  onDelete = () => {},
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button className={`btn btn--complete group`}>
        <div className="hidden group-focus:inline">
          {menuOpen && (
            <ContextMenu
              onRename={onRename}
              onFirst={onFirst}
              onCopy={onCopy}
              onDuplicate={onDuplicate}
              onDelete={onDelete}
            />
          )}
        </div>
        <div className={`stroke-[#8C93A1] group-focus:stroke-[#F59D0E]`}>
          <Icon />
        </div>
        {title}
        <div onClick={toggleMenu} className="hidden group-focus:block">
          <IconHamburger />
        </div>
      </button>
    </div>
  );
};

export default Button;
