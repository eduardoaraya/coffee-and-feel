import React from 'react';

export function useBoundingRect() {
  const ref = React.useRef<HTMLElement>();
  const [height, setHeight] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const setHeightInternal = () => {
      setHeight(ref.current?.offsetHeight ?? 0);
    };

    const setWidthInternal = () => {
      setWidth(ref.current?.offsetWidth ?? 0);
    };

    if (ref.current && typeof window !== 'undefined') {
      window.addEventListener('resize', setHeightInternal);
      window.addEventListener('resize', setWidthInternal);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', setHeightInternal);
        window.removeEventListener('resize', setWidthInternal);
      }
    };
  }, [ref]);

  return { ref: ref, width: width, height: height };
}

export default useBoundingRect;
