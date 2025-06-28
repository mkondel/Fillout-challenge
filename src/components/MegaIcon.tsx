import { IconCheck, IconInfo, IconPage, IconPlus } from "./Icons";

// A HOC component to display various icons.
const MegaIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    default:
      return <></>;
      break;
    case "check":
      return <IconCheck />;
      break;
    case "plus":
      return <IconPlus />;
      break;
    case "info":
      return <IconInfo />;
      break;
    case "page":
      return <IconPage />;
      break;
  }
};

export default MegaIcon;
