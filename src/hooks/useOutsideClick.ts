import { type MutableRefObject, useEffect } from 'react';

function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void,
  all = false
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && (all || !ref.current.contains(event.target as Node
      ))) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
