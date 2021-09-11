import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Box } from '.pnpm/@material-ui+system@5.0.0-beta.5_1b8a390c1218df869c93c0893911ddd6/node_modules/@material-ui/system';
import { useDebounce } from '../hooks/useDebounce';

export interface ScrollTargetProps {
  handleIn?: CallableFunction;
  handleOut?: CallableFunction;
  handleOver?: CallableFunction;
  className?: string;
}

const isBrowser = () => window !== undefined;

export const ScrollTarget: React.FC<ScrollTargetProps> = ({
  children,
  handleOver,
  handleIn,
  handleOut,
  className,
}): JSX.Element => {
  const [elementTop, setElementTop] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (isBrowser()) {
      const { current } = elementRef;
      setElementTop(current?.offsetTop ?? 0);
    }
  }, [elementRef]);

  const handleScrollEvent = () => {
    const { current } = elementRef;
    const elementHeight = current?.clientHeight ?? 0;
    if (handleOver && window.scrollY > elementTop + elementHeight) {
      return handleOver();
    }
    if (handleIn && window.scrollY > elementTop) {
      return handleIn();
    }
    if (handleOut && window.scrollY < elementTop) {
      return handleOut();
    }
  };

  const handleScrollEventDebounce = useDebounce(handleScrollEvent, 500);

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', handleScrollEventDebounce);
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener('scroll', handleScrollEventDebounce);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={className} ref={elementRef}>
      {children}
    </Box>
  );
};

export default ScrollTarget;
