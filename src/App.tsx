import { useState } from "react";
import { IconPlus } from "./components/Icons";
import Dashes from "./components/Dashes";
import Button from "./components/Button";
import MegaIcon from "./components/MegaIcon";
import { ReactSortable } from "react-sortablejs";
import { useHotkeys } from "react-hotkeys-hook";

interface ItemType {
  id: number;
  title: string;
  icon: string;
}

function App() {
  const [pagesList, setPagesList] = useState<ItemType[]>([
    { id: 1, title: "Info", icon: "info" },
    { id: 2, title: "Details", icon: "page" },
    { id: 3, title: "Other", icon: "page" },
    { id: 4, title: "Ending", icon: "check" },
  ]);

  const addPage = (index: number) => {
    // alert(`User clicked to add a page after ${pagesList[index].title}`);
    const newPageTitle = prompt("New page title?") || "New Page";
    setPagesList((currPagesList) => {
      const listCopy = [...currPagesList];
      const newPage = {
        id: Math.random(),
        title: newPageTitle,
        icon: "page",
      };
      listCopy.splice(index + 1, 0, newPage);
      return listCopy;
    });
  };

  const exportPagesList = async () => {
    const jsonState = JSON.stringify([...pagesList]);
    console.log(jsonState);
    const base64State = btoa(jsonState);
    await navigator.clipboard.writeText(base64State);
  };

  const importPagesList = async () => {
    const base64State = await navigator.clipboard.readText();
    const jsonState = JSON.parse(atob(base64State));
    console.log(jsonState);
    setPagesList(jsonState);
  };

  useHotkeys("ctrl+c", exportPagesList);
  useHotkeys("ctrl+v", importPagesList);

  return (
    <main className="flex flex-col max-w-[1280px] mx-auto h-screen relative w-full">
      <div className="p-4 flex flex-col items-center justify-end w-full h-2/3">
        <div className="w-fit h-fit bg-gray-100 text-gray-900 font-light text-3xl text-center rounded-xl flex flex-col items-center border p-8 cursor-default">
          <div className="size-48">
            <img src="copy-paste.png" className="rounded-3xl" />
          </div>
          <div className="w-full whitespace-nowrap flex justify-center gap-2">
            <p>Import/Export your</p>
            <p className="font-bold">custom</p>
            <p>toolbar</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center w-full h-1/3">
        <ReactSortable
          className="flex w-auto"
          list={pagesList}
          setList={setPagesList}
          animation={200}
        >
          {pagesList.map(({ id, title, icon }, index) => (
            <div key={id} className="stroke-black flex items-center">
              <Button
                title={title}
                Icon={() => <MegaIcon icon={icon} />}
                onFirst={() =>
                  setPagesList((currPagesList) => {
                    const listCopy = [...currPagesList];
                    const new1st = listCopy.splice(index, 1)[0];
                    const newList = [new1st, ...listCopy];
                    return newList;
                  })
                }
                onRename={() => {
                  const newTitle = prompt("New page title?") || "";
                  setPagesList((currPagesList) =>
                    currPagesList.map((page, idx) => {
                      if (idx !== index) return page;
                      else return { ...page, title: newTitle };
                    })
                  );
                }}
                onCopy={async () => {
                  await navigator.clipboard.writeText(pagesList[index].title);
                  alert(`Copied "${pagesList[index].title}" to clipboard`);
                }}
                onDuplicate={() =>
                  setPagesList((currPagesList) => {
                    const listCopy = [...currPagesList];
                    const copiedPage = {
                      ...listCopy[index],
                      id: Math.random(),
                    };
                    listCopy.splice(index, 0, copiedPage);
                    return listCopy;
                  })
                }
                onDelete={() =>
                  setPagesList((currPagesList) => {
                    const listCopy = [...currPagesList];
                    listCopy.splice(index, 1);
                    return listCopy;
                  })
                }
              />
              <Dashes
                onClickPlus={() => addPage(index)}
                showPlus={index < pagesList.length - 1}
              />
            </div>
          ))}
        </ReactSortable>

        <button
          onClick={() => addPage(pagesList.length - 1)}
          className="btn btn--unchanging !cursor-pointer"
        >
          <IconPlus />
          Add page
        </button>
      </div>
    </main>
  );
}

export default App;
