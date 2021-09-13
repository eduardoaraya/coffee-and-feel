import { useState, useRef, useEffect } from 'react';
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
  const [onTarget, setOnTarget] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const handleScrollEvent = () => {
    const { current } = elementRef;
    const elementHeight = current?.clientHeight ?? 0;
    if (onTarget && handleOver && window.scrollY > elementTop + elementHeight) {
      setOnTarget(false);
      return handleOver();
    }
    if (handleIn && window.scrollY >= elementTop) {
      setOnTarget(true);
      return handleIn();
    }
    if (onTarget && handleOut && window.scrollY < elementTop) {
      setOnTarget(false);
      return handleOut();
    }
  };

  const handleScrollEventDebounce = useDebounce(handleScrollEvent, 500);

  useEffect(() => {
    if (isBrowser()) {
      const { current } = elementRef;
      setElementTop(current?.offsetTop ?? 0);
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
