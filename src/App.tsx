import { IconCheck, IconInfo, IconPage, IconPlus } from "./components/Icons";
import Dashes from "./components/Dashes";
import Button from "./components/Button";

function App() {
  const addPage = () => alert("User clicked to add a page");

  return (
    <main className="flex flex-col gap-8 px-4 py-16 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-center">
        helloooo
        <Button text="Info" Icon={IconInfo} />
        <Dashes onClickPlus={addPage} />
        <Button text="Details" Icon={IconPage} />
        <Dashes onClickPlus={addPage} />
        <Button text="Other" Icon={IconPage} />
        <Dashes onClickPlus={addPage} />
        <Button text="Ending" Icon={IconCheck} />
        <Dashes onClickPlus={addPage} showPlus={false} />
        <button onClick={addPage} className="btn btn--unchanging">
          <IconPlus />
          Add page
        </button>
      </div>
    </main>
  );
}

export default App;
