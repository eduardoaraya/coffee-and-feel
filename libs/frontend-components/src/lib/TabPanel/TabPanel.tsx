import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

export type TabPanelProps = {
  value: number;
  index: number;
  children: React.ReactNode;
} & MotionBoxProps;

export const TabPanel = ({
  value,
  index,
  children,
  ...rest
}: TabPanelProps) => {
  return (
    <AnimatePresence>
      {value === index && (
        <MotionBox
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          {...rest}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default TabPanel;
