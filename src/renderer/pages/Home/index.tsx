import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { tagsHTML } from '@config/types';
import { useState } from 'react';
import { LuArrowBigLeft, LuPlus } from 'react-icons/lu';
import { Tree } from './components/Tree';

export type Element = {
  type: keyof typeof tagsHTML;
  id: string;
  child: Element[];
  value?: string;
  closed: boolean;
};

type HandleUpdateSelectedElementProps = {
  newType?: keyof typeof tagsHTML;
  addEl?: boolean;
  contentOfComponent?: string | null;
};

export function HomePage() {
  const [inEditionMode, setInEditionMode] = useState(false);
  const [elementSelected, setElementSelected] = useState<Element | null>(null);
  const [element, setElement] = useState<Element>({
    type: 'div',
    closed: false,
    child: [],
    id: '3453451',
  });

  function handleToggleInEditionMode() {
    setInEditionMode((state) => !state);
  }

  function handleUpdateSelectedElement({
    newType,
    contentOfComponent,
    addEl,
  }: HandleUpdateSelectedElementProps) {
    if (!elementSelected) return;

    const newState = { ...element };
    const elementToUpdate = { ...elementSelected };

    function recursiveUpdate(currentElement: Element) {
      if (!elementToUpdate || (!newType && contentOfComponent === undefined))
        return;

      if (currentElement.id === elementToUpdate.id) {
        if (newType) {
          currentElement.type = newType;
          elementToUpdate.type = newType;
        }

        if (contentOfComponent !== undefined) {
          currentElement.value = contentOfComponent || '';
          elementToUpdate.value = contentOfComponent || '';
        }
        return;
      }

      if (currentElement.child && currentElement.child.length > 0) {
        currentElement.child.forEach(recursiveUpdate);
      }
    }

    if (addEl) {
      elementToUpdate.child.push({
        child: [],
        closed: false,
        id: Math.floor(Math.random() * 10000).toString(),
        type: 'div',
      });
    }

    recursiveUpdate(newState);

    setElement(() => ({ ...newState }));
    setElementSelected(() => ({ ...elementToUpdate }));
  }

  function makeObject() {
    function recursiveMakeHTML(el: Element, html?: HTMLElement) {
      const htmlNode = document.createElement(
        el.type === 'text' ? 'span' : el.type,
      );

      if (el.value) {
        const n = document.createTextNode(el.value);

        htmlNode.appendChild(n);
      }

      if (el.child && el.child.length > 0) {
        el.child.forEach((e) => recursiveMakeHTML(e, htmlNode));
      }

      if (html) html.appendChild(htmlNode);

      return htmlNode;
    }

    const htmlElement = recursiveMakeHTML(element);

    return htmlElement.innerHTML;
  }

  return (
    <main className="h-screen w-screen flex">
      <div className="h-full w-full flex items-center justify-center">
        {!inEditionMode && (
          <button
            onClick={handleToggleInEditionMode}
            type="button"
            className="border border-blue-700 px-20 py-2 rounded-full"
          >
            <LuPlus size={24} />
          </button>
        )}

        {inEditionMode && (
          <>
            <button
              type="button"
              onClick={handleToggleInEditionMode}
              className="leading-none absolute top-4 left-4"
            >
              <LuArrowBigLeft size={22} />
            </button>
            <div dangerouslySetInnerHTML={{ __html: makeObject() }} />
          </>
        )}
      </div>

      {inEditionMode && (
        <div className="min-w-[22rem] flex flex-col h-full border-l border-l-zinc-700">
          <div className="border-b flex flex-col border-b-zinc-700 p-4 overflow-y-auto">
            <Input.Root>
              <Input.Header>
                <Input.Label>Name of Component</Input.Label>
              </Input.Header>

              <Input.Input>
                <Input.TextInput placeholder="BlueBox" />
              </Input.Input>
            </Input.Root>

            <div className="flex flex-col gap-1.5 mt-3">
              <Tree
                element={element}
                elementSelected={elementSelected}
                setElement={setElementSelected}
              />
            </div>
          </div>

          {elementSelected && (
            <div className="w-full min-h-[30%] flex flex-col p-4">
              <Input.Root>
                <Input.Header>
                  <Input.Label>Type of Element</Input.Label>
                </Input.Header>

                <Select.Root
                  onValueChange={(tag) =>
                    handleUpdateSelectedElement({
                      newType: tag as keyof typeof tagsHTML,
                    })
                  }
                  value={elementSelected.type}
                >
                  <Input.Input>
                    <Select.Trigger>
                      <Select.Value placeholder="Type: " />
                    </Select.Trigger>
                  </Input.Input>

                  <Select.Content>
                    {Object.keys(tagsHTML).map((tag) => (
                      <Select.Item key={tag} value={tag}>
                        {tag}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Input.Root>

              <button
                type="button"
                className="flex items-center my-4 text-sm gap-2 p-1 border rounded-md border-blue-600"
                onClick={() => handleUpdateSelectedElement({ addEl: true })}
              >
                <LuPlus /> Add element
              </button>

              <Input.Root>
                <Input.Header>
                  <Input.Label>Content of Component</Input.Label>
                </Input.Header>

                <Input.Input>
                  <Input.TextInput
                    placeholder="BlueBox"
                    onChange={(e) => {
                      handleUpdateSelectedElement({
                        contentOfComponent:
                          e.target.value === '' ? null : e.target.value,
                      });
                    }}
                  />
                </Input.Input>
              </Input.Root>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
