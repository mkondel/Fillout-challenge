import { IconCheck, IconInfo, IconPage, IconPlus } from "./components/Icons";
import Dashes from "./components/Dashes";
import Button from "./components/Button";

function App() {
  const addPage = () => alert("User clicked to add a page");

  return (
    <main className="flex flex-col gap-8 max-w-[1280px] mx-auto h-screen relative">
      <div className="px-4 py-16 flex items-center justify-center absolute bottom-0 left-[50%] right-[50%]">
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
