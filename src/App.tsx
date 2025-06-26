import { useState } from "react";
import { IconCheck, IconInfo, IconPage, IconPlus } from "./components/Icons";
import Dashes from "./components/Dashes";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col gap-8 px-4 py-16 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-center">
        <Button text="Info" Icon={IconInfo} variant="active" />
        <Dashes />
        <Button text="Details" Icon={IconPage} variant="complete" />
        <Dashes />
        <Button text="Other" Icon={IconPage} variant="complete" />
        <Dashes />
        <Button text="Ending" Icon={IconCheck} variant="complete" />
        <Dashes />
        <Button text="Add page" Icon={IconPlus} variant="active" />
      </div>
    </main>
  );
}

export default App;
