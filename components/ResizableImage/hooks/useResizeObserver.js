import { useRef, useLayoutEffect, useState, useCallback } from 'react';

const useResizeObserver = () => {
  const [observerEntry, setObserverEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  const disconnect = useCallback(() => observer.current?.disconnect(), []);

  const observe = useCallback(() => {
    observer.current = new ResizeObserver(([entry]) => setObserverEntry(entry));

    if (node) observer.current.observe(node);
  }, [node]);

  useLayoutEffect(() => {
    observe();
    return () => disconnect();
  }, [disconnect, observe]);

  return [setNode, observerEntry.contentRect, node];
};

export default useResizeObserver;
