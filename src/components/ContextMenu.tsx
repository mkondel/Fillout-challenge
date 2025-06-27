import {
  IconDelete,
  IconFlag,
  IconPen,
  IconClipboard,
  IconDuplicate,
} from "./Icons";

const ContextMenu = () => (
  <div className="absolute bottom-10 left-0 text-white overflow-visible min-w-56 rounded-lg btn--unchanging !flex-col !items-start stroke-[#8C93A1]">
    <div className="text-lg bg-[#FAFBFC] border-b border-[#E1E1E1] w-full rounded-t-md text-left px-2 py-1">
      Settings
    </div>

    <div className={`menuItem`}>
      <IconFlag />
      Set as first page
    </div>
    <div className={`menuItem`}>
      <IconPen />
      Rename
    </div>
    <div className={`menuItem`}>
      <IconClipboard />
      Copy
    </div>
    <div className={`menuItem`}>
      <IconDuplicate />
      Duplicate
    </div>
    <div className={`menuItem hover:bg-white cursor-auto`}>
      <hr className="border-1 border-[#E1E1E1] w-full" />
    </div>
    <div className={`menuItem stroke-none fill-red-500`}>
      <IconDelete />
      Delete
    </div>
  </div>
);

export default ContextMenu;
