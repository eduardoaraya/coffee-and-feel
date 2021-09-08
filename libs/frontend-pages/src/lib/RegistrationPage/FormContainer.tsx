import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormContainerProps extends MotionBoxProps {
  activeIndex?: number;
  index?: number;
}

export const FormContainer = ({
  activeIndex,
  index,
  ...rest
}: FormContainerProps) => {
  return (
    <MotionBox
      {...rest}
      exit="hidden"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    ></MotionBox>
  );
};

export default FormContainer;
