import { useState, FC } from "react";
import { IconCheck, IconInfo, IconPage, IconPlus } from "./components/Icons";
import Dashes from "./components/Dashes";
import Button from "./components/Button";
import { ReactSortable, Sortable } from "react-sortablejs";

interface ItemType {
  id: number;
  title: string;
  Icon: FC;
}

function App() {
  const [pagesList, setPagesList] = useState<ItemType[]>([
    { id: 1, title: "Info", Icon: IconInfo },
    { id: 2, title: "Details", Icon: IconPage },
    { id: 3, title: "Other", Icon: IconPage },
    { id: 4, title: "Ending", Icon: IconCheck },
  ]);

  const addPage = (index: number) => {
    // alert(`User clicked to add a page after ${pagesList[index].title}`);
    const newPageTitle = prompt("New page title?") || "New Page";
    setPagesList((currPagesList) => {
      const listCopy = [...currPagesList];
      const newPage = {
        id: Math.random(),
        title: newPageTitle,
        Icon: IconPage,
      };
      listCopy.splice(index + 1, 0, newPage);
      return listCopy;
    });
  };

  return (
    <main className="flex flex-col max-w-[1280px] mx-auto h-screen relative w-full">
      <div className="p-4 flex items-center justify-center absolute bottom-0 w-full">
        <ReactSortable
          className="flex w-auto"
          list={pagesList}
          setList={setPagesList}
          animation={200}
        >
          {pagesList.map(({ id, title, Icon }, index) => (
            <div key={id} className="stroke-black flex items-center">
              <Button
                title={title}
                Icon={() => <Icon />}
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
          className="btn btn--unchanging"
        >
          <IconPlus />
          Add page
        </button>
      </div>
    </main>
  );
}

export default App;
