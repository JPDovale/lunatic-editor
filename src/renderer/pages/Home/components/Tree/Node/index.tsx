import { Element } from '@pages/Home';
import { LuChevronDown } from 'react-icons/lu';

interface NodeProps {
  nodeSelected: Element | null;
  node: Element;
  setNode: (node: Element) => void;
  toggleClosed: () => void;
  closed: boolean;
}

export function Node({
  node,
  nodeSelected,
  closed,
  toggleClosed,
  setNode,
}: NodeProps) {
  return (
    <div className="flex justify-between gap-2">
      <button
        type="button"
        data-active={nodeSelected?.id === node.id}
        className="text-xs flex px-1.5 py-0.5 hover:bg-zinc-800 w-full cursor-pointer duration-200 ease-in-out data-[active=true]:bg-zinc-800"
        onClick={() => setNode(node)}
      >
        {node.type}
      </button>

      {node.child.length > 0 && (
        <button
          type="button"
          data-closed={closed}
          className="opacity-60 data-[closed=true]:-rotate-90 ease-in-out duration-200"
          onClick={toggleClosed}
        >
          <LuChevronDown />
        </button>
      )}
    </div>
  );
}
