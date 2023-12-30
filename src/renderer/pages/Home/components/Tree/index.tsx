import { Element } from '@pages/Home';
import { useState } from 'react';
import { Node } from './Node';

interface TreeProps {
  element: Element;
  elementSelected: Element | null;
  renderTime?: number;
  setElement: (element: Element) => void;
}

export function Tree({
  element,
  elementSelected,
  renderTime = 0,
  setElement,
}: TreeProps) {
  const [nodeIsClosed, setNodeIsClosed] = useState(element.closed);

  return (
    <div
      style={{
        marginLeft: `${renderTime === 0 ? 0 : renderTime + 10}px`,
      }}
      className="border-l border-dotted flex flex-col gap-1.5 border-l-zinc-50"
    >
      <Node
        node={element}
        nodeSelected={elementSelected}
        setNode={setElement}
        key={element.id}
        toggleClosed={() => setNodeIsClosed((state) => !state)}
        closed={nodeIsClosed}
      />

      {!nodeIsClosed &&
        element.child.length > 0 &&
        element.child.map((child) => (
          <Tree
            element={child}
            renderTime={renderTime + 1}
            setElement={setElement}
            key={child.id}
            elementSelected={elementSelected}
          />
        ))}
    </div>
  );
}
