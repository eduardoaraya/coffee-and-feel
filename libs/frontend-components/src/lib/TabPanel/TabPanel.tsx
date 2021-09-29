import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import { BoxProps, Box } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Property } from 'csstype';

export type TabPanelProps = {
  value: number;
  index: number;
  children: React.ReactNode;
} & MotionBoxProps;

export const TabPanel = ({
  value,
  index,
  children,
  display = 'flex',
  ...rest
}: TabPanelProps) => {
  return (
    <MotionBox
      initial="hidden"
      animate={value === index ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, visibility: 'hidden', display: 'none' },
        visible: {
          opacity: 1,
          visibility: 'visible',
          display: (display as Property.Display) ?? 'inherit',
        },
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default TabPanel;
